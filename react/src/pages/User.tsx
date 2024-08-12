import React from "react";
import Layout from "../components/Layout";

interface ProfileCardProps {
  imageUrl: string;
  description: string;
  location: string;
  itemsForSale: { id: number; title: string; description: string; price: number }[];
}

const User: React.FC<ProfileCardProps> = ({ imageUrl, description, location, itemsForSale }) => {
  return (
    <Layout>

        <div className="profile-container">
        <div className="profile-header">
            <img src={imageUrl} alt="Profile" className="profile-image" />
            <div className="profile-info">
            <p className="profile-description">{description}</p>
            <p className="profile-location">{location}</p>
            </div>
        </div>
        <div className="items-grid">
            {itemsForSale.map((item) => (
            <div key={item.id} className="item-card">
                <h3 className="item-title">{item.title}</h3>
                <p className="item-description">{item.description}</p>
                <p className="item-price">${item.price}</p>
            </div>
            ))}
        </div>
        </div>
    </Layout>

  );
};

export default User;
