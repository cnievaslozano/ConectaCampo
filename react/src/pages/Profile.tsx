import React, { useEffect, useState } from "react";
import Layout from "@components/layout/Layout";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "@components/common/Button";
import CardProduct from "@components/products/CardProduct";
import defaultImage from "@assets/user/defaultUser.webp";
import { User, Product, Category, Role } from "../types/models";
import "@styles/Profile.css";

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); // Estado para manejar el spinner de carga
  const locationUrl = useLocation();
  const userNameUrl = locationUrl.pathname.split("/").filter(Boolean).pop();
  const navigate = useNavigate();

  const handleProfile = async () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow" as RequestRedirect,
    };

    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/user/all",
        requestOptions
      );
      const result = await response.json();
      const userFound = result.find(
        (item: { username: string | undefined }) =>
          item.username === userNameUrl
      );

      if (userFound) {
        setUser(userFound);
      } else {
        navigate("/404");
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
      navigate("/404");
    } finally {
      setLoading(false); // Detiene el spinner una vez que la solicitud ha terminado
    }
  };

  useEffect(() => {
    handleProfile();
  }, [userNameUrl]);

  if (loading) {
    // Mostrar spinner mientras se carga la data
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
      </div>
    );
  }

  if (user) {
    return (
      <Layout>
        <div className="profile-header">
          <img
            src={user.profileImage || defaultImage}
            alt="Profile"
            className="profile-image"
            title={user.username}
          />
          <div className="profile-info">
            <h1 className="profile-name">{user.name + " " + user.surname}</h1>
            <p className="profile-description">{user.aboutMe}</p>
            <div className="flex justify-between">
              <p className="profile-location">{user.city}</p>
              {localStorage.getItem("username") === userNameUrl ? (
                <Link to="/addProduct">
                  <Button
                    text="Añadir Publicación"
                    className="rounded-md p-1 text-gray-100"
                  ></Button>
                </Link>
              ) : null}
            </div>
          </div>
          <div className="profile-info-stats">
            <div className="stat-container">
              <p className="stat-name">Publicaciones</p>
              <p className="stat-indicator">{user.products.length}</p>
            </div>
            <div className="stat-container">
              <p className="stat-name">Seguidos</p>
              <Link to={"/profile/" + user.username + "/followList"}>
                <p className="stat-indicator">{user.following.length}</p>
              </Link>
            </div>
            <div className="stat-container">
              <p className="stat-name">Seguidores</p>
              <Link to={"/profile/" + user.username + "/followerList"}>
                <p className="stat-indicator">{user.followers.length}</p>
              </Link>
            </div>
          </div>
        </div>
        <h1 className="text-xl mt-10 mb-5">Publicaciones</h1>
        <div className="items-grid">
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
        <h1 className="text-xl mt-10 mb-5">Favoritos guardados</h1>
        <div className="items-grid">
          {user.products.map((item, index) => (
            <CardProduct key={item.id} prod={item} />
          ))}
        </div>
      </Layout>
    );
  } else {
    return null; // En caso de que no haya usuario y se haya manejado la redirección, no mostrar nada
  }
};

export default Profile;
