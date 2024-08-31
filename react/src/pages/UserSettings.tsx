import React, { useState } from "react";
import "@styles/userSettings.css";
import Layout from "@components/layout/Layout";
import { User } from "@types/models";
import { toast, ToastContainer } from "react-toastify";
import fetchUserById from "@components/user/fetchUserById";
import { uploadImage } from "@utils/fireBaseUtils";

const UserSettings: React.FC = () => {
  let userString = localStorage.getItem("userData");
  let ownUser: User = JSON.parse(userString ? userString : "");

  const [userState, setUserState] = useState(ownUser);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [telephone, setTelephone] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [pathProfileImage, setPathProfileImage] = useState(userState.pathProfileImage || "");
  const [profileImageFile, setProfileImageFile] = useState<File | null>(null); // Nuevo estado para el archivo de imagen

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfileImageFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      let updatedPathProfileImage = pathProfileImage;

      // Subir la imagen si el usuario ha seleccionado una nueva
      if (profileImageFile) {
        updatedPathProfileImage = await uploadImage(profileImageFile);
      }

      const userData = {
        name: name || userState.name,
        surname: surname || userState.surname,
        username: username || userState.username,
        telephone: telephone || userState.telephone,
        city: city || userState.city,
        password: password || userState.password,
        aboutMe: aboutMe || userState.aboutMe,
        pathProfileImage: updatedPathProfileImage,
      };

      const token = localStorage.getItem("token");
      const ownUserId = userState.id;
      if (!ownUserId) {
        throw new Error("User ID is undefined");
      }

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

      // Actualizar el estado del usuario en localStorage y el estado del componente
      const updatedUser = await fetchUserById(ownUserId);
      localStorage.setItem("userData", JSON.stringify(updatedUser));
      setUserState(updatedUser);
      localStorage.setItem("username", updatedUser.username);

    } catch (error) {
      toast.error("Error al enviar los datos");
      console.error("Error al enviar los datos:", error);
    }
  };

  return (
    <Layout>
      <ToastContainer />
      <div className="settings-container">
        <h2 className="text-3xl">Configuración de cuenta</h2>
        <form className="settings-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input 
              type="text"
              id="name"
              name="name"
              placeholder="Introduce tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="surname">Apellido:</label>
            <input 
              type="text"
              id="surname"
              name="surname"
              placeholder="Introduce tu apellido"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              autoComplete="off" 
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
              autoComplete="new-password"
            />
          </div>
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
            <label htmlFor="profileImage">Imagen de Perfil:</label>
            <input
              type="file"
              id="profileImage"
              name="profileImage"
              onChange={handleImageChange}
            />
          </div>
          {pathProfileImage && (
            <div className="form-group">
              <label>Vista previa de la imagen:</label>
              <img
                src={pathProfileImage}
                alt="Imagen de perfil"
                className="w-24 h-24 object-cover rounded-full"
              />
            </div>
          )}
          <button type="submit" className="submit-btn">
            Guardar Cambios
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default UserSettings;
