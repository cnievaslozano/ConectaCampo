import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BadgeTypeProduct from "../products/BadgeTypeProduct";
import { CardProductProps } from "../../types/props";
import DeleteProduct from "@components/products/deleteProduct";
import { User } from "@types/models";

const CardProduct = ({ product, publication }: CardProductProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [userData, setUserData] = useState();
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + "...";
    }
    return description;
  };

  useEffect(() => {
    const userDataString = localStorage.getItem("userData");
    if (userDataString) {
      const userData:User = JSON.parse(userDataString);
      if (userData.id === publication?.user.id) {
        setShowDeleteButton(true);
      }
    }
  }, [product, imageLoaded]);

  //console.log(product); //Se pasa como undefined
  if (product) {
     return (
    <Link
      to={`/product/${product.id}`}
      key={product.id}
      className="flex-shrink-0 flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:scale-105"
    >
      <div className="w-64 min-h-fit bg-white border border-gray-200 rounded-lg shadow">
        {" "}
        {/* Ancho fijo */}
        <div className="relative w-full">
          {!imageLoaded && (
            <div className="h-48 absolute inset-0 bg-gray-300 animate-pulse rounded-t-lg"></div>
          )}
          <img
            className={`h-48 w-full rounded-t-lg transition-opacity duration-300 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            src={publication?.pathPublicationImage}
            alt={product.name}
            onLoad={handleImageLoad}
          />
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
            {showDeleteButton && <DeleteProduct product={product} />}

          </div>
          
        </div>
      </div>
    </Link>
  );
  }else{
    return null;
  }
 
};

export default CardProduct;
