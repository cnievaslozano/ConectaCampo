import React from "react";
import CristianImage from "@assets/about/perfil.webp";
import DaniImage from "@assets/about/perfil.webp";
import MiryamImage from "@assets/about/perfil.webp";
import GroupImage from "@assets/home/agra.webp";
import ValueImage1 from "@assets/about/eco.webp";
import ValueImage2 from "@assets/about/honest.webp";
import ValueImage3 from "@assets/about/jus.webp";
import ValueImage4 from "@assets/about/inn.webp";
import Layout from "@components/layout/Layout";
import Container from "@components/common/Container";

const About = () => {
  return (
    <Layout>
      <Container>
        <h1 className="text-4xl font-serif font-bold text-2d572c mb-4 text-center text-[#006400]">
          Sobre Nosotros
        </h1>
        <p className="text-black max-w-3xl mx-auto">
          Somos tres estudiantes apasionados por la informática y comprometidos
          con el desarrollo sostenible y la justicia económica. Nos hemos
          enfrentado a la creciente problemática de los productos importados de
          bajo costo que afectan negativamente a nuestros agricultores locales y
          a la economía regional.
          <br />
          <br />
          Con la firme convicción de que es posible cambiar esta realidad, hemos
          decidido poner en marcha una plataforma web innovadora que conecta
          directamente a los agricultores con los consumidores finales.
          Eliminamos los intermediarios, promoviendo una economía local más
          justa y equitativa.
          <br />
          <br />
          Creemos que al facilitar el acceso directo entre productores y
          consumidores, no solo garantizamos precios justos, sino que también
          apoyamos y fortalecemos la agricultura local. Nuestra misión es
          proporcionar una solución tecnológica que beneficie a todos los
          involucrados en la cadena de suministro alimentaria, fomentando una
          economía regional más robusta y sostenible.
        </p>

        <img
          src={GroupImage}
          alt="Nuestro Equipo"
          className="w-3/4 h-auto mt-8 mb-12 rounded-lg mx-auto"
        />

        <section className="flex flex-wrap justify-around mt-4">
          <div className="flex-1 max-w-xs mx-2">
            <h2 className="text-2xl font-serif font-bold text-2d572c text-[#006400]">
              Nuestra Misión
            </h2>
            <p className="text-black mt-2">
              Nuestra misión es apoyar a los agricultores locales y reducir el
              desperdicio de alimentos, promoviendo prácticas agrícolas
              sostenibles. Nos comprometemos a proporcionar una plataforma donde
              los agricultores puedan vender directamente a los consumidores,
              asegurando precios justos y reduciendo los costos adicionales
              impuestos por los intermediarios.
            </p>
          </div>
          <div className="flex-1 max-w-xs mx-2">
            <h2 className="text-2xl font-serif font-bold text-2d572c text-[#006400]">
              Nuestra Visión
            </h2>
            <p className="text-black mt-2">
              Nuestra visión es ser el puente entre agricultores y consumidores,
              facilitando un comercio justo y local. Aspiramos a crear una
              comunidad conectada donde los consumidores puedan acceder a
              productos frescos y de alta calidad, mientras apoyan a los
              agricultores locales y contribuyen a una economía más sostenible.
            </p>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-serif font-bold text-2d572c mb-4 text-center text-[#006400]">
            Nuestros Valores
          </h2>
          <div className="flex justify-between mx-8">
            <div className="text-center flex-1 mx-4">
              <img
                src={ValueImage1}
                alt="Sostenibilidad"
                className="w-32 h-auto mb-2 mx-auto"
              />
              <p className="text-black font-semibold">Sostenibilidad</p>
              <p className="text-black mt-2">
                Promovemos prácticas que respeten el medio ambiente.
              </p>
            </div>
            <div className="text-center flex-1 mx-4">
              <img
                src={ValueImage2}
                alt="Transparencia"
                className="w-32 h-auto mb-2 mx-auto"
              />
              <p className="text-black font-semibold">Transparencia</p>
              <p className="text-black mt-2">
                Creemos en una comunicación abierta y honesta.
              </p>
            </div>
            <div className="text-center flex-1 mx-4">
              <img
                src={ValueImage3}
                alt="Justicia Económica"
                className="w-32 h-auto mb-2 mx-auto"
              />
              <p className="text-black font-semibold">Justicia Económica</p>
              <p className="text-black mt-2">
                Nos esforzamos por garantizar un comercio justo para todos.
              </p>
            </div>
            <div className="text-center flex-1 mx-4">
              <img
                src={ValueImage4}
                alt="Innovación"
                className="w-32 h-auto mb-2 mx-auto"
              />
              <p className="text-black font-semibold">Innovación</p>
              <p className="text-black mt-2">
                Buscamos constantemente mejorar y adaptarnos a nuevas
                tecnologías.
              </p>
            </div>
          </div>
        </section>

        <section className="my-4">
          <h2 className="text-2xl font-serif font-bold text-2d572c mb-4 text-center text-[#006400]">
            Nuestro Equipo
          </h2>
          <div className="flex justify-around flex-wrap">
            <div className="text-center mx-4">
              <img
                src={CristianImage}
                alt="Cristian"
                className="w-20 h-20 rounded-full mx-auto"
              />
              <p className="text-black mt-2">Cristian</p>
            </div>
            <div className="text-center mx-4">
              <img
                src={DaniImage}
                alt="Dani"
                className="w-20 h-20 rounded-full mx-auto"
              />
              <p className="text-black mt-2">Dani</p>
            </div>
            <div className="text-center mx-4">
              <img
                src={MiryamImage}
                alt="Miryam"
                className="w-20 h-20 rounded-full mx-auto"
              />
              <p className="text-black mt-2">Miryam</p>
            </div>
          </div>
        </section>

        <section className="my-8 text-center">
          <h2 className="text-2xl font-serif font-bold text-2d572c mb-4 text-[#006400]">
            Únete a Nosotros
          </h2>
          <p className="text-black max-w-3xl mx-auto mb-4">
            ¿Te interesa lo que hacemos? ¡Únete a nuestra comunidad! Suscríbete
            a nuestro boletín para recibir las últimas noticias, ofertas
            exclusivas, y mucho más.
          </p>
          <button className="bg-[#006400] text-white font-bold py-2 px-6 rounded hover:bg-green-700">
            Suscribirse
          </button>
        </section>
      </Container>
    </Layout>
  );
};

export default About;
