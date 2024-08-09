import { Link } from 'react-router-dom';
import iconConectaCampo from '../assets/conectaCampo.png';
import Button from './Button';
import { useState } from 'react';

const Header = () => {

    return (

<nav>
    <section className="px-36 flex flex-col lg:flex-row flex-wrap items-center justify-between mx-auto bg-darkGreen1">
        <Link to="/" className="flex items-center mb-4 lg:mb-0">
            <img src={iconConectaCampo} className="h-16" alt="ConectaCampo Logo" />
            <div className="flex flex-col justify-center items-center text-2xl font-semibold whitespace-nowrap text-white">
                <span className="leading-none mb-0">Conecta</span>
                <span className="leading-none mt-0">Campo</span>
            </div>
        </Link>

        <div className="mb-4 lg:mb-0">
            <ul className="flex lg:flex-row items-center font-medium md:p-0 rounded-lg text-center md:mt-0 md:border-0">
                <li>
                    <Link to="/" className="block py-2 px-2 flex-shrink text-white rounded md:bg-transparent" aria-current="page">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="block py-2 px-3 flex-shrink text-white rounded md:bg-transparent" aria-current="page">About</Link>
                </li>
                <li>
                    <Link to="/contact" className="block py-2 px-2 pe-3 flex-shrink text-white rounded md:bg-transparent" aria-current="page">Contact</Link>
                </li>
                <li>
                    <input type="text" id="product_name" className="bg-gray-50 border border-darkGreen2 text-gray-900 rounded-lg ps-4 py-1" placeholder="Explora alimentos" required />
                </li>
            </ul>
        </div>

        <div className="flex">
            <Button className="py-2 px-4" text="Inicia" />
        </div>
    </section>
</nav>


    );
};

export default Header;
