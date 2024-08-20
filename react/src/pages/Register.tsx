import { Link } from "react-router-dom";
import Button from "../components/Button";
import iconConectaCampo from "../assets/conectaCampo.png";

const InputBox = ({ type, placeholder, name }: any) => {
  return (
    <div className="mb-4">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
      />
    </div>
  );
};

const Register = () => {
  return (
    <section className="bg-lightGreen3 py-20 dark:bg-dark lg:py-[120px]">
      <div className={`container mx-auto`}>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
              <div className="mb-10 text-center md:mb-16">
                <Link to="/" className="flex justify-center items-center mb-4 lg:mb-0 w-full">
                  <img src={iconConectaCampo} className="h-20" alt="ConectaCampo Logo" />
                  <div className="flex flex-col justify-center items-center text-3xl font-semibold whitespace-nowrap text-black">
                    <span className="leading-none mb-0">Conecta</span>
                    <span className="leading-none mt-0">Campo</span>
                  </div>
                </Link>
              </div>

              <form method="post" encType="multipart/form-data">
                <p className="text-start">Datos de cuenta: </p>
                <InputBox type="user" name="username" placeholder="Usuario" />
                <InputBox type="password" name="password" placeholder="Contraseña" />

                <p className="text-start">Datos Personales: </p>
                <InputBox type="text" name="name" placeholder="Nombre" />
                <InputBox type="text" name="surname" placeholder="Apellidos" />
                <InputBox type="email" name="email" placeholder="Email" />
                <InputBox type="number" name="telephone" placeholder="Telefono" />

                {/* Imagen de Perfil Opcional */}
                <div className="mb-4">
                  <label className="block text-start mb-2" htmlFor="profileImage">Imagen de Perfil:</label>
                  <input
                    type="file"
                    name="profileImage"
                    id="profileImage"
                    accept="image/*"
                    className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-sm text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
                  />
                </div>

                <div className="mb-10">
                  <Button text="Registrarse" className="p-3" />
                </div>
              </form>

              <div>
                {/* Aquí puedes agregar otros enlaces o contenido */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
