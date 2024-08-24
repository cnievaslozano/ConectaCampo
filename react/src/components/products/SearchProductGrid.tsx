import React from "react";
import { Link } from "react-router-dom";

const SearchProductGrid = () => {
  const itemsForSale = [
    {
      id: 1,
      title: "Sandias",
      description: "Sandias frescas de El priorat",
      price: 100,
      image:
        "https://naranjasmarisa.com/wp-content/uploads/2023/04/banner-melones-naranjas-marisa-2023.webp",
    },
    {
      id: 2,
      title: "Melones",
      description: "Melones plantados de temporada",
      price: 150,
      image:
        "https://naranjasmarisa.com/wp-content/uploads/2023/04/banner-melones-naranjas-marisa-2023.webp",
    },
    {
      id: 2,
      title: "Melones",
      description: "Melones plantados de temporada",
      price: 150,
      image:
        "https://naranjasmarisa.com/wp-content/uploads/2023/04/banner-melones-naranjas-marisa-2023.webp",
    },

    // Agrega más items aquí
  ];

  return (
    <div>
      {" "}
      {/**Los estilos de los productos estan en Profile.css, nose xk pero siempre se usan */}
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
    </div>
  );
};

export default SearchProductGrid;
