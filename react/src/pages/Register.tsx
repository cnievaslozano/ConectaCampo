import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@components/common/Button";
import iconConectaCampo from "@assets/conectaCampo.png";
import illustration from "@assets/ilustration/ilustrationRegister.png";
import InputBox from "@components/common/InputBox";
import { uploadImage } from "@utils/fireBaseUtils";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    username: "",
    password: "",
    email: "",
    telephone: "",
    city: "",
    pathProfileImage: "",
    accountType: "normal",
    profileImageFile: null as File | null,
  });

  const [loading, setLoading] = useState(false); // Estado de carga
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, files } = e.target as HTMLInputElement;

    if (type === "file" && files && files[0]) {
      const file = files[0];

      setFormData((prevFormData) => ({
        ...prevFormData,
        profileImageFile: file,
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validateForm = () => {
    const { name, surname, username, password, email, city } = formData;

    if (!name || !surname || !username || !password || !email || !city) {
      toast.error("Por favor, complete todos los campos obligatorios.");
      return false;
    }

    if (formData.telephone && formData.telephone.length !== 9) {
      toast.error("El número de teléfono debe tener 9 caracteres.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true); // Activar estado de carga

    try {
      let pathProfileImage = formData.pathProfileImage;

      if (formData.profileImageFile) {
        pathProfileImage = await uploadImage(formData.profileImageFile);
      }

      const roles = formData.accountType === "vendedor" ? ["FARMER"] : ["USER"];

      const data = {
        roles,
        city: formData.city,
        name: formData.name,
        surname: formData.surname,
        username: formData.username,
        password: formData.password,
        email: formData.email,
        telephone: formData.telephone,
        pathProfileImage,
      };

      const requestOptions: RequestInit = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        redirect: "follow",
      };

      const response = await fetch(
        "http://localhost:8080/api/v1/user",
        requestOptions
      );
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }
      const result = await response.text();
      toast.success("Registro exitoso. Redirigiendo a inicio de sesión...");
      setTimeout(() => {
        setLoading(false); // Desactivar estado de carga
        navigate("/signIn");
      }, 2000);
    } catch (error) {
      setLoading(false); // Desactivar estado de carga
      if (error instanceof Error) {
        toast.error(`Error: ${error.message}`);
      } else {
        toast.error("Error desconocido.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-lightGreen3">
      <ToastContainer />
      {loading && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <p className="text-gray-700">Cargando...</p>
            {/* Puedes agregar un spinner o cualquier otro indicador de carga aquí */}
          </div>
        </div>
      )}
      <div className="my-10 flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-5xl">
        <div className="py-10 w-full flex justify-center items-center lg:w-1/2 overflow-hidden">
          <img
            src={illustration}
            alt="Ilustración de Registro"
            className="transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>

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
                name="pathProfileImage"
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
