import React from 'react';
import iconConectaCampo from '../assets/conectaCampo.png';

const Footer = () => {
    return (
        <>
            <footer className="relative z-10 bg-green-800 pb-10 pt-10 text-white">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-6">
                            <a href="/#" className="inline-block max-w-[160px] mb-6">
                                <img src={iconConectaCampo} alt="logo" className="max-w-full mx-auto" />
                            </a>
                        </div>
                        <div className="w-full lg:w-8/12">
                            <p className="text-lg mb-6">
                                Conectamos agricultores con clientes finales para promover un comercio justo y local, apoyando la calidad y sostenibilidad en cada transacción.
                            </p>
                        </div>
                        <div className="w-full mt-10">
                            <h4 className="text-lg font-semibold mb-6">Síguenos</h4>
                            <div className="flex justify-center space-x-3">
                                <a
                                    href="#"
                                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-green-800"
                                >
                                    <svg
                                        width="8"
                                        height="16"
                                        viewBox="0 0 8 16"
                                        className="fill-current"
                                    >
                                        <path d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.16709H6.5598V4.78387V5.59151V5.88387V6.40067H7.43902Z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-green-800"
                                >
                                    <svg
                                        width="16"
                                        height="12"
                                        viewBox="0 0 16 12"
                                        fill="fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10 0.833328C4.83333 0.833328 0.833333 4.83333 0.833333 10C0.833333 15.1667 4.83333 19.1667 10 19.1667C15.1667 19.1667 19.1667 15.1667 19.1667 10C19.1667 4.83333 15.1667 0.833328 10 0.833328ZM10 17.0833C5.83333 17.0833 2.08333 13.3333 2.08333 10C2.08333 6.66667 5.83333 2.91667 10 2.91667C14.1667 2.91667 17.9167 6.66667 17.9167 10C17.9167 13.3333 14.1667 17.0833 10 17.0833ZM14.1667 8.75H12.0833V6.66667H11.6667C11.4167 6.66667 11.25 6.83333 11.25 7.08333V9.16667C11.25 9.41667 11.4167 9.58333 11.6667 9.58333H14.1667C14.4167 9.58333 14.5833 9.41667 14.5833 9.16667V8.75C14.5833 8.5 14.4167 8.33333 14.1667 8.33333C13.9167 8.33333 13.75 8.5 13.75 8.75V8.75H12.0833V8.75H14.1667Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-green-800"
                                >
                                    <svg
                                        width="16"
                                        height="12"
                                        viewBox="0 0 16 12"
                                        fill="fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M16.875 1.125H1.125C0.5 1.125 0 1.625 0 2.25V13.75C0 14.375 0.5 14.875 1.125 14.875H16.875C17.5 14.875 18 14.375 18 13.75V2.25C18 1.625 17.5 1.125 16.875 1.125ZM16.875 2.25L9 7.875L1.125 2.25V2.25H16.875V2.25ZM1.125 13.75V3.875L9 9.5L16.875 3.875V13.75H1.125Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-green-800"
                                >
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 14 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12.6168 7.88348C12.5396 7.91838 12.4628 7.94238 12.3783 7.95468C11.6139 7.95468 10.9097 8.12279 10.2781 8.49369C10.0559 8.60389 9.79294 8.66468 9.5192 8.66468C8.90441 8.66468 8.35147 8.25498 8.09998 7.74347C7.93454 7.32608 8.05765 6.86876 8.23569 6.70379C8.43028 6.512 8.78941 6.32179 9.05537 6.21389C9.17485 6.1601 9.29579 6.13038 9.41348 6.13038C9.69586 6.13038 9.95661 6.27093 10.1021 6.45444C10.3307 6.82691 10.4599 7.28767 10.4599 7.76181C10.4599 8.13726 10.4342 8.37858 10.4175 8.4746C10.4143 8.49119 10.4139 8.49585 10.4126 8.49809C10.3689 8.65945 10.2588 8.78298 10.0617 8.82932C9.97259 8.84828 9.88763 8.86888 9.80455 8.88968C9.55363 8.96934 9.3074 9.10461 9.12864 9.30349C8.96356 9.45858 8.91029 9.67953 8.99109 9.89794C9.02768 10.0449 9.09869 10.1755 9.19182 10.2625C9.39445 10.4916 9.6095 10.6663 9.87828 10.7669C10.0649 10.8326 10.2494 10.8965 10.4347 10.9459C10.4892 10.9617 10.5454 10.9765 10.6005 10.9892C10.7137 11.0118 10.8267 11.0156 10.9384 11.0156C11.0915 11.0156 11.2671 10.9752 11.4075 10.9186C11.5345 10.8683 11.6611 10.804 11.7626 10.7062C12.0895 10.3797 12.3275 10.0154 12.4537 9.64382C12.5439 9.45226 12.6167 9.27127 12.6644 9.09271C12.7083 8.92943 12.7389 8.76043 12.7581 8.59355C12.773 8.45265 12.7908 8.31244 12.8041 8.17288C12.8157 8.09256 12.8122 8.01327 12.7986 7.93416C12.7838 7.85544 12.7647 7.77986 12.7414 7.71061C12.7169 7.62646 12.6905 7.54381 12.6618 7.46348C12.6378 7.39487 12.6131 7.32681 12.6168 7.26023V7.88348Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
