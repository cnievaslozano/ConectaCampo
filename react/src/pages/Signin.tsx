import { Link } from "react-router-dom";
import Button from "@components/common/Button";
import iconConectaCampo from "@assets/conectaCampo.png";
import { useState } from "react";

const InputBox = ({ id, type, placeholder, name, value, onChange }: any) => {
  return (
    <div className="mb-6">
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
        required
      />
    </div>
  );
};

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault(); // Previene el comportamiento predeterminado del formulario de recargar la página

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      // ,
      // mode: 'cors' // Asegúrate de que el servidor esté configurado para permitir CORS
    };

    try {
      const response = await fetch(
        "http://localhost:8080/auth/login",
        requestOptions
      );
      if (!response.ok) {
        throw new Error("Failed to sign in");
      }
      const result = await response.json(); // Suponiendo que la API devuelve JSON
      console.log("Sign in successful", result);
      // Aquí podrías manejar la respuesta, como guardar un token o redirigir al usuario
    } catch (error: any) {
      console.error("Error during sign in:", error);
      setError(error.message); // Muestra el error en la interfaz
    }
  };

  return (
    <section className="bg-lightGreen3 py-20 dark:bg-dark lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
              <div className="mb-10 text-center md:mb-16">
                <Link
                  to="/"
                  className="flex justify-center items-center mb-4 lg:mb-0 w-full"
                >
                  <img
                    src={iconConectaCampo}
                    className="h-20"
                    alt="ConectaCampo Logo"
                  />
                  <div className="flex flex-col justify-center items-center text-3xl font-semibold whitespace-nowrap text-black">
                    <span className="leading-none mb-0">Conecta</span>
                    <span className="leading-none mt-0">Campo</span>
                  </div>
                </Link>
              </div>

              <form onSubmit={handleSubmit}>
                <InputBox
                  id="username"
                  type="text"
                  name="username"
                  placeholder="Usuario"
                  value={username}
                  onChange={(e: any) => setUsername(e.target.value)}
                />
                <InputBox
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e: any) => setPassword(e.target.value)}
                />
                {error && (
                  <p style={{ color: "red" }}>
                    Usuario o Contraseña incorrectos
                  </p>
                )}
                <div className="mb-10">
                  <Button type="submit" text="Iniciar sesión" className="p-3" />
                </div>
              </form>
              <p className="mb-6 text-base text-secondary-color dark:text-dark-7">
                Conecta con
              </p>
              <ul className="-mx-2 mb-12 flex justify-between">
                <li className="w-full px-2">
                  <a
                    href="/#"
                    className="flex h-11 items-center justify-center rounded-md bg-primary hover:bg-opacity-90"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.8477 8.17132H9.29628V10.643H15.4342C15.1065 14.0743 12.2461 15.5574 9.47506 15.5574C5.95916 15.5574 2.8306 12.8821 2.8306 9.01461C2.8306 5.29251 5.81018 2.47185 9.47506 2.47185C12.2759 2.47185 13.9742 4.24567 13.9742 4.24567L15.7024 2.47185C15.7024 2.47185 13.3783 0.000145544 9.35587 0.000145544C4.05223 -0.0289334 0 4.30383 0 8.98553C0 13.5218 3.81386 18 9.44526 18C14.4212 18 17.9967 14.7141 17.9967 9.79974C18.0264 8.78198 17.8477 8.17132 17.8477 8.17132Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
              <a
                href="/#"
                className="mb-2 inline-block text-base text-dark hover:text-primary hover:underline dark:text-white"
              >
                ¿Olvidaste la contraseña?
              </a>
              <p className="text-base text-body-color dark:text-dark-6">
                <span className="pr-0.5">¿No tienes cuenta?</span>
                <a href="/register" className="text-primary hover:underline">
                  Registrate
                </a>
              </p>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
