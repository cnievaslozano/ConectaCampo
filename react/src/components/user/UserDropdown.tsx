import React, { useState, useRef, useEffect } from "react";
import userImage from "@assets/user/defaultUser.webp";
import { Link } from "react-router-dom";
import { UserDropdownProps } from "../../types/props";

const UserDropdown: React.FC<UserDropdownProps> = ({
  text,
  className,
  onDataSend,
  profileImage, // Añadir la imagen del perfil a las props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [logged, setLog] = useState<boolean>(true);

  // Si le damos al botón de cerrar sesión, enviamos al header que hemos cerrado sesión
  const logOut = () => {
    const newLoggedState = false;
    setLog(newLoggedState);
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    onDataSend(newLoggedState);
  };

  // Controlamos que el modal se abra o cierre
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Cerrar el dropdown si se hace clic fuera de él
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  //console.log(profileImage);

  return (
    <div className="relative inline-block">
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        className={`h-12 w-12 border rounded-full ${className}`}
      >
        <img
          src={profileImage || userImage} // Usa la imagen del perfil si está disponible, de lo contrario, usa la imagen predeterminada
          alt="User profile"
          className="h-full w-full object-cover rounded-full"
        />
        {text && <span className="sr-only">{text}</span>}
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-20"
        >
          <ul className="py-2">
            <Link to="/search">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Mercado
              </li>
            </Link>
            <Link to={"/profile/" + localStorage.getItem("username")}>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Perfil
              </li>
            </Link>
            <Link to="/profile/configuration">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Configuración
              </li>
            </Link>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={logOut}
            >
              Cerrar sesión
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
