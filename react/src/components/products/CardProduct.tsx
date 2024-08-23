import Button from "@components/common/Button";
import { Link } from "react-router-dom";
import BadgeTypeProduct from "./BadgeTypeProduct";

interface product { //TODO falta implementarlo en el card product. Los fetchs vendran de cada grid en funcion de lo que quieran
    id: string,
    name: string,
    description: string,
    price: string,
    quantity:number,
    userId: string,
    categoryIds: string,
    image: string,
    schedule: string,
    addres: string,
}
interface Product { //Este es de product simple, arriba de publication y product
  id: string;
  categories: string[];  // O bien un array de objetos si las categorías tienen más propiedades
  name: string;
  description: string;
  price: number;
  quantity: number;
  createdAt: string; // Podría ser un Date si prefieres manejar fechas como objetos Date en lugar de strings
}


//TODO hay que llamar al usuario, alli se encuentran los products, ver el id del producto y luego buscar ese producto en publications para sacar horario etc

const CardProduct = () => {
  const product = {
    id: 1,
    name: "Tomates camperos",
    description:"Sandias frescas plantadas al aire libre, sin conservantes ni pesticidas.",
    price: "3,49",
    quantity: 3,
    userId: "pepelozano",
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
        <img
        className="p-4 rounded-t-lg"
        src={product.image}
        alt={product.name}
        />
        <div className="px-4 pb-4">
          <Link to="/product">
            <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
              {product.name}
            </h5>
          </Link>
          <div className="flex items-center mt-1 mb-4">
            <div>
              <Link to={"/profile/" + product.userId}>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                  {product.userId}
                </span>
              </Link>
            </div>

            <div>
                <BadgeTypeProduct type={product.categoryIds}/>
            </div>
          </div>
          <div className="text-sm mb-4">
            {product.description}
          </div>
          <div className="flex items-center justify-between">
            <span className="text-base font-bold text-gray-800 dark:text-white">
                <span className="">{product.price} €/kg</span> - {product.quantity}kg
                
               
            </span>
            <Button text="Ver mas" to="/product" className="py-2 px-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardProduct;