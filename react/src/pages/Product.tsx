import React, { useEffect, useState } from "react";
import CorBefore from "@assets/cor antes.webp";
import CorAfter from "@assets/corazon.webp";
import Layout from "@components/layout/Layout";
import { Link, useParams } from "react-router-dom";
import userImage from "@assets/user1.webp";
import { Product, User } from "@types/models";
import BadgeTypeProduct from "@components/products/BadgeTypeProduct";
import fetchUserById from "@components/user/fetchUserById";

//TODO ELiminar bucle infinito por el useEffect de product
const ProductPage = () => {
  const [isFavorited, setIsFavorited] = useState(false);
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  const handleProduct = async () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow" as RequestRedirect,
    };

    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/product/${productId}`,
        requestOptions
      );
      const result = await response.json();
      setProduct(result);
      console.log(result);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };
  const handleUser = async () => {  //Gestiona el usuario de el producto, despues de el primer fetch se rellena tmbn el user
    const allUsers = await fetchUserById(product?.userId);
    setUser(allUsers);
  }

  useEffect(() => {
    handleProduct();
    handleUser();

  }, [productId, product]); 

  if (!product) {
    return <div>Loading...</div>;
  }

  const publication = product.publications[0]; // Suponiendo que siempre habrá al menos una publicación

  return (
    <Layout>
      <p>{user?.aboutMe}</p>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row">
        <div className="flex-shrink-0 w-full lg:w-1/2">
          <img
            src={publication.pathPublicationImage}
            alt={product.name}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="flex-grow mt-8 lg:mt-0 lg:ml-8">
          <div className="flex text-center justify-between">
            <h1 className="text-3xl font-bold text-2d572c">{product.name}</h1>
            <Link to={`/profile/${product.userId}`}>
              <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded dark:bg-blue-200 dark:text-blue-800 flex items-center">
              <img
                src={userImage}
                alt="Usuario"
                className="w-12 h-12 rounded-full object-cover border-2 border-gray-300"
              />
                {/* Aquí podrías agregar el nombre del usuario si estuviera disponible */}
              </span>
            </Link>
          </div>
          

          <div className="flex items-center">
            <BadgeTypeProduct className="scale-150" type={product.categories[0].name} />
          </div>

          <p className="text-2xl text-black mt-4">{`Precio: ${product.price} €`}</p>
          <p className="text-lg text-black mt-4">{publication.description}</p>
          <ul className="list-disc list-inside mt-4 text-black">
            <li>Lugar de venta: {publication.address}</li>
            <li>Cantidad disponible: {product.quantity}</li>
            <li>Horario: {publication.schedule}</li>
            <li>Fecha de publicación: {new Date(publication.createdAt).toLocaleDateString()}</li>
            <li>Likes: {publication.likeCount}</li>
          </ul>

          <div className="mt-6 flex items-center">

            <button
              className="ml-4 flex items-center bg-[#8AA86E] text-white font-bold py-2 px-4 rounded hover:bg-lightGreen2"
              onClick={toggleFavorite}
            >
              <span className="mr-2">Añadir a Favoritos</span>
              <img
                src={isFavorited ? CorAfter : CorBefore}
                alt="Corazón"
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
