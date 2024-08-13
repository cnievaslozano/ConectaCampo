import React from 'react';
import iconConectaCampo from '../assets/conectaCampo.png';

export function FooterWithLogo() {
  return (
    <footer className="w-full bg-green-800 p-2 text-white">
      <div className="flex flex-col items-center text-center">
        <div className="mb-2">
          <a href="/#" className="inline-block max-w-[100px]">
            <img src={iconConectaCampo} alt="logo-conecta-campo" className="max-w-full mx-auto" />
          </a>
        </div>
        <div className="w-full lg:w-8/12">
          <p className="text-xs mb-2">
            Conectamos agricultores con clientes finales para promover un comercio justo y local, apoyando la calidad y sostenibilidad en cada transacción.
          </p>
        </div>
        <div className="w-full mt-4">
          <h4 className="text-sm font-semibold mb-2">Síguenos</h4>
          <div className="flex justify-center space-x-2">
            <a
              href="#"
              className="flex h-5 w-5 items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-green-800"
            >
              {/* SVG icon 1 */}
              <svg
                width="6"
                height="12"
                viewBox="0 0 6 12"
                className="fill-current"
              >
                <path d="M5.43902 4.4H4.19918H3.75639V3.88387V2.28387V1.76774H4.16709H4.5598V2.78387V3.59151V3.88387V4.40067H5.43902Z" />
              </svg>
            </a>
            <a
              href="#"
              className="flex h-5 w-5 items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-green-800"
            >
              {/* SVG icon 2 */}
              <svg
                width="12"
                height="9"
                viewBox="0 0 12 9"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 0.625C3.625 0.625 0.625 3.625 0.625 7.5C0.625 11.375 3.625 14.375 7.5 14.375C11.375 14.375 14.375 11.375 14.375 7.5C14.375 3.625 11.375 0.625 7.5 0.625ZM7.5 12.8125C4.375 12.8125 1.5625 10 1.5625 7.5C1.5625 5 4.375 2.1875 7.5 2.1875C10.625 2.1875 13.4375 5 13.4375 7.5C13.4375 10 10.625 12.8125 7.5 12.8125ZM10.625 6.5625H9.0625V5H8.75C8.5625 5 8.4375 5.125 8.4375 5.3125V6.875C8.4375 7.0625 8.5625 7.1875 8.75 7.1875H10.625C10.8125 7.1875 10.9375 7.0625 10.9375 6.875V6.5625C10.9375 6.375 10.8125 6.25 10.625 6.25C10.4375 6.25 10.3125 6.375 10.3125 6.5625H9.0625V6.5625H10.625Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="#"
              className="flex h-5 w-5 items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-green-800"
            >
              {/* SVG icon 3 */}
              <svg
                width="12"
                height="9"
                viewBox="0 0 12 9"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.65625 0.84375H0.84375C0.375 0.84375 0 1.21875 0 1.6875V10.3125C0 10.7812 0.375 11.1562 0.84375 11.1562H12.65625C13.125 11.1562 13.5 10.7812 13.5 10.3125V1.6875C13.5 1.21875 13.125 0.84375 12.65625 0.84375ZM12.65625 1.6875L6.75 6.0625L0.84375 1.6875H12.65625ZM0.84375 10.3125V2.90625L6.75 7.28125L12.65625 2.90625V10.3125H0.84375Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="#"
              className="flex h-5 w-5 items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-green-800"
            >
              {/* SVG icon 4 */}
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.81193 5.63119C8.76077 5.65878 8.70997 5.67859 8.65276 5.68998C8.12887 5.68998 7.63666 5.82309 7.19064 6.19492C7.04242 6.2719 6.86558 6.31104 6.68272 6.31104C6.1783 6.31104 5.7261 6.04608 5.50639 5.68503C5.37341 5.40667 5.47587 5.1027 5.61676 4.97389C5.77466 4.829 6.02858 4.68684 6.2093 4.61042C6.28281 4.57755 6.35841 4.56019 6.43011 4.56019C6.70789 4.56019 6.96084 4.68766 7.08329 4.85833C7.27403 5.1449 7.38361 5.48534 7.38361 5.84136C7.38361 6.12295 7.36519 6.31489 7.35315 6.37724C7.35111 6.38939 7.35082 6.39189 7.34985 6.39427C7.32157 6.51109 7.24081 6.60187 7.08329 6.6425C7.00945 6.66265 6.9389 6.68371 6.87066 6.70491C6.61111 6.78367 6.35554 6.9114 6.16536 7.08754C6.00259 7.23267 5.96067 7.44083 6.02899 7.64112C6.05729 7.7518 6.10699 7.85092 6.17387 7.91615C6.31334 8.07569 6.46128 8.19116 6.65694 8.2568C6.79369 8.30448 6.92911 8.35053 7.06552 8.38449C7.09804 8.39352 7.13199 8.4025 7.16445 8.41035C7.24302 8.42882 7.32161 8.43086 7.39902 8.43086C7.524 8.43086 7.68358 8.39587 7.8086 8.34894C7.91883 8.30775 8.02906 8.24498 8.12043 8.16063C8.41528 7.865 8.61125 7.54292 8.70608 7.21787C8.76293 7.07415 8.81191 6.94079 8.84285 6.80903C8.86874 6.68607 8.88924 6.56282 8.90438 6.44066C8.91803 6.34171 8.93299 6.24309 8.94401 6.14503C8.95451 6.08274 8.95176 6.02163 8.93919 5.96129C8.92429 5.90256 8.90552 5.84718 8.88292 5.79795C8.85877 5.73893 8.83217 5.68194 8.80159 5.62739C8.77694 5.58248 8.75116 5.53885 8.75116 5.49665V5.63119Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <hr className="my-2 border-blue-gray-50" />
      <p className="text-center text-xs font-normal">
        &copy; 2023 Conecta Campo
      </p>
    </footer>
  );
}

export default FooterWithLogo;
