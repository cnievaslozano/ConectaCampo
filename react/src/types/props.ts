import { User, Product, Publication } from "./models";
import { ReactNode } from "react";

// ProfileCards.tsx
export interface ProfileCardProps {
  person: User;
}

// Button.tsx
export interface ButtonProps {
  text: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  to?: string;
}

// ProfileCard.tsx
export interface BadgeProps {
  type: string;
  className?: string;
}

// CardProduct.tsx
export interface CardProductProps {
  prod: Product; // Solo acepta objetos que cumplan con la interfaz Product
  publication?: Publication;
}

// UserDropdown.tsx
export interface UserDropdownProps {
  text?: string;
  className?: string;
  onDataSend: (data: boolean) => void;
  profileImage?: string; // Nueva propiedad para la imagen del perfil
}
