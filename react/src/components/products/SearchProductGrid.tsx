import React, { useEffect, useState } from "react";
import CardProduct from "./CardProduct";
import { Product, UserData, Category } from "../../types/models";
import Pagination from "@components/common/Pagination";

const SearchProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 9;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/v1/product/all"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        // Obtener todas las IDs de usuario para hacer solicitudes adicionales
        const userIds = Array.from(
          new Set(data.map((product: Product) => product.userId))
        );

        // Obtener todas las IDs de publicaciones para hacer solicitudes adicionales
        const publicationIds = Array.from(
          new Set(data.map((product: Product) => product.publicationId))
        );

        // Hacer solicitudes para obtener las imágenes de los usuarios
        const userImagesPromises = userIds.map((userId: number) =>
          fetch(`http://localhost:8080/api/v1/user/id/${userId}`)
            .then((response) => response.json())
            .then((userData: UserData) => ({
              userId,
              pathProfileImage: userData.pathProfileImage,
            }))
        );

        const userImages = await Promise.all(userImagesPromises);
        const userImagesMap = new Map(
          userImages.map((userImage) => [
            userImage.userId,
            userImage.pathProfileImage,
          ])
        );

        // Hacer solicitudes para obtener las imágenes de las publicaciones
        const publicationImagesPromises = publicationIds.map(
          (publicationId: number) =>
            fetch(`http://localhost:8080/api/v1/publication/${publicationId}`)
              .then((response) => response.json())
              .then((publicationData) => ({
                publicationId,
                pathPublicationImage: publicationData.pathPublicationImage,
              }))
        );

        const publicationImages = await Promise.all(publicationImagesPromises);
        const publicationImagesMap = new Map(
          publicationImages.map((publicationImage) => [
            publicationImage.publicationId,
            publicationImage.pathPublicationImage,
          ])
        );

        // Mapear los productos con las imágenes de los usuarios y publicaciones
        const fetchedProducts = data.map((product: Product) => {
          const image = publicationImagesMap.get(product.publicationId) || null;
          const categoryName =
            product.categories.length > 0
              ? product.categories[0].name
              : "defaultcategory";

          return {
            id: product.id,
            userId: product.userId,
            categories: categoryName,
            name: product.name,
            description: product.description,
            price: product.price,
            quantity: product.quantity,
            image: image, // Imagen de la publicación
            imageUser: userImagesMap.get(product.userId) || "", // Imagen del usuario
          };
        });

        setProducts(fetchedProducts);
        setLoading(false);
      } catch (error) {
        setError("Error fetching products: " + error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / productsPerPage);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {currentProducts.map((item) => (
          <CardProduct key={item.id} product={item} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        paginate={paginate}
      />
    </>
  );
};

export default SearchProductGrid;
