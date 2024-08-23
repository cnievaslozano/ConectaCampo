import React, { useEffect, useState } from "react";
import Layout from "@components/layout/Layout";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "@components/common/Container";
import Button from "@components/common/Button";
import CarouselHome from "@components/home/CarouselHome";
import CardProduct from "@components/products/CardProduct";
import defaultImage from "@assets/user/defaultUser.webp"
import '@styles/Profile.css'
import ProfileProducts from "@components/products/ProfileProducts";
import ErrorComp from "@components/layout/Error";

// {    INFO GET USER in : http://localhost:8080/api/v1/user/3
//   "id": 3,
//   "following": [],
//   "followers": [],
//   "products": [],
//   "roles": [
//       {
//           "id": 3,
//           "name": "USER"
//       }
//   ],
//   "city": "Calafell",
//   "name": "Rafel",
//   "surname": "López Carmen",
//   "username": "rafel1234",
//   "password": "$2a$10$pDELbj2vu8Zh0KC5/puJ/udfNHOJYQNwxj2CYXzQTLlgB7fYczScK",
//   "email": "rafel1234@gmail.com",
//   "telephone": "123456789",
//   "aboutMe": null,
//   "profileImage": null,
//   "createdAt": "2024-08-19T21:04:10.000+00:00"
//   OR GET ALL http://localhost:8080/api/v1/user/all
//   {
//     "id": 1,
//     "products": [],
//     "location": null,
//     "role": "CLIENT",
//     "name": "Paco",
//     "surname": "Prueba",
//     "username": "Paco001",
//     "password": "admin",
//     "email": "paco001@gmail.com",
//     "telephone": "",
//     "createdAt": "2024-07-30T17:47:32.000+00:00"
// },
// }

interface User {
  id: number;
  following: User[];
  followers: User[];
  products: Product[];
  roles: Role[];
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

interface Product {
  id: number;
  categories: Category[];
  name: string;
  description: string;
  price: number;
  quantity: number;
  createdAt: string;
}

interface Category {
  id?: number;
  name?: string;
}

interface Role {
  id: number;
  name: string;
}

const Profile = () => { 

  const [user, setUser] = useState<User | null>(null);
  const locationUrl = useLocation(); //Coge la url que hay
  const userNameUrl = locationUrl.pathname.split("/").filter(Boolean).pop(); //Coge el ultimo segmento para ver el /profile/userName

  //Hacemos el fetch cogiendo el usuario que hay en la ruta. Lo haremos por un getAll
  const handleProfile = async () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow" as RequestRedirect,
    };
    

    try {
      const response = await fetch("http://localhost:8080/api/v1/user/all", requestOptions);
      const result = await response.json();
      //De todo el json se busca el que tenga el usuario igual que la ruta
      const userFound = result.find((item: { username: string | undefined; }) => item.username === userNameUrl);
      setUser(userFound);   //TODO no funciona esto de state con el user, dice que es null o undefined
      console.log(userFound);
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  useEffect(() => {handleProfile()}, []); // El array vacío asegura que este código se ejecute solo cuando el componente se monta

  //TODO Logica que mostrará la opción de añadir producto si es tu propio perfil
  // const [isOwnProfile, setIsOwnProfile] = useState(true);
  // const toggleIsOwnProfile = () => {
  //   setIsOwnProfile(!isOwnProfile);
  // }

  if(user){
      return (
    <Layout>
      <Container className="">
        <div className="profile-header">
          <img src={user.profileImage || defaultImage} alt="Profile" className="profile-image" title={user.username} />
          <div className="profile-info">
            <h1 className="profile-name">{user.name+ " " + user.surname}</h1>
            <p className="profile-description">{user.aboutMe}</p>
            <div className="flex justify-between">
              <p className="profile-location">{user.city}</p>
              <Link to="/addProduct">
                <Button
                  text="Añadir Publicación"
                  className="rounded-md p-1 text-gray-100"
                ></Button>
              </Link>
            </div>
          </div>
          <div className="profile-info-stats">
            <div className="stat-container">
              <p className="stat-name">Publicaciones</p>
              <p className="stat-indicator">{user.products.length}</p>
            </div>
            <div className="stat-container">
              <p className="stat-name">Seguidos</p>
              <Link to="/profile/followList">
                <p className="stat-indicator">{user.following.length}</p>
              </Link>
            </div>
            <div className="stat-container">
              <p className="stat-name">Seguidores</p>
              <Link to="/profile/followerList">
                <p className="stat-indicator">{user.followers.length}</p>
              </Link>
            </div>
          </div>
        </div>
        <h1 className="text-xl mt-10 mb-5">Prublicaciones</h1>
        <div className="items-grid">
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
        <h1 className="text-xl mt-10 mb-5">Favoritos guardados</h1>
        <div className="items-grid">
          {user.products.map((item, index) => (
              <CardProduct key={item.id} prod={item}/>
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

export default Profile;
