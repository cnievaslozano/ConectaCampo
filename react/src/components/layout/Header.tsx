import { Link, Navigate, useNavigate } from "react-router-dom";
import iconConectaCampo from "@assets/conectaCampo.png";
import Button from "@components/common/Button";
import { useState } from "react";
import UserDropdown from "@components/user/UserDropdown";

const Header = () => {
  //Bloque para una vez estas autentificado
  const [logged, setLog] = useState<boolean>(false);
  const handleAuth = () => {
    setLog(!logged);
  };

  //Bloque para usar el input de Explorar alimentos
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      // Redirigir a la ruta deseada
      navigate(`/search?name=${inputValue}`);
    }
  };
  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

  //Bloque para controlar el cerrar sesion de el Modal de usuario
  const handleUserModalData = (data: boolean) => {
    setLog(data);
  };

  return (
    <nav>
      <section className="px-36 p-4 flex flex-col lg:flex-row flex-wrap items-center justify-between mx-auto bg-darkGreen1">
        <Link to="/" className="flex items-center mx-12 lg:mb-0 p-0">
          <img
            src={iconConectaCampo}
            className="h-16 p-0"
            alt="ConectaCampo Logo"
          />
          <div className="flex flex-col justify-center items-center text-2xl font-semibold whitespace-nowrap text-white">
            <span className="leading-none mb-0">Conecta</span>
            <span className="leading-none mt-0">Campo</span>
          </div>
        </Link>

        <div className="mr-16 lg:mb-0">
          <ul className="flex lg:flex-row items-center font-medium rounded-lg text-center ">
            <li>
              <Link
                to="/"
                className="block py-2 px-2 flex-shrink text-white rounded md:bg-transparent"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 flex-shrink text-white rounded md:bg-transparent"
                aria-current="page"
              >
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link
                to="/feed"
                className="block py-2 px-2 pe-3 flex-shrink text-white rounded md:bg-transparent"
                aria-current="page"
              >
                Mercado
              </Link>
            </li>
            <li>
              <input
                type="text"
                id="product_name"
                className="bg-gray-50 border border-darkGreen2 text-gray-900 rounded-lg ps-4 py-1 mx-2"
                placeholder="Explora alimentos"
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                required
              />
            </li>
            <li>
              {logged === false ? (
                <Button
                  className="rounded-full fade-in-up"
                  text="Inicia"
                  to="signIn"
                  onClick={handleAuth}
                />
              ) : (
                <UserDropdown
                  text=""
                  className="my-2"
                  onDataSend={handleUserModalData}
                />
              )}
            </li>
          </ul>
        </div>
      </section>
    </nav>
  );
};

export default Header;
