import Layout from '../components/Layout';
import '../styles/App.css';
import '../styles/home.css';
import frutaImage from '../assets/fru.jpg'; 
import React from 'react';
import comoFuncionaImage1 from '../assets/cesta.png';
import comoFuncionaImage2 from '../assets/producto.png';
import comoFuncionaImage3 from '../assets/envio.png';
import comoFuncionaImage4 from '../assets/agri.jpg';
import comoFuncionaImage5 from '../assets/agra.jpg';
import comoFuncionaImage6 from '../assets/agro.jpg';
import beneficiosImage from '../assets/bene.jpg'; // Añade la imagen aquí

const Home = () => {
    return (
        <Layout>
            <div 
                className="relative home-container" 
                style={{ 
                    backgroundImage: `url(${frutaImage})`
                }}
            >
                <div className="absolute top-1/4 left-8 text-left text-white max-w-xl">
                    <h1 className="text-5xl font-bold leading-tight">
                        Lo Mejor del Campo, Directo a Tu Mesa
                    </h1>
                    <p className="text-lg font-bold mt-4">
                        Explora una selección exclusiva de productos frescos <span className="font-bold">cultivados con dedicación por los mejores productores locales.</span> Transforma tu cocina con los sabores más auténticos y de calidad superior.
                    </p>
                </div>

                <div className="absolute bottom-24 left-8 flex space-x-4">
                    <button className="bg-[#8AA86E] text-white font-bold py-3 px-6 rounded hover:bg-green-700">
                        COMPRA AHORA
                    </button>
                    <button className="bg-[#8AA86E] text-white font-bold py-3 px-6 rounded hover:bg-green-700">
                        COMPRA AHORA
                    </button>
                </div>
            </div>

            {/* "Cómo Funciona" Section */}
            <section className="my-16 mx-auto" style={{ backgroundColor: 'white', maxWidth: '80%' }}>
                <h2 className="text-4xl font-bold text-center mb-8 bg-darkgreen1 text-[#006400] py-4">  ¿Cómo funciona?</h2>
                <div className="flex justify-center space-x-8 mx-8">
                    <div className="text-center">
                        <img src={comoFuncionaImage1} alt="Elige tu cesta y periodicidad" className="mx-auto mb-4 h-24 w-24 object-contain" />
                        <h3 className="text-2xl font-semibold text-[#006400]">Selecciona tus productos</h3>
                        <p className="text-lg mt-2">Explora nuestra amplia selección de productos ecológicos y selecciona los que más te gusten. Puedes elegir entre una gran variedad de alimentos frescos y de despensa. Sin compromisos y con la opción de comprar solo lo que necesitas, cuando lo necesitas.</p>
                    </div>
                    <div className="text-center">
                        <img src={comoFuncionaImage2} alt="Añade productos" className="mx-auto mb-4 h-24 w-24 object-contain" />
                        <h3 className="text-2xl font-semibold text-[#006400]">Opta por lo sostenible</h3>
                        <p className="text-lg mt-2">Comprométete con un estilo de vida más ecológico al elegir nuestros productos sostenibles. Cada compra que realizas contribuye a un impacto positivo en el medio ambiente. Ofrecemos alimentos frescos y de despensa, todos seleccionados con un enfoque en la calidad y la sostenibilidad.</p>
                    </div>
                    <div className="text-center">
                        <img src={comoFuncionaImage3} alt="Te lo entregamos en casa" className="mx-auto mb-4 h-24 w-24 object-contain" />
                        <h3 className="text-2xl font-semibold text-[#006400]">Entrega responsable</h3>
                        <p className="text-lg mt-2">Recibe tu pedido de manera cómoda y eco-amigable. Utilizamos transporte refrigerado eficiente para reducir la huella de carbono. Nuestro equipo, comprometido con la sostenibilidad, se encargará de entregarlo en tu hogar, garantizando frescura y responsabilidad ambiental.</p>
                    </div>
                </div>
            </section>

            {/* New "Nuestros Productores Aliados" Section */}
            <section className="my-16 py-8" style={{ backgroundColor: 'white', maxWidth: '85%', margin: 'auto' }}>
                <h2 className="text-4xl font-bold text-center mb-8 text-[#006400] py-4">Nuestros productores aliados</h2>
                <p className="text-center text-xl mb-4" style={{ maxWidth: '900px', margin: 'auto' }}>
                    Trabajamos de la mano con agricultores locales comprometidos con prácticas sostenibles y ecológicas. Estos productores, apasionados por su oficio, se dedican a ofrecer alimentos frescos y de alta calidad, que no solo destacan por su sabor, sino también por el impacto positivo que generan en sus comunidades y en el medio ambiente.
                </p>
                <p className="text-center text-xl mb-8" style={{ maxWidth: '900px', margin: 'auto' }}>
                    Juntos, compartimos la misión de reducir el desperdicio de alimentos y promover un comercio justo, asegurando que cada producto que llega a tu hogar refleja un compromiso con la sostenibilidad y el bienestar de todos. Con cada compra, no solo disfrutas de productos excepcionales, sino que también apoyas a quienes trabajan incansablemente para hacer posible una economía más justa y ecológica.
                </p>
                <div className="flex justify-center space-x-8 mx-8">
                    <div className="text-center">
                        <img src={comoFuncionaImage4} alt="Productor 1" className="w-64 h-64 mx-auto mb-4 rounded-full object-cover" />
                    </div>
                    <div className="text-center">
                        <img src={comoFuncionaImage5} alt="Productor 2" className="w-64 h-64 mx-auto mb-4 rounded-full object-cover" />
                    </div>
                    <div className="text-center">
                        <img src={comoFuncionaImage6} alt="Productor 3" className="w-64 h-64 mx-auto mb-4 rounded-full object-cover" />
                    </div>
                </div>
            </section>

            {/* "Testimonios de Clientes" Section */}
            <section className="my-16 py-8" style={{ backgroundColor: '#f9f9f9', maxWidth: '85%', margin: 'auto' }}>
                <h2 className="text-4xl font-bold text-center mb-8 text-[#006400]">Testimonios de Clientes</h2>
                <div className="flex justify-center space-x-8 mx-8">
                    <div className="text-center max-w-xs">
                        <p className="text-lg italic mb-4">"Los productos son frescos y de alta calidad. Realmente se nota el cuidado y la dedicación de los productores."</p>
                        <h4 className="font-semibold">- Juan Pérez</h4>
                    </div>
                    <div className="text-center max-w-xs">
                        <p className="text-lg italic mb-4">"Me encanta saber que estoy apoyando a agricultores locales que se preocupan por el medio ambiente."</p>
                        <h4 className="font-semibold">- María López</h4>
                    </div>
                    <div className="text-center max-w-xs">
                        <p className="text-lg italic mb-4">"La entrega siempre es puntual y los productos llegan en perfectas condiciones."</p>
                        <h4 className="font-semibold">- Carlos Fernández</h4>
                    </div>
                </div>
            </section>

            {/* "Beneficios de Nuestros Productos" Section */}
            <section className="my-16 py-8" style={{ maxWidth: '85%', margin: 'auto', backgroundColor: 'white' }}>
                <h2 className="text-4xl font-bold text-center mb-8 text-[#006400]">Beneficios de Nuestros Productos</h2>
                <div className="flex justify-center items-center space-x-8 mx-8">
                    <img src={beneficiosImage} alt="Beneficios de nuestros productos" className="w-1/2 h-auto object-cover rounded-lg" />
                    <div className="max-w-lg">
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold mb-4 text-[#006400]">Frescos y Nutritivos</h3>
                            <p className="text-lg">Nuestros productos son recolectados en su punto óptimo de maduración, garantizando frescura y un alto contenido nutricional.</p>
                        </div>
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold mb-4 text-[#006400]">Ecológicos y Sostenibles</h3>
                            <p className="text-lg">Todos nuestros productos son cultivados siguiendo prácticas ecológicas que respetan el medio ambiente y promueven la biodiversidad.</p>
                        </div>
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold mb-4 text-[#006400]">Apoyo a la Economía Local</h3>
                            <p className="text-lg">Al comprar nuestros productos, contribuyes al crecimiento de pequeñas comunidades y apoyas a agricultores locales.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* "Contacto" Section */}
            <section className="my-16 py-8" style={{ backgroundColor: 'white', maxWidth: '85%', margin: 'auto' }}>
                <h2 className="text-4xl font-bold text-center mb-8 text-[#006400]">Contacto</h2>
                <p className="text-center text-xl mb-8">¿Tienes alguna pregunta o comentario? ¡Nos encantaría saber de ti!</p>
                <form className="max-w-lg mx-auto">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Nombre:</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Tu nombre" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email:</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Tu email" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Mensaje:</label>
                        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="4" placeholder="Escribe tu mensaje aquí..."></textarea>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-[#8AA86E] text-white font-bold py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline" type="button">
                            Enviar
                        </button>
                    </div>
                </form>
            </section>
        </Layout>
    );
};

export default Home;
