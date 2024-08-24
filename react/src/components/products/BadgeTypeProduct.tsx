import { BadgeProps } from "../../types/props";

const badgeStyles: { [key: string]: { bgColor: string; label: string } } = {
  verduras: { bgColor: "bg-green-100", label: "Verdura" },
  frutas: { bgColor: "bg-yellow-100", label: "Fruta" },
  lacteos: { bgColor: "bg-blue-100", label: "Lacteo" },
  granos: { bgColor: "bg-orange-100", label: "Grano" },
  semillas: { bgColor: "bg-stone-300", label: "Semilla" },
  aceites: { bgColor: "bg-lime-100", label: "Aceite" },
  miel: { bgColor: "bg-red-100", label: "Miel" },
};

const BadgeTypeProduct: React.FC<BadgeProps> = ({ type, className }) => {
  const badgeType = badgeStyles[type.toLowerCase()];

  if (!badgeType) return null; // Retorna null si el tipo no coincide

  return (
    <span
      className={`${badgeType.bgColor} text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3 ${className}`}
    >
      {badgeType.label}
    </span>
  );
};

export default BadgeTypeProduct;
