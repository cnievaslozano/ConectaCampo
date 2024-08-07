import { Link } from 'react-router-dom';
import iconConectaCampo from '../assets/conectaCampo.png';
import Button from './Button';

const Header = () => {
    return (

        <nav>
            <div className="px-36 flex flex-wrap items-center justify-between mx-auto bg-darkGreen1">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={iconConectaCampo} className="h-16" alt="ConectaCampo Logo" />
                    <div className="flex flex-col justify-center items-center text-2xl font-semibold whitespace-nowrap text-white">
                        <span className="leading-none mb-0">Conecta</span>
                        <span className="leading-none mt-0">Campo</span>
                    </div>

                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <Button text="Comienza" />
                    <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li>
                            <Link to="/" className="block py-2 px-3 md:p-0 text-white rounded md:bg-transparent" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="block py-2 px-3 md:p-0 text-white rounded md:bg-transparent" aria-current="page">About</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="block py-2 px-3 md:p-0 text-white rounded md:bg-transparent" aria-current="page">Contact</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Header;
