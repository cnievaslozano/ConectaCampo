import Layout from "@components/layout/Layout";
import "@styles/App.css";
import "@styles/home.css";
import frutaImage from "@assets/fru.webp";
import React, { useEffect, useState } from "react";
import Button from "@components/common/Button";
import comoFuncionaImage1 from "@assets/cesta.webp";
import comoFuncionaImage2 from "@assets/producto.webp";
import comoFuncionaImage3 from "@assets/envio.webp";
import comoFuncionaImage4 from "@assets/agri.webp";
import comoFuncionaImage5 from "@assets/agra.webp";
import comoFuncionaImage6 from "@assets/agro.webp";
import beneficiosImage from "@assets/bene.webp";
import homeVideo from "@assets/homeVideo.mp4";
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp, FaCircle } from "react-icons/fa";

const Home = () => {
  return (
    <Layout>
      <div className="relative w-full h-screen overflow-hidden">
        <video
          src={homeVideo}
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1
              className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-7xl text-white italic fade-in-up"
              style={{
                textShadow:
                  "2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000",
              }}
            >
              Lo Mejor del <span className="text-[#8AA86E]">Campo</span>,
              Directo a Tu <span className="text-orange-300">Mesa</span>
            </h1>

            <hr className="my-8 border-t-2 border-white mx-auto max-w-2xl" />

            <p className="max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl text-white font-extrabold fade-in-up">
              Ayuda al comercio local, apoyando al cultivo nacional y
              promoviendo una competencia justa contra las grandes empresas.
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                text="COMPRA AHORA"
                className="inline-flex items-center rounded-full fade-in-up"
              />
              <Button
                text="SOBRE NOSOSTROS"
                className="inline-flex items-center rounded-full border-2 border-green-900 hover:border-green-700 bg-green-900 hover:bg-green-700 fade-in-up"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="mb-16 py-16 mx-auto bg-[#edf8ed] max-w-4/5">
        <h2 className="text-4xl font-bold text-center mb-8 bg-darkgreen1 text-[#006400] py-4">
          ¿Cómo funciona?
        </h2>
        <div className="flex justify-center space-x-8 mx-8">
          <div className="text-center">
            <img
              src={comoFuncionaImage1}
              alt="Elige tu cesta y periodicidad"
              className="mx-auto mb-4 h-24 w-24 object-contain"
            />
            <h3 className="text-2xl font-semibold text-[#006400]">
              Selecciona tus productos
            </h3>
            <p className="text-lg mt-2">
              Explora nuestra amplia selección de productos ecológicos y
              selecciona los que más te gusten. Puedes elegir entre una gran
              variedad de alimentos frescos y de despensa. Sin compromisos y con
              la opción de comprar solo lo que necesitas, cuando lo necesitas.
            </p>
          </div>
          <div className="text-center">
            <img
              src={comoFuncionaImage2}
              alt="Añade productos"
              className="mx-auto mb-4 h-24 w-24 object-contain"
            />
            <h3 className="text-2xl font-semibold text-[#006400]">
              Opta por lo sostenible
            </h3>
            <p className="text-lg mt-2">
              Comprométete con un estilo de vida más ecológico al elegir
              nuestros productos sostenibles. Cada compra que realizas
              contribuye a un impacto positivo en el medio ambiente. Ofrecemos
              alimentos frescos y de despensa, todos seleccionados con un
              enfoque en la calidad y la sostenibilidad.
            </p>
          </div>
          <div className="text-center">
            <img
              src={comoFuncionaImage3}
              alt="Te lo entregamos en casa"
              className="mx-auto mb-4 h-24 w-24 object-contain"
            />
            <h3 className="text-2xl font-semibold text-[#006400]">
              Entrega responsable
            </h3>
            <p className="text-lg mt-2">
              Recibe tu pedido de manera cómoda y eco-amigable. Utilizamos
              transporte refrigerado eficiente para reducir la huella de
              carbono. Nuestro equipo, comprometido con la sostenibilidad, se
              encargará de entregarlo en tu hogar, garantizando frescura y
              responsabilidad ambiental.
            </p>
          </div>
        </div>
      </section>

      <section className="my-16 py-8 bg-white max-w-4/5 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-[#006400] py-4">
          Nuestros productores aliados
        </h2>
        <p className="text-center text-xl mb-4 max-w-3xl mx-auto">
          Trabajamos de la mano con agricultores locales comprometidos con
          prácticas sostenibles y ecológicas. Estos productores, apasionados por
          su oficio, se dedican a ofrecer alimentos frescos y de alta calidad,
          que no solo destacan por su sabor, sino también por el impacto
          positivo que generan en sus comunidades y en el medio ambiente.
        </p>
        <p className="text-center text-xl mb-8 max-w-3xl mx-auto">
          Juntos, compartimos la misión de reducir el desperdicio de alimentos y
          promover un comercio justo, asegurando que cada producto que llega a
          tu hogar refleja un compromiso con la sostenibilidad y el bienestar de
          todos. Con cada compra, no solo disfrutas de productos excepcionales,
          sino que también apoyas a quienes trabajan incansablemente para hacer
          posible una economía más justa y ecológica.
        </p>
        <div className="flex justify-center space-x-8 mx-8">
          <div className="text-center">
            <img
              src={comoFuncionaImage4}
              alt="Productor 1"
              className="w-64 h-64 mx-auto mb-4 rounded-full object-cover"
            />
          </div>
          <div className="text-center">
            <img
              src={comoFuncionaImage5}
              alt="Productor 2"
              className="w-64 h-64 mx-auto mb-4 rounded-full object-cover"
            />
          </div>
          <div className="text-center">
            <img
              src={comoFuncionaImage6}
              alt="Productor 3"
              className="w-64 h-64 mx-auto mb-4 rounded-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#E6F7E6] max-w-4/5 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-[#006400]">
          Testimonios de Clientes
        </h2>
        <div className="flex justify-center space-x-8 mx-8">
          <div className="text-center max-w-xs">
            <img
              src="https://i.pravatar.cc/150?img=53"
              alt="Juan Pérez"
              className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
            />
            <p className="text-lg italic mb-4">
              "Los productos son frescos y de alta calidad. Realmente se nota el
              cuidado y la dedicación de los productores."
            </p>
            <h4 className="font-semibold">- Juan Pérez</h4>
          </div>
          <div className="text-center max-w-xs">
            <img
              src="https://i.pravatar.cc/150?img=34"
              alt="María López"
              className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
            />
            <p className="text-lg italic mb-4">
              "Me encanta saber que estoy apoyando a agricultores locales que se
              preocupan por el medio ambiente."
            </p>
            <h4 className="font-semibold">- María López</h4>
          </div>
          <div className="text-center max-w-xs">
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="Carlos Fernández"
              className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
            />
            <p className="text-lg italic mb-4">
              "La entrega siempre es puntual y los productos llegan en perfectas
              condiciones."
            </p>
            <h4 className="font-semibold">- Carlos Fernández</h4>
          </div>
        </div>
      </section>

      <section className="my-16 py-8 bg-white max-w-4/5 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-[#006400]">
          Beneficios de Nuestros Productos
        </h2>
        <div className="flex justify-center items-center space-x-8 mx-8">
          <img
            src={beneficiosImage}
            alt="Beneficios de nuestros productos"
            className="w-1/2 h-auto object-cover rounded-lg"
          />
          <div className="max-w-lg">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-[#006400]">
                Frescos y Nutritivos
              </h3>
              <p className="text-lg">
                Nuestros productos son recolectados en su punto óptimo de
                maduración, garantizando frescura y un alto contenido
                nutricional.
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-[#006400]">
                Ecológicos y Sostenibles
              </h3>
              <p className="text-lg">
                Todos nuestros productos son cultivados siguiendo prácticas
                ecológicas que respetan el medio ambiente y promueven la
                biodiversidad.
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-[#006400]">
                Apoyo a la Economía Local
              </h3>
              <p className="text-lg">
                Al comprar nuestros productos, contribuyes al crecimiento de
                pequeñas comunidades y apoyas a agricultores locales.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 py-16 bg-[#E6F7E6] max-w-4/5 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-[#006400]">
          Contacto
        </h2>
        <p className="text-center text-xl mb-8">
          ¿Tienes alguna pregunta o comentario? ¡Nos encantaría saber de ti!
        </p>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Nombre:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Tu nombre"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Tu email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Mensaje:
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows={4}
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
          </div>
          <div className="flex justify-center">
            <Button text="Enviar" />
          </div>
        </form>
      </section>
      <ScrollToTop
        smooth={true}
        top={1200}
        component={<FaArrowUp />}
        className="scroll-top-button"
      />
    </Layout>
  );
};

export default Home;
