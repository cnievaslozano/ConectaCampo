import React, { useState } from "react";
import Layout from "@components/layout/Layout";
import { Link } from "react-router-dom";
import Container from "@components/common/Container";
import Button from "@components/common/Button";
import CarouselHome from "@components/home/CarouselHome";
import CardProduct from "@components/products/CardProduct";

interface ProfileCardProps {
  imageUrl: string;
  description: string;
  location: string;
  itemsForSale: { id: number; title: string; description: string; price: number; image: string }[];
}
  //TODO Logica que mostrará la opción de añadir producto si es tu propio perfil 
  // const [isOwnProfile, setIsOwnProfile] = useState(true);
  // const toggleIsOwnProfile = () => {
  //   setIsOwnProfile(!isOwnProfile);
  // }

const Profile: React.FC<ProfileCardProps> = ({ imageUrl, description, location, itemsForSale }) => {
  return (
    <Layout>

      <Container className="">
        <div className="profile-header">
              <img src={imageUrl} alt="Profile" className="profile-image" />
              <div className="profile-info">
                <h1 className="profile-name">Juana de Arcos</h1>
                <p className="profile-description">{description}</p>
                <div className="flex justify-between">
                  <p className="profile-location">{location}</p>
                  <Link to="/addProduct">
                  <Button text="Añadir Publicación" className="rounded-md p-1 text-gray-100"></Button>
                  </Link>
                </div>
 
              </div>
              <div className="profile-info-stats">
                <div className="stat-container">
                  <p className="stat-name">Publicaciones</p>
                  <p className="stat-indicator">{itemsForSale.length}</p>
                </div>
                <div className="stat-container">
                  <p className="stat-name">Seguidos</p>
                  <Link to="/profile/followList">
                      <p className="stat-indicator">2</p>
                  </Link>

                </div>
                <div className="stat-container">
                  <p className="stat-name">Seguidores</p>
                  <Link to="/profile/followerList">
                      <p className="stat-indicator">2</p>
                  </Link>
                </div>
              </div>
          </div>
          <h1 className="text-xl mt-10 mb-5">Prublicaciones</h1>
          <div className="items-grid">
            <CardProduct />
            <CardProduct />
            <CardProduct />

          </div>
          <h1 className="text-xl mt-10 mb-5">Favoritos guardados</h1>
          <div className="items-grid">
              {itemsForSale.map((item) => (
              <div key={item.id} className="item-card">
                <Link to="/profile">
                  <img className="item-image" src={item.image} alt="Err" />
                  <h3 className="item-title">{item.title}</h3>
                </Link>

                  <p className="item-description">{item.description}</p>
                  <p className="item-price">{item.price} €/kg</p>
              </div>
              ))}
          </div>
          <CarouselHome />

          
      </Container>

    </Layout>

  );
};

export default Profile;
