import React, { useState } from "react";
import "@styles/userSettings.css";
import Layout from "@components/layout/Layout";
import { User } from "@types/models";
import { toast, ToastContainer } from "react-toastify";


const UserSettings: React.FC = () => {
  let userString = localStorage.getItem("userData");
  const ownUser: User = JSON.parse(userString ? userString : "");

  const [telephone, setTelephone] = useState(ownUser.telephone);
  const [city, setCity] = useState(ownUser.city);
  const [password, setPassword] = useState(ownUser.password);
  const [aboutMe, setAboutMe] = useState(ownUser.aboutMe);
  const [pathProfileImage, setPathProfileImage] = useState(ownUser.pathProfileImage);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const userData = {
      telephone,
      city,
      password,
      aboutMe,
      pathProfileImage,
    };

    try {
      //Sacamos la info de el user, y la info de el token
        const token = localStorage.getItem("token");
        const ownUserId = ownUser.id;
        console.log("http://localhost:8080/api/v1/user/" + ownUserId);

        const raw = JSON.stringify({ //Json a pasar en caso de que no exista la info de el ownUser
          "telephone": "123456789",
          "city": "Benidorm",
          "password": "admin",
          "aboutMe": "Me gusta la playa y los animales",
          "pathProfileImage": "https://firebasestorage.googleapis.com/v0/b/conectacampo-9691f.appspot.com/o/images%2F1724550483002_3.jpg?alt=media&token=007759ab-cb27-4680-b6fc-197881e0bf47"
        });

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + token);

      const response = await fetch("http://localhost:8080/api/v1/user/" + ownUserId, {
        method: "PUT",
        headers: myHeaders,
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        toast.error("Error en la peticion")
        throw new Error("Error en la petición");
      }
      toast.success("Datos enviados al post Con exito")
      console.log("Datos enviados con éxito:", userData);
    } catch (error) {
      toast.error("Error envio de datos")
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
              required
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
              value={"admin"}
              onChange={(e) => setPassword(e.target.value)}
              required
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
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="pathProfileImage">Imagen de Perfil (URL):</label>
            <input
              type="text"
              id="pathProfileImage"
              name="pathProfileImage"
              placeholder="Introduce la URL de tu imagen de perfil"
              value={pathProfileImage} //TODO Hacer que cuando se suba la imagen en Firebase, se suba y devuelva el url
              onChange={(e) => setPathProfileImage(e.target.value)}
              required
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
