import React, { useState } from "react";
import Button from "./Button";

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
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      {Array(5)
                        .fill(0)
                        .map((_, index) => (
                          <svg
                            key={index}
                            className={`w-4 h-4 ${
                              index < 4
                                ? "text-yellow-300"
                                : "text-gray-200 dark:text-gray-600"
                            }`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                        ))}
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                      {product.owner}
                    </span>
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
        className="absolute right-0 p-2 bg-lightGreen2 rounded-full"
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div>
  );
};

export default ProductCarousel;
