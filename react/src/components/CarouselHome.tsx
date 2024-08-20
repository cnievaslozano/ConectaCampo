import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Tomates camperos",
    price: "$599",
    owner: "Juan Gonzalez",
    imageUrl: "https://sembralia.com/cdn/shop/articles/tomate.jpg?v=1648560931",
  },
  {
    id: 2,
    name: "Lentejas",
    price: "$200",
    owner: "Carlos Sai",
    imageUrl: "https://sembralia.com/cdn/shop/articles/tomate.jpg?v=1648560931",
  },
  {
    id: 3,
    name: "Garbanzos",
    price: "€30",
    owner: "Rafel Dalmeu",
    imageUrl: "https://sembralia.com/cdn/shop/articles/tomate.jpg?v=1648560931",
  },
  {
    id: 4,
    name: "Peras limoneras",
    price: "$400",
    owner: "Andrei Matau",
    imageUrl: "https://sembralia.com/cdn/shop/articles/tomate.jpg?v=1648560931",
  },
  // Puedes agregar más productos aquí
];

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsToShow = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= products.length - productsToShow ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? products.length - productsToShow : prevIndex - 1
    );
  };

  return (
    <div className="relative flex items-center justify-center my-10" style={{height: '660px'}}>
      <button className="absolute left-0 p-2 bg-[#8AA86E] text-lightGreen3 rounded-full" onClick={prevSlide}>
        &lt;
      </button>
      <div className="overflow-hidden w-full max-w-4xl mx-8">
        <div
          className="flex transition-transform duration-300 gap-3"
          style={{transform: `translateX(-${currentIndex * (100 / productsToShow)}%)`,}}
        >
          {products.map((product) => (
                //Para ajustar las que se ven es el w-1/3
            <div key={product.id} className="xs:w-1/1 md:w-1/2 lg:w-1/3 h-full min-h-full max-h-full flex-shrink-0 flex flex-col items-center overflow-hidden"
            >
              <div className="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="p-4 rounded-t-lg"
                    src={product.imageUrl}
                    alt={product.name}
                  />
                </a>
                <div className="px-4 pb-4">
                  <a href="#">
                    <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                      {product.name}
                    </h5>
                  </a>
                  <div className="flex items-center mt-2.5 mb-4">
                    
                      <div>
                        <Link to="/profile">
                          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                          {product.owner}
                          </span>
                        </Link>
                      </div>

                      <div>
                        <span className="bg-green-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                          Verduras
                        </span>
                      

                    
                    </div>

                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      {product.price}
                    </span>
                    <Button text="Ver mas" className="py-2 px-4"/>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute right-0 p-2 bg-[#8AA86E] text-lightGreen3 rounded-full"
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div>
  );
};

export default ProductCarousel;
