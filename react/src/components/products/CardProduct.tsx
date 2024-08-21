import Button from "@components/common/Button";
import { Link } from "react-router-dom";

const CardProduct = (produc:any) => {
  const product = {
    id: 1,
    name: "Tomates camperos",
    description:"Sandias frescas de El priorat",
    price: "599",
    userId: "Juan Gonzalez",
    categoryIds: "Verduras",
    image:
      "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/06/06/16545437734127.jpg",
    schedule: "3 de Mayo, 15:00 - 17:00",
    addres: "Priorat, Cataluña"
  };

  return (
    <div
      key={product.id}
      className="h-full min-h-full max-h-full flex-shrink-0 flex flex-col items-center overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
    >
      <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="p-4 rounded-t-lg"
            src={product.image}
            alt={product.name}
          />
        </a>
        <div className="px-4 pb-4">
          <a href="#">
            <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
              {product.name}
            </h5>
          </a>
          <div className="flex items-center mt-1 mb-4">
            <div>
              <Link to="/profile">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                  {product.userId}
                </span>
              </Link>
            </div>

            <div>
              <span className="bg-green-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                {product.categoryIds}
              </span>
            </div>
          </div>
          <div className="text-sm mb-4">
            {product.description}
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {product.price}€
            </span>
            <Button text="Ver mas" className="py-2 px-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardProduct;