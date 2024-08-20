const Button = ( {text, className}:any ) => {
  return (
    <button className={`${className} bg-[#8AA86E] dark:bg-[#3E5C33] border-[#8AA86E] dark:border-[#3E5C33] border rounded-full inline-flex items-center justify-center font-bold text-center text-base  text-white hover:bg-[#A1C77D] dark:hover:bg-[#4B763E] hover:border-[#A1C77D] dark:hover:border-[#4B763E] disabled:bg-gray-300 disabled:border-gray-300 disabled:text-gray-500 transition-colors duration-300`}>
      {text} 
    </button>
  )
}

export default Button