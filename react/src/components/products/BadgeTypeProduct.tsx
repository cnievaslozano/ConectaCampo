interface badgeProps{
    type: string,
    className?: string
}
const BadgeTypeProduct: React.FC<badgeProps> = (type, className) => {

if (type === "verdura") {
    return(
        <span className={`bg-green-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3 ${className}`}>
        Verdura
        </span>
    )
}

};
export default BadgeTypeProduct;