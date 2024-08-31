import { BadgeProps } from "../../types/props";

const badgeStyles: { [key: string]: { bgColor: string; label: string } } = {
  Verduras: { bgColor: "bg-green-100", label: "Verdura" },
  Frutas: { bgColor: "bg-yellow-100", label: "Fruta" },
  Lácteos: { bgColor: "bg-blue-100", label: "Lácteo" },
  Granos: { bgColor: "bg-orange-100", label: "Grano" },
  Hierbas: { bgColor: "bg-green-100", label: "Hierbas" },
  Semillas: { bgColor: "bg-stone-300", label: "Semillas" },
  Aceites: { bgColor: "bg-lime-100", label: "Aceite" },
  Miel: { bgColor: "bg-red-100", label: "Miel" },
  defaultcategory: { bgColor: "bg-gray-100", label: "otros" },
};

const BadgeTypeProduct: React.FC<BadgeProps> = ({ type, className }) => {
  const keyType = type.toString();
  const badgeType = badgeStyles[keyType];

  if (!badgeType) return null;

  return (
    <span
      className={`${badgeType.bgColor} text-black text-xs font-semibold px-2.5 py-0.5 rounded ms-3 ${className}`}
    >
      {badgeType.label}
    </span>
  );
};

export default BadgeTypeProduct;
