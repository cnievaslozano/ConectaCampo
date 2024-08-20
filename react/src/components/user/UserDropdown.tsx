import React, { useState, useRef, useEffect } from 'react';
import userImage from '@assets/user1.webp';
import { Link } from 'react-router-dom';

interface UserDropdownProps {
  text?: string;
  className?: string;
  onDataSend: (data: boolean) => void;
}

const UserDropdown: React.FC<UserDropdownProps> = ({ text, className, onDataSend }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [logged, setLog] = useState<boolean>(true);

  // Si le damos al botón de cerrar sesión, enviamos al header que hemos cerrado sesión
  const toggleLog = () => {
    const newLoggedState = !logged; // Invertimos el estado actual
    setLog(newLoggedState);
    onDataSend(newLoggedState); // Enviamos el nuevo estado al padre
  };

  // Controlamos que el modal se abra o cierre
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close the dropdown if clicking outside of it
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

  return (
    <div className="relative inline-block">
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        className={`${className} h-10 w-10 border rounded-full`}
      >
        <img src={userImage} alt="" className="h-full w-full object-cover rounded-full" />
        {text && <span className="sr-only">{text}</span>}
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg"
        >
          <ul className="py-2">
            <Link to="/feed"><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Feed</li></Link>
            <Link to="/profile"><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Perfil</li></Link>
            <Link to="/profile/configuration"><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Configuración</li></Link>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={toggleLog}>Cerrar sesión</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
