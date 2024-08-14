import React from 'react';
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import FarmsMarket from '../assets/FarmsMarket.webp'; 
import CristianImage from '../assets/perfil.jpg'; 
import DaniImage from '../assets/perfil.jpg'; 
import MiryamImage from '../assets/perfil.jpg'; 

const About = () => {
    return (
        <div className="bg-lightGreen3 text-black font-sans">
            <Header />

            <main className="bg-lightGreen3 p-4 text-center">
                <h1 className="text-4xl font-serif font-bold text-2d572c mb-4">Sobre Nosotros</h1>
                <p className="text-black max-w-3xl mx-auto">
                    Somos tres estudiantes apasionados por la informática y comprometidos con el desarrollo sostenible y la justicia económica. Nos hemos enfrentado a la creciente problemática de los productos importados de bajo costo que afectan negativamente a nuestros agricultores locales y a la economía regional.
                    <br/><br/>
                    Con la firme convicción de que es posible cambiar esta realidad, hemos decidido poner en marcha una plataforma web innovadora que conecta directamente a los agricultores con los consumidores finales. Eliminamos los intermediarios, promoviendo una economía local más justa y equitativa.
                    <br/><br/>
                    Creemos que al facilitar el acceso directo entre productores y consumidores, no solo garantizamos precios justos, sino que también apoyamos y fortalecemos la agricultura local. Nuestra misión es proporcionar una solución tecnológica que beneficie a todos los involucrados en la cadena de suministro alimentaria, fomentando una economía regional más robusta y sostenible.
                </p>
                
                <img src={FarmsMarket} alt="Farmers Market" className="max-w-sm mx-auto h-auto my-6" />

                <section className="flex flex-wrap justify-around mt-4">
                    <div className="flex-1 max-w-xs mx-2">
                        <h2 className="text-2xl font-serif font-bold text-2d572c">Nuestra Misión</h2>
                        <p className="text-black mt-2">
                            Nuestra misión es apoyar a los agricultores locales y reducir el desperdicio de alimentos, promoviendo prácticas agrícolas sostenibles. Nos comprometemos a proporcionar una plataforma donde los agricultores puedan vender directamente a los consumidores, asegurando precios justos y reduciendo los costos adicionales impuestos por los intermediarios.
                        </p>
                    </div>
                    <div className="flex-1 max-w-xs mx-2">
                        <h2 className="text-2xl font-serif font-bold text-2d572c">Nuestra Visión</h2>
                        <p className="text-black mt-2">
                            Nuestra visión es ser el puente entre agricultores y consumidores, facilitando un comercio justo y local. Aspiramos a crear una comunidad conectada donde los consumidores puedan acceder a productos frescos y de alta calidad, mientras apoyan a los agricultores locales y contribuyen a una economía más sostenible.
                        </p>
                    </div>
                </section>

                <section className="my-4">
                    <h2 className="text-2xl font-serif font-bold text-2d572c mb-4">Nuestro Equipo</h2>
                    <div className="flex justify-around flex-wrap">
                        <div className="text-center mx-4">
                            <img src={CristianImage} alt="Cristian" className="w-20 h-20 rounded-full mx-auto" />
                            <p className="text-black mt-2">Cristian</p>
                        </div>
                        <div className="text-center mx-4">
                            <img src={DaniImage} alt="Dani" className="w-20 h-20 rounded-full mx-auto" />
                            <p className="text-black mt-2">Dani</p>
                        </div>
                        <div className="text-center mx-4">
                            <img src={MiryamImage} alt="Miryam" className="w-20 h-20 rounded-full mx-auto" />
                            <p className="text-black mt-2">Miryam</p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default About;



