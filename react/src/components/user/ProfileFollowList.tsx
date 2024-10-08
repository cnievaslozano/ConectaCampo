import React, { useState, useEffect } from "react";
import Layout from "@components/layout/Layout";
import { Link, useParams, useNavigate } from "react-router-dom";
import ProfileCard from "@components/user/ProfileCard";
import { User } from "../../types/models";
import Pagination from "@components/common/Pagination";

const ProfileFollowList = ({ type }: { type?: string }) => {
  const { usernameUrl } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const [allUserList, setallUserList] = useState<number[] | null>(null);
  const [userFollowList, setUserFollowList] = useState<number[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const navigate = useNavigate();

  const fetchAndFilterUsers = (allUsers: User[]) => {
    const filtered = allUsers.filter((user) => userFollowList.includes(user.id));
    console.log("Filtered Users:", filtered); // Verifica si `filteredUsers` se llena correctamente
    setFilteredUsers(filtered);
  };

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
      console.log("Fetched Users:", result); // Verifica que el fetch trae datos
      const userFound = result.find(
        (item: { username: string | undefined }) =>
          item.username === usernameUrl
      );
      if (userFound) {
        setUser(userFound);

        let ids: number[] = [];
        if (type === "following") {
          ids = userFound.following.map(
            (follower: { id: number }) => follower.id
          );
        } else if (type === "followers") {
          ids = userFound.followers.map(
            (follower: { id: number }) => follower.id
          );
        }


        console.log("User List IDs:", ids); // Verifica si los IDs se obtienen correctamente
        setUserFollowList(ids);

        // Filtrar usuarios inmediatamente después de obtener la lista de IDs
        fetchAndFilterUsers(result);

        //Despues de las comprobaciones sacamos los usersList total para introducirlo en las cards y que cada card compruebe si tiene los usuarios que sigue existen
          // Extraer los IDs de los usuarios
          const allUserIds = result.map((user: { id: number; }) => user.id);

          // Guardar los IDs en el estado allUserList
          setallUserList(allUserIds);

      } else {
        navigate("/404");
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  // Bloque para controlar la paginacion:

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 6; // Cambia esto si quieres más o menos usuarios por página

  // Calcula los índices de los usuarios que deben mostrarse en la página actual
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Calcula el número total de páginas
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);


  useEffect(() => {
    handleProfile();
  }, [usernameUrl]);

  useEffect(() => {
    if (userFollowList.length > 0) {
      handleProfile(); // Asegura que filtramos los usuarios en el momento correcto
    }
  }, [userFollowList]);

  if (user) {
    return (
      <Layout>
        <div>
          {/* <p>userFollowList = {userFollowList.join(", ")}</p> */}
          <Link to={"/profile/" + usernameUrl}>
            <h1 className="text-3xl text-center mb-10"> 
              {type === "followers" ? "Seguidores de: " + usernameUrl :null}
              {type === "following" ? "Seguidos de: "+ usernameUrl :null}
            </h1>
          </Link>
          {currentUsers.length > 0 ? (
        <div className="grid grid-cols-2 gap-6">
          {currentUsers.map((person) => (
            <ProfileCard key={person.id} person={person} userList={allUserList} />
          ))}
        </div>
      ) : (
        <p>No se encontraron usuarios.</p>
      )}
      
      {/* Renderiza la paginación */}
      <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
        </div>
      </Layout>
    );
  } else {
    return (
      <p>Fetching API error, User not found in api/v1/user/all</p>
    );
  }
};

export default ProfileFollowList;
