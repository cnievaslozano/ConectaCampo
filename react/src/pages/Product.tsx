import React, { useState } from 'react';
import Header from '@components/layout/Header'; 
import Footer from '@components/layout/Footer';
import ProductImage from '@assets/manzanas.webp';
import CorBefore from '@assets/cor antes.webp'; 
import CorAfter from '@assets/corazon.webp'; 
import Layout from '@components/layout/Layout';
import Container from '@components/common/Container';

const ProductPage = () => {
    const [isFavorited, setIsFavorited] = useState(false);

    const toggleFavorite = () => {

        setIsFavorited(!isFavorited);
    };

    return (
        <Layout>
            <Container className=''>
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row">
                    <div className="flex-shrink-0 w-full lg:w-1/2">
                        <img src={ProductImage} alt="Producto" className="w-full h-auto object-cover" />
                    </div>

                    <div className="flex-grow mt-8 lg:mt-0 lg:ml-8">
                        <h1 className="text-3xl font-bold text-2d572c"> Manzanas</h1>
                        <p className="text-xl text-gray-700 mt-4">
                            Manzanas BIO
                        </p>
                        <p className="text-2xl text-black mt-4">
                            $4.99
                        </p>
                        <p className="text-lg text-black mt-4">
                        Manzanas Bio de Villaviciosa, Asturias, cultivadas de manera orgánica en suelos ricos y con un clima perfecto para lograr un sabor y frescura incomparables.
                        </p>
                        <ul className="list-disc list-inside mt-4 text-black">
                            <li>Origen: Villaviciosa, Asturias</li>
                            <li>Calidad: 100% orgánicas y sostenibles</li>
                            <li>Variedad: Rojas, verdes y amarillas, con un sabor dulce y equilibrado</li>
                        </ul>

                        <div className="mt-6 flex items-center">
                            <button className="bg-darkGreen1 text-white font-bold py-2 px-4 rounded hover:bg-lightGreen2">
                                Añadir al Carrito
                            </button>
                            <button 
                                className="ml-4 flex items-center bg-[#8AA86E] text-white font-bold py-2 px-4 rounded hover:bg-lightGreen2"
                                onClick={toggleFavorite}
                            >
                                <span className="mr-2">Añadir a Favoritos</span>
                                <div className="w-6 h-6">
                                    <img 
                                        src={isFavorited ? CorAfter : CorBefore} 
                                        alt="Corazón" 
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    );
}

export default ProductPage;
