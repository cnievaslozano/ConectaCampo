import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  text: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  to?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  className,
  type = "button",
  onClick,
  to,
}) => {
  if (to) {
    return (
      <Link
        to={to}
        className={`py-2 px-4 rounded bg-[#8AA86E] dark:bg-[#3E5C33] border-[#8AA86E] dark:border-[#3E5C33] border inline-flex items-center justify-center font-bold text-center text-base text-white hover:bg-[#A1C77D] dark:hover:bg-[#4B763E] hover:border-[#A1C77D] dark:hover:border-[#4B763E] disabled:bg-gray-300 disabled:border-gray-300 disabled:text-gray-500 transition-colors duration-300 ${className}`}
      >
        {text}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-2 px-4 rounded bg-[#8AA86E] dark:bg-[#3E5C33] border-[#8AA86E] dark:border-[#3E5C33] border inline-flex items-center justify-center font-bold text-center text-base text-white hover:bg-[#A1C77D] dark:hover:bg-[#4B763E] hover:border-[#A1C77D] dark:hover:border-[#4B763E] disabled:bg-gray-300 disabled:border-gray-300 disabled:text-gray-500 transition-colors duration-300 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
