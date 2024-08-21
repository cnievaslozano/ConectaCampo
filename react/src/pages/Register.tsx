import { Link } from "react-router-dom";
import Button from "@components/common/Button";
import iconConectaCampo from "@assets/conectaCampo.png";
import illustration from "@assets/ilustrationRegister.png";

const InputBox = ({ type, placeholder, name }: any) => {
  return (
    <div className="mb-4">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:text-white"
      />
    </div>
  );
};

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-lightGreen3">
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-5xl">
        {/* Imagen de la izquierda con altura específica */}
        <div className="py-10 w-full flex justify-center items-center lg:w-1/2 overflow-hidden">
          <img
            src={illustration}
            alt="Ilustración de Registro"
            className="transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>

        {/* Contenedor del formulario */}
        <div className="w-full px-6 py-4 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <img
              className="lg:h-24 sm:h-8 transition-transform duration-300 ease-in-out transform hover:scale-105"
              src={iconConectaCampo}
              alt="ConectaCampo Logo"
            />
          </div>

          <p className="mt-3 text-3xl text-center text-gray-600 dark:text-gray-200">
            ¡Regístrate!
          </p>

          <form className="mt-4">
            {/* Campos del formulario */}
            <div className="flex gap-4">
              <div className="flex-1">
                <InputBox type="text" placeholder="Nombre*" name="name" />
              </div>
              <div className="flex-1">
                <InputBox type="text" placeholder="Apellido*" name="surname" />
              </div>
            </div>

            <InputBox
              type="email"
              placeholder="Correo Electrónico*"
              name="email"
            />
            <InputBox
              type="text"
              placeholder="Nombre de Usuario*"
              name="username"
            />

            <InputBox
              type="password"
              placeholder="Contraseña*"
              name="password"
            />

            <div className="flex gap-4">
              <div className="flex-1">
                <InputBox type="tel" placeholder="Teléfono" name="telephone" />
              </div>
              <div className="flex-1">
                <InputBox type="text" placeholder="Ciudad*" name="city" />
              </div>
            </div>

            <div className="mb-4">
              <input
                type="file"
                name="profileImage"
                className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none dark:border-dark-3 dark:text-white"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Tipo de Cuenta
              </label>
              <select
                name="accountType"
                className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:text-white"
              >
                <option value="normal">Normal</option>
                <option value="vendedor">Vendedor</option>
              </select>
            </div>

            <div className="mt-6">
              <Button
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                text="Registrar"
                type="submit"
              />
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

            <Link
              to="/signIn"
              className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              ¿Ya tienes cuenta? Inicia sesión
            </Link>

            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
