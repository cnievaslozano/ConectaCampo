import React, { useState } from "react";
import "@styles/userSettings.css";
import Layout from "@components/layout/Layout";

const UserSettings: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("buyer");
  const [image, setImage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, haciendo una llamada a una API.
    console.log({ name, email, password, role });
  };

  return (
    <Layout>
      <div className="settings-container">
        <h2 className="text-xl">Configuración de cuenta</h2>
        <form className="settings-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Introduce tu nuevo nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Introduce tu nuevo email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Introduce tu nueva contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="role">Rol:</label>
            <select
              id="role"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="buyer">Comprador</option>
              <option value="seller">Vendedor</option>
            </select>
          </div>
          {/* Imagen de Perfil Opcional */}
          <div className="mb-4">
            <label
              className="block text-start text-body-color mb-2"
              htmlFor="profileImage"
            >
              Imagen de Perfil:
            </label>
            <input
              type="file"
              name="profileImage"
              id="profileImage"
              accept="image/*"
              className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-sm outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
              value={image}
              onChange={(e) => setImage(e.target.value)}
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
