import React, { useState } from "react";
import "@styles/userSettings.css";
import Layout from "@components/layout/Layout";
import { User } from "@types/models";
import { toast, ToastContainer } from "react-toastify";
import fetchUserById from "@components/user/fetchUserById";

const UserSettings: React.FC = () => {
  let userString = localStorage.getItem("userData");
  let ownUser: User = JSON.parse(userString ? userString : "");

  const [userState, setUserState] = useState(ownUser);
  const [telephone, setTelephone] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [pathProfileImage, setPathProfileImage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const userData = {
      telephone: telephone || userState.telephone,
      city: city || userState.city,
      password: password || userState.password,
      aboutMe: aboutMe || userState.aboutMe,
      pathProfileImage: pathProfileImage || userState.pathProfileImage,
    };

    try {
      const token = localStorage.getItem("token");
      const ownUserId = userState.id; // Asegúrate de usar userState.id
      if (!ownUserId) {
        throw new Error("User ID is undefined");
      }

      console.log("http://localhost:8080/api/v1/user/" + ownUserId);

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", "Bearer " + token);

      const response = await fetch("http://localhost:8080/api/v1/user/" + ownUserId, {
        method: "PUT",
        headers: myHeaders,
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        toast.error("Error en la petición");
        throw new Error("Error en la petición");
      }
      toast.success("Datos actualizados con éxito");
      console.log("Datos enviados con éxito:", userData);

      // Reintroducimos el nuevo user en el localStorage y actualizamos el estado
      const updatedUser = await fetchUserById(ownUserId);
      localStorage.setItem("userData", JSON.stringify(updatedUser));
      setUserState(updatedUser);

    } catch (error) {
      toast.error("Error al enviar los datos");
      console.error("Error al enviar los datos:", error);
    }
  };

  return (
    <Layout>
      <ToastContainer />
      <div className="settings-container">
        <h2 className="text-xl">Configuración de cuenta</h2>
        <form className="settings-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="telephone">Teléfono:</label>
            <input 
              type="text"
              id="telephone"
              name="telephone"
              placeholder="Introduce tu nuevo teléfono"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">Ciudad:</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Introduce tu ciudad"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              
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
              
            />
          </div>
          <div className="form-group">
            <label htmlFor="aboutMe">Sobre Mí:</label>
            <textarea
              className="w-full"
              id="aboutMe"
              name="aboutMe"
              placeholder="Cuéntanos sobre ti"
              value={aboutMe}
              onChange={(e) => setAboutMe(e.target.value)}
              
            />
          </div>
          <div className="form-group">
            <label htmlFor="pathProfileImage">Imagen de Perfil (URL):</label>
            <input
              type="text"
              id="pathProfileImage"
              name="pathProfileImage"
              placeholder="Introduce la URL de tu imagen de perfil"
              value={pathProfileImage}
              onChange={(e) => setPathProfileImage(e.target.value)}
              
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
