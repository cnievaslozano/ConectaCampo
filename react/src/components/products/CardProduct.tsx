import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BadgeTypeProduct from "./BadgeTypeProduct";
import DeleteProduct from "@components/products/deleteProduct"; // Asegúrate de tener la ruta correcta
import { CardProductProps } from "../../types/props";

const CardProduct = ({ product }: CardProductProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  useEffect(() => {
    const userDataString = localStorage.getItem("userData");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      if (userData.userId === product.publicationId) {
        setShowDeleteButton(true);
      }
    }
  }, [product]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + "...";
    }
    return description;
  };

  if (!product) {
    return null; // Si el producto es undefined, retornar null directamente
  }

  return (
    <Link
      to={`/product/${product.id}`}
      key={product.id}
      className="flex-shrink-0 flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:scale-105"
    >
      <div className="w-64 min-h-fit bg-white border border-gray-200 rounded-lg shadow">
        <div className="relative w-full">
          {!imageLoaded && (
            <div className="h-48 absolute inset-0 bg-gray-300 animate-pulse rounded-t-lg"></div>
          )}
          <img
            className={`h-48 w-full rounded-t-lg transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
            src={product.image}
            alt={product.name}
            onLoad={handleImageLoad}
          />
          <div className="absolute bottom-2 right-2">
            <img
              className="w-10 h-10 rounded-full border-2 shadow-xl"
              src={product.imageUser}
              alt="User Avatar"
            />
          </div>
        </div>
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
              {product.name}
            </h5>
            <BadgeTypeProduct type={product.categories} />
          </div>
          <div className="text-sm mb-4">
            {truncateDescription(product.description, 50)}
          </div>
          <div className="flex justify-between text-base font-bold text-gray-800 dark:text-white">
            {product.price} €/kg
            {/* {showDeleteButton && <DeleteProduct product={product} />} */}

          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardProduct;
