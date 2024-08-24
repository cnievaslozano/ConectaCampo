import React, { useState, useEffect } from 'react';
import Layout from '@components/layout/Layout';
import Container from '@components/common/Container';
import { Link, useParams } from 'react-router-dom';
import ProfileCard from '@components/user/ProfileCard';
import ErrorComp from '@components/layout/Error';
interface User {
  id: number;
  following: User[];
  followers: User[];
  products: any[];
  roles: any[];
  city: string;
  name: string;
  surname: string;
  username: string;
  password: string;
  email: string;
  telephone: string;
  aboutMe: string | null;
  profileImage: string | null;
  createdAt: string;
}

const ProfileFollowList = ({ type }: { type?: string }) => {
  const { usernameUrl } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const [userList, setUserList] = useState<number[]>([]); // Utilizamos un estado para almacenar el userList

  const handleProfile = async () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow" as RequestRedirect,
    };

    try {
      const response = await fetch("http://localhost:8080/api/v1/user/all", requestOptions);
      const result = await response.json();
      const userFound = result.find((item: { username: string | undefined; }) => item.username === usernameUrl);
      if (userFound) {
        setUser(userFound);
        const userList = userFound.following.map((follower: { id: number }) => follower.id);
        setUserList(userList); // Actualizamos el estado con los IDs de los usuarios seguidos
        console.log(userList);
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  useEffect(() => {
    handleProfile();
  }, [usernameUrl]); // Ejecutamos la función cuando el componente se monta y cuando cambia el usernameUrl

  const followers = [
    { id: 1, name: "Jorge del Amo", description: "Agricultor autoctono de pura cepa", location: "Reus, Catalunya", image: null },
    { id: 2, name: "Rafel Garcia", description: "Campero de la zona de Riudoms, siempre dispuesto", location: "Granada, España", image: null },
    // Agrega más items aquí
  ];

  const ProfileStyle: React.CSSProperties = {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    display: 'flex',
  };

  if (user) { //Si hay user del fetch carga pagina, sino carga 404 error
      return (
    <Layout>
      <Container className=''>
        <div>
          <p>UserList = {userList.join(', ')}</p> {/* Mostramos los IDs como una lista separada por comas */}
          <Link to="/profile"><h1 className='text-3xl text-center mb-10'>Rafel Seguidores</h1></Link>
          {followers.map((person) => (
            <ProfileCard key={person.id} person={person} />
          ))}
        </div>
      </Container>
    </Layout>
  );
  }else{
    return(
      <ErrorComp />
    )
  }

};

export default ProfileFollowList;
