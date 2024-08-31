import { Link, useNavigate } from "react-router-dom";
import iconConectaCampo from "@assets/conectaCampo.png";
import Button from "@components/common/Button";
import { useEffect, useState } from "react";
import UserDropdown from "@components/user/UserDropdown";

const Header = () => {
  const [logged, setLog] = useState<boolean>(false);
  const [userData, setUserData] = useState<any>(null); // Estado para almacenar la información del usuario
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");

    if (token && username) {
      setLog(true);
      fetchUserData(username); // Llama a la función para obtener la información del usuario
    } else {
      console.log("No hay ni token ni user");
    }
  }, []);

  // Función para obtener la información del usuario
  const fetchUserData = async (username: string) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/user/username/${username}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const data = await response.json();
      setUserData(data); // Almacena la información del usuario en el estado
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleAuth = () => {
    setLog(!logged);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      navigate(`/search?name=${inputValue}`);
    }
  };

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleUserModalData = (data: boolean) => {
    setLog(data);
  };

  return (
    <nav className="w-full bg-darkGreen1">
      <div className="max-w-[1550px] mx-auto p-4 flex flex-col lg:flex-row flex-wrap items-center justify-between">
        <Link to="/" className="flex items-center p-0">
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

        <ul className="flex lg:flex-row items-center rounded-lg text-center text-lg font-bold gap-3">
          <li>
            <Link
              to="/"
              className="block py-2 px-2 text-white rounded md:bg-transparent"
              aria-current="page"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block py-2 px-2 text-white rounded md:bg-transparent"
              aria-current="page"
            >
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link
              to="/search"
              className="block py-2 px-2 text-white rounded md:bg-transparent"
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
                className="rounded-full mx-2"
                text="Inicia"
                to="/signIn"
                onClick={handleAuth}
              />
            ) : (
              <UserDropdown
                text=""
                className="my-2 mx-2"
                onDataSend={handleUserModalData}
                profileImage={userData?.pathProfileImage}
              />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
