import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import Container from "../components/Container";

interface ProfileCardProps {
  imageUrl: string;
  description: string;
  location: string;
  itemsForSale: { id: number; title: string; description: string; price: number; image: string }[];
}

const Profile: React.FC<ProfileCardProps> = ({ imageUrl, description, location, itemsForSale }) => {
  return (
    <Layout>

      <Container className="">
      <div className="profile-header">
            <img src={imageUrl} alt="Profile" className="profile-image" />
            <div className="profile-info">
              <h1 className="profile-name">Juana de Arcos</h1>
              <p className="profile-description">{description}</p>
              <p className="profile-location">{location}</p>
            </div>
            <div className="profile-info-stats">
              <div className="stat-container">
                <p className="stat-name">Publicaciones</p>
                <p className="stat-indicator">{itemsForSale.length}</p>
              </div>
              <div className="stat-container">
                <p className="stat-name">Seguidos</p>
                <Link to="/">
                    <p className="stat-indicator">2</p>
                </Link>

              </div>
              <div className="stat-container">
                <p className="stat-name">Seguidores</p>
                <Link to="/">
                    <p className="stat-indicator">2</p>
                </Link>
              </div>
            </div>
        </div>
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
      </Container>

    </Layout>

  );
};

export default Profile;
