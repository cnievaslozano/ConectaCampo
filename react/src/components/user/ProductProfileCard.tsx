import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BadgeTypeProduct from "../products/BadgeTypeProduct";
import { CardProductProps } from "../../types/props";
import DeleteProductModal from "@components/products/DeleteProductModal";
import { User } from "../../types/models";
import { toast } from "react-toastify";
import { FaTrash } from "react-icons/fa"; // Asegúrate de instalar react-icons si no lo has hecho

const CardProduct = ({ product, publication }: CardProductProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [userData, setUserData] = useState<User | undefined>();
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      const userDataParsed: User = JSON.parse(userDataString);
      setUserData(userDataParsed);
      if (userDataParsed.id === publication?.user.id) {
        setShowDeleteButton(true);
      }
    }
  }, [product, imageLoaded]);

  const handleDelete = async () => {
    if (!product) return;

    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/product/${product.id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Error al eliminar el producto");
      }

      toast.success("Producto eliminado exitosamente");
      setIsModalOpen(false);
      // Opcionalmente, puedes realizar alguna acción adicional como actualizar el estado para reflejar la eliminación.
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <div className="relative">
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
              </div>
            </div>
          </div>
        </Link>

        {showDeleteButton && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full shadow-lg hover:bg-red-700"
          >
            <FaTrash />
          </button>
        )}
      </div>

      {/* Modal de Confirmación */}
      <DeleteProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
      />
    </>
  );
};

export default CardProduct;
