import React, { useEffect, useState } from "react";
import Layout from "@components/layout/Layout";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "@components/common/Button";
import defaultImage from "@assets/user/defaultUser.webp";
import { User, Product, Publication } from "../types/models";
import "@styles/Profile.css";
import ProductProfileCard from "@components/user/ProductProfileCard";
import isFollowing from "@components/user/isFollowing";
import CorBefore from "@assets/cor antes.webp";
import CorAfter from "@assets/corazon.webp";
import FavouriteProductGrid from "@components/products/FavouriteProductGrid";
import postFollow from "@components/user/postFollow";
import { ToastContainer } from "react-toastify";

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [userList, setUserList] = useState<number[] | null>(null); // Usuarios totales en /users/all en array de ids
  const [followers, setFollowers] = useState<{ id: number }[] | null>(null);
  const [allUsersJson, setAllUsersJson] = useState<User[] | null>(null);
  const [allProductsJson, setAllProductsJson] = useState<Product[] | null>(
    null
  );
  const [userProducts, setUserProducts] = useState<Product[]>([]); // Estado para los productos del usuario
  const [userPublications, setUserPublications] = useState<Publication[]>([]); // Estado para las publicaciones del usuario
  const [loading, setLoading] = useState(true); // Estado para manejar el spinner de carga
  const [isFollowingState, setIsFollowingState] = useState<boolean>(false); // Estado para manejar el estado de seguimiento

  const locationUrl = useLocation();
  const userNameUrl = locationUrl.pathname.split("/").filter(Boolean).pop();
  const navigate = useNavigate();

  const handleProfile = async () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow" as RequestRedirect,
    };

    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/user/all",
        requestOptions
      );
      const result = await response.json();
      const userFound = result.find(
        (item: { username: string | undefined }) =>
          item.username === userNameUrl
      );
      if (userFound) {
        setUser(userFound);
        setFollowers(userFound.followers);
        setAllUsersJson(result);

        // Set initial isFollowingState based on isFollowing function
        const isUserFollowing = isFollowing(
          userFound.followers,
          localStorage.getItem("Username"),
          result
        );
        setIsFollowingState(!!isUserFollowing);

        // Realiza un fetch para obtener los productos de este usuario
        fetchUserProducts(userFound.id);
      } else {
        navigate("/404");
      }

      // Bloque para rellenar la variable userList que calcula los users seguidos y seguidores
      const ids = result.map((user: { id: number }) => user.id);
      setUserList(ids);
    } catch (error) {
      console.error("Error fetching profile data:", error);
      navigate("/404");
    } finally {
      setLoading(false); // Detiene el spinner una vez que la solicitud ha terminado
    }
  };

  // Función para obtener los productos del usuario basado en userId
  const fetchUserProducts = async (userId: number) => {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/product/all`);
      const products = await response.json();
      // Filtrar los productos que pertenecen a este usuario
      setAllProductsJson(products);
      const filteredProducts = products.filter(
        (product: Product) => product.userId === userId
      );
      setUserProducts(filteredProducts); // Guardar los productos filtrados en el estado

      // Ahora, realizar fetch de publicaciones para cada producto
      fetchUserPublications(filteredProducts);
    } catch (error) {
      console.error("Error fetching user products:", error);
    }
  };

  // Función para obtener las publicaciones basadas en los productos del usuario
  const fetchUserPublications = async (products: Product[]) => {
    try {
      const publicationsPromises = products.map((product) =>
        fetch(
          `http://localhost:8080/api/v1/publication/${product.publicationId}`
        )
      );

      const publicationsResponses = await Promise.all(publicationsPromises);
      const publications = await Promise.all(
        publicationsResponses.map((res) => res.json())
      );

      setUserPublications(publications); // Guardar las publicaciones en el estado
    } catch (error) {
      console.error("Error fetching user publications:", error);
    }
  };

  // Bloque para contar ids seguidos y seguidores
  const countMatchingIds = (following: { id: number }[]) => {
    if (!userList) {
      return 0;
    }

    // Crear un set para optimizar la búsqueda de coincidencias
    const userSet = new Set(userList);

    // Filtrar los IDs de following que están presentes en userList
    const matchingIds = following.filter((user) => userSet.has(user.id));

    // Retornar el número de coincidencias
    return matchingIds.length;
  };

  const handleToggleFollow = () => {
    const newIsFollowingState = !isFollowingState;
    setIsFollowingState(newIsFollowingState); // Cambia visualmente el estado de seguimiento
    postFollow(newIsFollowingState, user ? user.id : null); // Ejecuta la función postFollow con el nuevo estado
  };

  useEffect(() => {
    handleProfile();
  }, [userNameUrl]);

  if (loading) {
    // Mostrar spinner mientras se carga la data
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
      </div>
    );
  }

  if (user) {
    return (
      <Layout>
        <ToastContainer />
        <div className="profile-header">
          <div className="profile-image-container">
            <img
              src={user.pathProfileImage || defaultImage}
              alt="Profile"
              className="profile-image"
              title={user.username}
            />
            {localStorage.getItem("token") &&
            user.username !== localStorage.getItem("username") ? ( //Si no estas logged no te saldra para seguir, y si es tu propio perfil tampoco
              <div
                className="heart-icon rounded-full bg-[#8AA86E]"
                onClick={handleToggleFollow}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={isFollowingState ? CorAfter : CorBefore} // Aquí pones la imagen del corazón
                  alt="Favorite"
                  className="heart"
                />
              </div>
            ) : null}
          </div>
          <div className="profile-info">
            <h1 className="profile-name">{user.name + " " + user.surname}</h1>
            <p className="profile-description">{user.aboutMe}</p>
            <div className="flex justify-between">
              <p className="profile-location">{user.city}</p>
              {localStorage.getItem("username") === userNameUrl ? (
                <Link to="/addProduct">
                  <Button
                    text="Añadir Publicación"
                    className="rounded-md p-1 text-gray-100"
                  ></Button>
                </Link>
              ) : null}
            </div>
          </div>
          <div className="profile-info-stats">
            <div className="stat-container">
              <p className="stat-name">Publicaciones</p>
              <p className="stat-indicator">{userProducts.length}</p>
            </div>
            <div className="stat-container">
              <p className="stat-name">Seguidos</p>
              <Link to={"/profile/" + user.username + "/followList"}>
                <p className="stat-indicator">
                  {countMatchingIds(user.following)}
                </p>
              </Link>
            </div>
            <div className="stat-container">
              <p className="stat-name">Seguidores</p>
              <Link to={"/profile/" + user.username + "/followerList"}>
                <p className="stat-indicator">
                  {countMatchingIds(user.followers)}
                </p>
              </Link>
            </div>
          </div>
        </div>
        <h1 className="text-xl mt-10 mb-5">Publicaciones</h1>
        <div className="items-grid">
          {userProducts.map((item, index) =>
            item ? (
              <ProductProfileCard
                key={item.id}
                product={item}
                publication={userPublications[index]}
              />
            ) : null
          )}
        </div>
        <h1 className="text-xl mt-10 mb-5">Favoritos guardados</h1>
        <div className="items-grid">
          <FavouriteProductGrid
            userId={user.id}
            allUsers={allUsersJson}
            products={allProductsJson}
          />
        </div>
      </Layout>
    );
  } else {
    return null; // En caso de que no haya usuario y se haya manejado la redirección, no mostrar nada
  }
};

export default Profile;
