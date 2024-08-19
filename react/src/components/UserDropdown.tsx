import React, { useState, useRef, useEffect } from 'react';
import userImage from '../assets/user1.webp';
import { Link } from 'react-router-dom';

interface UserDropdownProps {
  text?: string;
  className?: string;
}

const UserDropdown: React.FC<UserDropdownProps> = ({ text, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

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
            <Link to="/"><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Feed</li></Link>
            <Link to="/profile"><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Perfil</li></Link>
            <Link to="/profile/configuration"><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Configuración</li></Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
