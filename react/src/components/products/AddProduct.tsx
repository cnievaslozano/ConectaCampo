import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import { uploadImage } from "@utils/fireBaseUtils";
import Button from "@components/common/Button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { User } from "../../types/models";

const categories = [
  { id: "2", label: "Frutas" },
  { id: "1", label: "Verduras" },
  { id: "3", label: "Lácteos" },
  { id: "5", label: "Granos" },
  { id: "6", label: "Hierbas" },
  { id: "7", label: "Semillas" },
  { id: "8", label: "Aceites" },
  { id: "9", label: "Miel" },
];

const CreatePublication: React.FC = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [publicationDescription, setPublicationDescription] = useState("");
  const [publicationAddress, setPublicationAddress] = useState("");
  const [publicationSchedule, setPublicationSchedule] = useState("");
  const [productImage, setProductImage] = useState<File | null>(null);
  const [selectedCategoryIds, setSelectedCategoryIds] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const [nextProductId, setNextProductId] = useState<number | null>(null);

  // Obtener el siguiente ID para el producto
  const fetchNextProductId = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/product/all");
      if (!response.ok) {
        throw new Error("Error al obtener productos");
      }
      const products = await response.json();

      // Encontrar el último ID de producto
      const lastProductId = products.reduce((maxId, product) => {
        return product.id > maxId ? product.id : maxId;
      }, 0); // Empezamos con 0 si no hay productos

      setNextProductId(lastProductId + 1);
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchNextProductId();
  }, []);

  const handleProductImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProductImage(e.target.files[0]);
    }
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const options = e.target.options;
    const selectedIds: number[] = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedIds.push(Number(options[i].value));
      }
    }
    setSelectedCategoryIds(selectedIds);
  };

  let userString = localStorage.getItem("userData");

  let ownUserId = 0;
  if (userString) {
    const ownUser: User = JSON.parse(userString);
    ownUserId = ownUser.id;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let productImageUrl = "";
      if (productImage) {
        // Subir la imagen a Firebase y obtener la URL
        productImageUrl = await uploadImage(productImage);
      }

      if (!productImageUrl) {
        throw new Error(
          "Error al cargar la imagen. Asegúrate de seleccionar una imagen válida."
        );
      }

      // Verificar que se haya obtenido el siguiente ID de producto
      if (nextProductId === null) {
        throw new Error("No se pudo determinar el siguiente ID del producto.");
      }

      // Preparar el body para la solicitud de creación del producto
      const productBody = {
        userId: ownUserId,
        categoryIds: selectedCategoryIds,
        publicationId: nextProductId, // Usar el siguiente ID de producto
        name: productName,
        description: productDescription,
        price: parseFloat(productPrice).toFixed(2),
        quantity: parseInt(productQuantity, 10),
      };

      // Crear el producto
      const productResponse = await fetch(
        "http://localhost:8080/api/v1/product",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productBody),
        }
      );

      if (!productResponse.ok) {
        throw new Error("Error al crear el producto");
      }

      const product = await productResponse.json();

      const publicationBody = {
        userId: ownUserId,
        description: publicationDescription,
        address: publicationAddress,
        schedule: publicationSchedule,
        pathPublicationImage: productImageUrl, // Asegúrate de pasar la URL aquí
      };

      // Hacer console.log del body antes de enviarlo
      console.log("Body de la publicación:", publicationBody);

      // Crear la publicación
      const publicationResponse = await fetch(
        "http://localhost:8080/api/v1/publication",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(publicationBody),
        }
      );

      if (!publicationResponse.ok) {
        throw new Error("Error al crear la publicación");
      }

      toast.success("Publicación creada exitosamente");

      // Limpiar formulario y estado
      setProductName("");
      setProductDescription("");
      setProductPrice("");
      setProductQuantity("");
      setPublicationDescription("");
      setPublicationAddress("");
      setPublicationSchedule("");
      setProductImage(null);
      setSelectedCategoryIds([]);
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <ToastContainer /> {/* Asegúrate de que ToastContainer esté presente */}
      <div className="p-10 max-w-4xl mx-auto">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Formulario de Producto */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              Detalles del Producto
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="productName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nombre del Producto
                </label>
                <input
                  type="text"
                  id="productName"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="productDescription"
                  className="block text-sm font-medium text-gray-700"
                >
                  Descripción
                </label>
                <input
                  type="text"
                  id="productDescription"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="productPrice"
                  className="block text-sm font-medium text-gray-700"
                >
                  Precio
                </label>
                <input
                  type="number"
                  id="productPrice"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="productQuantity"
                  className="block text-sm font-medium text-gray-700"
                >
                  Cantidad
                </label>
                <input
                  type="number"
                  id="productQuantity"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  value={productQuantity}
                  onChange={(e) => setProductQuantity(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="productImage"
                  className="block text-sm font-medium text-gray-700"
                >
                  Imagen del Producto
                </label>
                <input
                  type="file"
                  id="productImage"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  onChange={handleProductImageChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="categories"
                  className="block text-sm font-medium text-gray-700"
                >
                  Categorías
                </label>
                <select
                  id="categories"
                  multiple
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  onChange={handleCategoryChange}
                  required
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Formulario de Publicación */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              Detalles de la Publicación
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="publicationDescription"
                  className="block text-sm font-medium text-gray-700"
                >
                  Descripción de la Publicación
                </label>
                <input
                  type="text"
                  id="publicationDescription"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  value={publicationDescription}
                  onChange={(e) => setPublicationDescription(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="publicationAddress"
                  className="block text-sm font-medium text-gray-700"
                >
                  Dirección
                </label>
                <input
                  type="text"
                  id="publicationAddress"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  value={publicationAddress}
                  onChange={(e) => setPublicationAddress(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="publicationSchedule"
                  className="block text-sm font-medium text-gray-700"
                >
                  Horario
                </label>
                <input
                  type="text"
                  id="publicationSchedule"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  value={publicationSchedule}
                  onChange={(e) => setPublicationSchedule(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          <Button text="Crear Publicación" type="submit" />
        </form>
      </div>
    </Layout>
  );
};

export default CreatePublication;
