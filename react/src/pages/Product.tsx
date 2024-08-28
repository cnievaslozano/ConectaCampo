import React, { useEffect, useState } from "react";
import CorBefore from "@assets/cor antes.webp";
import CorAfter from "@assets/corazon.webp";
import Layout from "@components/layout/Layout";
import { Link, useParams } from "react-router-dom";
import { Product, User, Publication } from "../types/models";
import BadgeTypeProduct from "@components/products/BadgeTypeProduct";
import { ToastContainer } from "react-toastify";
import postFavorite from "@components/products/postFavorite";
import isFavourite from "@components/products/isFavourite";

const ProductPage = () => {
  const [isFavorited, setIsFavorited] = useState(false);
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [publication, setPublication] = useState<Publication | null>(null);

  // Función para obtener los datos del producto, la publicación y el usuario
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtener los datos del producto
        const productResponse = await fetch(
          `http://localhost:8080/api/v1/product/${productId}`
        );
        const productData = await productResponse.json();
        setProduct(productData);

        // Obtener los datos de la publicación usando el id del producto (asumiendo que es igual al id de la publicación)
        const publicationResponse = await fetch(
          `http://localhost:8080/api/v1/publication/${productId}`
        );
        const publicationData = await publicationResponse.json();
        setPublication(publicationData);

        // Obtener los datos del usuario usando el id del usuario en la publicación
        const userResponse = await fetch(
          `http://localhost:8080/api/v1/user/id/${publicationData.user.id}`
        );
        const userData = await userResponse.json();
        setUser(userData);

        // Verificar si el producto es favorito

        const isFavoritedResponse = isFavourite(publicationData);
        setIsFavorited(isFavoritedResponse);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [productId]);

  // Función para gestionar el favorito
  const toggleFavorite = async () => {
    try {
      if (product) {
        postFavorite(!isFavorited, product.id);
        setIsFavorited(!isFavorited);
      }
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  };

  // Mostrar una pantalla de carga mientras se obtienen los datos
  if (!product || !publication || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <ToastContainer />
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row h-[700px] shadow-lg rounded-lg overflow-hidden">
        <div className="flex-shrink-0 w-full lg:w-1/2 relative">
          <img
            src={publication.pathPublicationImage}
            alt={product.name}
            className="w-full h-full object-cover rounded-t-lg lg:rounded-l-lg"
          />
        </div>

        <div className="flex-grow mt-8 lg:mt-0 lg:ml-8 p-6 lg:p-8 rounded-r-lg shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-extrabold text-[#2d572c]">
              {product.name}
            </h1>
            <Link to={`/profile/${user.username}`}>
              <span
                className="bg-blue-200 text-blue-900 text-sm font-semibold px-4 py-2 rounded-full flex items-center shadow-sm hover:bg-blue-300 transition duration-200"
                title={user.username}
              >
                <img
                  src={user.pathProfileImage}
                  alt="Usuario"
                  className="w-12 h-12 rounded-full object-cover border-2 border-gray-300"
                />
                <span className="ml-2 text-lg font-medium">
                  {user.name} {user.surname}
                </span>
              </span>
            </Link>
          </div>

          <div className="flex items-center mb-4">
            <BadgeTypeProduct
              className="scale-150"
              type={product.categories[0]?.name || "defaultcategory"}
            />
          </div>

          <p className="text-2xl text-[#333] font-semibold mt-4">{`Precio: ${product.price} €`}</p>
          <p className="text-lg text-gray-700 mt-4">
            {publication.description}
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-800">
            <li>
              <strong>Lugar de venta:</strong> {publication.address}
            </li>
            <li>
              <strong>Cantidad disponible:</strong> {product.quantity}
            </li>
            <li>
              <strong>Horario:</strong> {publication.schedule}
            </li>
            <li>
              <strong>Fecha de publicación:</strong>{" "}
              {new Date(publication.createdAt).toLocaleDateString()}
            </li>
            <li>
              <strong>Likes:</strong> {publication.likeCount}
            </li>
          </ul>

          <div className="mt-8 flex items-center">
            {localStorage.getItem("token") && (
              <button
                className="ml-4 flex items-center bg-[#8AA86E] text-white font-bold py-3 px-5 rounded-full shadow-md hover:bg-[#769E5F] transition duration-200 transform hover:scale-105"
                onClick={toggleFavorite}
              >
                <span className="mr-2">
                  {isFavorited ? "Eliminar de Favoritos" : "Añadir a Favoritos"}
                </span>
                <img
                  src={isFavorited ? CorAfter : CorBefore}
                  alt="Corazón"
                  className="w-6 h-6"
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
