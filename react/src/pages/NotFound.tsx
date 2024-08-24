import Layout from "@components/layout/Layout";
import Container from "@components/common/Container";
import Ilustration404 from "@assets/ilustration/404.png";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <Layout>
      <Container>
        <div className="flex flex-col items-center justify-center w-full h-[650px]">
          <img
            src={Ilustration404}
            alt="404 Not Found"
            className="max-w-full max-h-full"
          />
          <p className="text-xl text-gray-600 mt-8">
            La página que estás buscando no existe, vuelve a{" "}
            <Link to="/" className="text-blue-600 underline">
              inicio
            </Link>
            .
          </p>
        </div>
      </Container>
    </Layout>
  );
};

export default NotFound;
