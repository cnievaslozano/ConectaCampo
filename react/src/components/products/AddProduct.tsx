import React, { useState } from "react";
import "@styles/userSettings.css";
import Layout from "../layout/Layout";

const UserSettings: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [categoryIds, setCategoryIds] = useState("verduras");
  const [productImage, setProductImage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, haciendo una llamada a una API.
    console.log({ name, description, price, categoryIds });
  };

  return (
    <Layout>
      <div className="settings-container p-10 px-40">
        <h2 className="text-xl">Ficha de nueva publicación</h2>
        <form className="settings-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre del producto:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Introduce el nombre del alimento"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Descripcion:</label>
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Introduce la descripción de la publicación"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-between">
            <div className="form-group">
              <label htmlFor="price">Precio:</label>
              <input
                className="inline-block"
                type="number"
                id="price"
                name="price"
                placeholder="En € por kg"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Cantidad:</label>
              <input
                className="inline-block"
                type="number"
                id="quantity"
                name="quantity"
                placeholder="Cantidad en kg"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="categoryIds">Tipo de producto:</label>
            <select
              id="categoryIds"
              name="categoryIds"
              value={categoryIds}
              onChange={(e) => setCategoryIds(e.target.value)}
              required
            >
              <option value="verduras">Verduras</option>
              <option value="frutas">Frutas</option>
              <option value="lacteos">Lacteos</option>
              <option value="granos">Granos</option>
              <option value="semillas">Frutos secos y semillas</option>
              <option value="aceites">Aceites</option>
              <option value="miel">Miel</option>
            </select>
          </div>
          {/* Imagen de Perfil Opcional */}
          <div className="mb-4">
            <label
              className="block text-start text-body-color mb-2"
              htmlFor="productImage"
            >
              Imagen del producto:
            </label>
            <input
              type="file"
              name="productImage"
              id="productImage"
              accept="image/*"
              className="w-full rounded-md border bg-white border-stroke bg-transparent px-5 py-3 text-sm outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
              value={productImage}
              onChange={(e) => setProductImage(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-btn">
            Guardar Cambios
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default UserSettings;
