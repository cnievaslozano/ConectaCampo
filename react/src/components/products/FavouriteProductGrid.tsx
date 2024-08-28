import React, { useState, useEffect } from "react";
import ProductProfileCard from "@components/user/ProductProfileCard";
import { Product, Publication } from "@types/models";

const FavouriteProductGrid = ({ userId, allUsers ,  products }: { userId: number; allUsers:any; products: Product[]|null }) => {
  const [favouriteProducts, setFavouriteProducts] = useState<Set<Product>>(new Set());
  const [publications, setPublications] = useState<Publication[]>([]); // Estado para almacenar todas las publicaciones

  // Función para obtener todas las publicaciones desde el backend
  const fetchAllPublications = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/publication/all");
      const data = await response.json();
      if (Array.isArray(data)) {
        setPublications(data); // Guardar las publicaciones obtenidas en el estado
      } else {
        console.error("Expected an array of publications, but got:", data);
      }
    } catch (error) {
      console.error("Error fetching publications:", error);
    }
  };

  const handleFavouriteGrid = () => {
    if (!products || products.length === 0 || !publications || publications.length === 0) {
      return;
    }

    const favouriteProductsSet = new Set<Product>();

    // Recorrer todas las publicaciones obtenidas desde el backend
    publications.forEach(publication => {
      // Verificar si el `userId` está en la lista de `likes` de la publicación
      const userHasLiked = publication.likes.some(like => like.id === userId);
      if (userHasLiked) {
        // Encontrar el producto asociado a esta publicación (asumiendo que tienen el mismo ID)
        const product = products.find(product => product.id === publication.id);

        if (product) {
          // Si se encuentra el producto, añadirlo al `Set` de productos favoritos
          favouriteProductsSet.add(product);
          console.log("Publicación con like:", publication);
          console.log("Producto añadido a favoritos:", product);
        }
      }
    });

    // Actualizar el estado con los productos favoritos encontrados
    setFavouriteProducts(favouriteProductsSet);
  };

  useEffect(() => {
    fetchAllPublications(); // Obtener todas las publicaciones al montar el componente
  }, []);

  useEffect(() => {
    if (publications.length > 0 && products && products.length > 0) {
      handleFavouriteGrid(); // Llamar a la función cuando se tengan las publicaciones y los productos
    }
  }, [userId, products, publications]);

  return (
    <>
      {Array.from(favouriteProducts).map((product) => (
        // Renderizar cada producto favorito usando el componente `ProductProfileCard`
        <ProductProfileCard
          key={product.id}
          product={product}
          publication={publications.find(pub => pub.id === product.id)}
        />
      ))}
    </>
  );
};

export default FavouriteProductGrid;

