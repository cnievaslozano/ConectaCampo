import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Importa los estilos de Toastify
import Button from "@components/common/Button";
import iconConectaCampo from "@assets/conectaCampo.png";
import illustration from "@assets/ilustration/ilustrationRegister.png";
import InputBox from "@components/common/InputBox";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    username: "",
    password: "",
    email: "",
    telephone: "",
    city: "",
    profileImage: null,
    accountType: "normal",
  });

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      const fileInput = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: fileInput.files ? fileInput.files[0] : null,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validateForm = () => {
    const { name, surname, username, password, email, telephone, city } =
      formData;

    if (!name || !surname || !username || !password || !email || !city) {
      toast.error("Por favor, complete todos los campos obligatorios.");
      return false;
    }

    if (telephone && telephone.length !== 9) {
      toast.error("El número de teléfono debe tener 9 caracteres.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const roles = formData.accountType === "vendedor" ? ["FARMER"] : ["CLIENT"];

    const data = new FormData();
    data.append("roles", JSON.stringify(roles));
    data.append("city", formData.city);
    data.append("name", formData.name);
    data.append("surname", formData.surname);
    data.append("username", formData.username);
    data.append("password", formData.password);
    data.append("email", formData.email);
    data.append("telephone", formData.telephone);
    if (formData.profileImage) {
      data.append("profileImage", formData.profileImage);
    }

    const requestOptions: RequestInit = {
      method: "POST",
      body: data,
      redirect: "follow",
    };

    fetch("http://localhost:8080/api/v1/user", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }
        return response.text();
      })
      .then((result) => {
        toast.success("Registro exitoso. Redirigiendo a inicio de sesión...");
        setTimeout(() => {
          navigate("/signIn");
        }, 2000); // Espera 2 segundos antes de redirigir
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-lightGreen3">
      <ToastContainer />
      <div className="my-10 flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-5xl">
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
            <Link to="/">
              <img
                className="lg:h-24 sm:h-8 transition-transform duration-300 ease-in-out transform hover:scale-105"
                src={iconConectaCampo}
                alt="ConectaCampo Logo"
              />
            </Link>
          </div>

          <p className="mt-3 text-3xl text-center text-gray-600 dark:text-gray-200">
            ¡Regístrate!
          </p>

          <form className="mt-4" onSubmit={handleSubmit}>
            {/* Campos del formulario */}
            <div className="flex gap-4">
              <div className="flex-1">
                <InputBox
                  type="text"
                  placeholder="Nombre*"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex-1">
                <InputBox
                  type="text"
                  placeholder="Apellido*"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                />
              </div>
            </div>

            <InputBox
              type="email"
              placeholder="Correo Electrónico*"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <InputBox
              type="text"
              placeholder="Nombre de Usuario*"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            <InputBox
              type="password"
              placeholder="Contraseña*"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />

            <div className="flex gap-4">
              <div className="flex-1">
                <InputBox
                  type="tel"
                  max="9"
                  placeholder="Teléfono"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                />
              </div>
              <div className="flex-1">
                <InputBox
                  type="text"
                  placeholder="Ciudad*"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-4">
              <input
                type="file"
                name="profileImage"
                className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none dark:border-dark-3 dark:text-white"
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Tipo de Cuenta
              </label>
              <select
                name="accountType"
                value={formData.accountType}
                onChange={handleChange}
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
