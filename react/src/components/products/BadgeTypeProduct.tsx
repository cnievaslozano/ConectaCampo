interface badgeProps{
    type: string,
    className?: string
}
const BadgeTypeProduct: React.FC<badgeProps> = ({type, className}) => {
//Tipos : Verduras Frutas Lacteos Granos semillas Aceites Miel
if (type.toLowerCase() === "verduras") {
    return(
        <span className={`bg-green-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3 ${className}`}>
        Verdura
        </span>
    )
} else if (type.toLowerCase() === "frutas") {
    return(
        <span className={`bg-yellow-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3 ${className}`}>
        Fruta
        </span>
    )
}else if (type.toLowerCase() === "lacteos") {
    return(
        <span className={`bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3 ${className}`}>
        Lacteo
        </span>
    )
}else if (type.toLowerCase() === "granos") {
    return(
        <span className={`bg-orange-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3 ${className}`}>
        Grano
        </span>
    )
}else if (type.toLowerCase() === "semillas") {
    return(
        <span className={`bg-stone-300 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3 ${className}`}>
        Semilla
        </span>
    )
}else if (type.toLowerCase() === "aceites") {
    return(
        <span className={`bg-lime-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3 ${className}`}>
        Aceite
        </span>
    )
}else if (type.toLowerCase() === "miel") {
    return(
        <span className={`bg-red-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3 ${className}`}>
        MIel
        </span>
    )
}

};
export default BadgeTypeProduct;