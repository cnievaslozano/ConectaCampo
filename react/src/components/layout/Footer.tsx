import React from "react";
import iconConectaCampo from "@assets/conectaCampo.webp";

export function Footer() {
  return (
    <footer className="w-full bg-darkGreen1 p-4 text-white">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">
          <a href="/" className="inline-block max-w-[100px]">
            <img
              src={iconConectaCampo}
              alt="logo-conecta-campo"
              className="max-w-full mx-auto"
            />
          </a>
        </div>
        <div className="w-full lg:w-8/12 mb-4">
          <p className="text-xs lg:text-md xl:text-xl">
            Nos dedicamos a establecer una conexión directa entre agricultores y
            consumidores finales, con el firme propósito de fomentar un comercio
            justo y local que beneficie a todas las partes involucradas. Nuestro
            enfoque se centra en asegurar que cada transacción se realice bajo
            principios de transparencia, equidad y respeto mutuo, garantizando
            que los productos ofrecidos sean de la más alta calidad. Además,
            promovemos prácticas sostenibles que contribuyen a la preservación
            del medio ambiente y apoyan el desarrollo de comunidades agrícolas,
            fortaleciendo la economía local y asegurando un futuro más justo y
            saludable para todos.
          </p>
        </div>
        <div className="w-full mt-4">
          <h4 className="text-sm font-semibold mb-2">Síguenos</h4>
          <div className="flex justify-center space-x-4">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-green-800 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M22.675 0H1.325C.593 0 0 .592 0 1.325v21.35C0 23.408.593 24 1.325 24h11.49V14.708h-3.13v-3.625h3.13V8.413c0-3.1 1.894-4.789 4.662-4.789 1.325 0 2.463.099 2.794.143v3.24l-1.917.001c-1.505 0-1.797.715-1.797 1.764v2.311h3.59l-.467 3.625h-3.122V24h6.11c.73 0 1.324-.592 1.324-1.325V1.325C24 .593 23.408 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-green-800 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M24 4.557a9.825 9.825 0 0 1-2.828.775 4.93 4.93 0 0 0 2.165-2.724 9.867 9.867 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.379 4.482A13.946 13.946 0 0 1 1.671 3.149 4.917 4.917 0 0 0 3.194 9.71a4.895 4.895 0 0 1-2.225-.615v.062a4.917 4.917 0 0 0 3.946 4.827 4.897 4.897 0 0 1-2.212.084 4.917 4.917 0 0 0 4.588 3.417A9.866 9.866 0 0 1 0 19.54a13.924 13.924 0 0 0 7.548 2.212c9.056 0 14.01-7.5 14.01-14.008 0-.213-.004-.425-.014-.636A10.02 10.02 0 0 0 24 4.557z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-green-800 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.349 3.608 1.324.975.975 1.261 2.243 1.324 3.608.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.349 2.633-1.324 3.608-.975.975-2.243 1.261-3.608 1.324-1.265.058-1.645.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.349-3.608-1.324-.975-.975-1.261-2.243-1.324-3.608-.058-1.265-.069-1.645-.069-4.85s.012-3.584.07-4.85c.062-1.366.349-2.633 1.324-3.608C4.517 2.512 5.785 2.225 7.15 2.163c1.265-.058 1.645-.07 4.85-.07zm0-2.163C8.748 0 8.332.013 7.053.072 5.765.131 4.621.368 3.605 1.383c-1.016 1.016-1.252 2.16-1.311 3.448C2.013 6.751 2 7.167 2 12s.013 5.249.072 6.527c.059 1.288.295 2.432 1.311 3.448 1.016 1.016 2.16 1.252 3.448 1.311 1.278.059 1.694.072 6.527.072s5.249-.013 6.527-.072c1.288-.059 2.432-.295 3.448-1.311 1.016-1.016 1.252-2.16 1.311-3.448.059-1.278.072-1.694.072-6.527s-.013-5.249-.072-6.527c-.059-1.288-.295-2.432-1.311-3.448-1.016-1.016-2.16-1.252-3.448-1.311C15.252.013 14.835 0 12 0zm0 5.838c-3.403 0-6.162 2.76-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.76 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.324c-2.295 0-4.162-1.867-4.162-4.162s1.867-4.162 4.162-4.162 4.162 1.867 4.162 4.162-1.867 4.162-4.162 4.162zm6.406-11.845c-.796 0-1.44.645-1.44 1.44s.645 1.44 1.44 1.44 1.44-.645 1.44-1.44-.645-1.44-1.44-1.44z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-green-800 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M20.447 20.452H16.72v-5.337c0-1.274-.024-2.916-1.777-2.916-1.778 0-2.051 1.387-2.051 2.818v5.435H9.215V9h3.59v1.561h.049c.5-.945 1.724-1.942 3.55-1.942 3.798 0 4.5 2.5 4.5 5.754v6.079zM5.337 7.433a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zm1.844 13.019H3.49V9h3.691v11.452zM22.225 0H1.771C.792 0 0 .785 0 1.748v20.505C0 23.215.792 24 1.771 24h20.451c.98 0 1.771-.785 1.771-1.748V1.748C23.997.785 23.206 0 22.225 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <hr className="my-4 border-white opacity-25" />
      <p className="text-center text-xs font-normal">
        &copy; 2024 Conecta Campo. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
