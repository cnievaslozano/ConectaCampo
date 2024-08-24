import React, { useEffect, useState } from "react";
import Layout from "@components/layout/Layout";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "@components/common/Container";
import Button from "@components/common/Button";
import CardProduct from "@components/products/CardProduct";
import defaultImage from "@assets/user/defaultUser.webp"
import '@styles/Profile.css'
import ErrorComp from "@components/layout/Error";

interface User {
  id: number;
  following: User[];
  followers: User[];
  products: Product[];
  roles: Role[];
  city: string;
  name: string;
  surname: string;
  username: string;
  password: string;
  email: string;
  telephone: string;
  aboutMe: string | null;
  profileImage: string | null;
  createdAt: string;
}

interface Product {
  id: number;
  categories: Category[];
  name: string;
  description: string;
  price: number;
  quantity: number;
  createdAt: string;
}

interface Category {
  id?: number;
  name?: string;
}

interface Role {
  id: number;
  name: string;
}

const Profile = () => { 
  const [user, setUser] = useState<User | null>(null);
  const locationUrl = useLocation(); 
  const userNameUrl = locationUrl.pathname.split("/").filter(Boolean).pop();

  const handleProfile = async () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow" as RequestRedirect,
    };

    try {
      const response = await fetch("http://localhost:8080/api/v1/user/all", requestOptions);
      const result = await response.json();
      const userFound = result.find((item: { username: string | undefined; }) => item.username === userNameUrl);
      setUser(userFound); 
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  useEffect(() => {
    handleProfile();
  }, [userNameUrl]); // Se ejecuta cada vez que cambia el username en la URL

  if(user){
    return (
      <Layout>
        <Container className="">
          <div className="profile-header">
            <img src={user.profileImage || defaultImage} alt="Profile" className="profile-image" title={user.username} />
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
                <Link to="/profile/followList">
                  <p className="stat-indicator">{user.following.length}</p>
                </Link>
              </div>
              <div className="stat-container">
                <p className="stat-name">Seguidores</p>
                <Link to="/profile/followerList">
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
              <CardProduct key={item.id} prod={item}/>
            ))}
          </div>
        </Container>
      </Layout>
    );
  } else {
    return(
      <ErrorComp />
    );
  }
};

export default Profile;
