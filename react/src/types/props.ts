import { User, Product, Publication, Category } from "./models";
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
  type: Category[];
  className?: string;
}

// CardProduct.tsx
export interface CardProductProps {
  product: Product;
  publication?: Publication;
}

// UserDropdown.tsx
export interface UserDropdownProps {
  text?: string;
  className?: string;
  onDataSend: (data: boolean) => void;
  profileImage?: string; // Nueva propiedad para la imagen del perfil
}

// Pagination.tsx
export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  paginate: (pageNumber: number) => void;
}
