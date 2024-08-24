import React from 'react';
import Layout from '@components/layout/Layout';
import Container from '@components/common/Container';
import { Link, useParams } from 'react-router-dom';
import ProfileCard from '@components/user/ProfileCard';


const ProfileFollowList = (userData?:any, type?:string, user?:string) => {
  const { usernameUrl } = useParams();

  const handleProfile = async () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow" as RequestRedirect,
    };

    try {
      const response = await fetch("http://localhost:8080/api/v1/user/all", requestOptions);
      const result = await response.json();
      const userFound = result.find((item: { username: string | undefined; }) => item.username === usernameUrl);
      //setUser(userFound); 
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

    const followers = [
        { id: 1, name: "Jorge del Amo", description: "Agricultor autoctono de pura cepa", location: "Reus, Catalunya", image:"https://naranjasmarisa.com/wp-content/uploads/2023/04/banner-melones-naranjas-marisa-2023.webp" },
        { id: 2, name: "Rafel Garcia", description: "Campero de la zona de Riudoms, siempre dispuesto", location: "Granada, España", image:"https://naranjasmarisa.com/wp-content/uploads/2023/04/banner-melones-naranjas-marisa-2023.webp" },

        // Agrega más items aquí
      ];

      if (type=="followers") {
        
      }else if (type == "following") {
        
      }
      const ProfileStyle: React.CSSProperties = {
        backgroundColor: '#fff',
        padding: '15px',
        borderRadius: '8px',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        display: 'flex',
        
        
      };

  return (
    <Layout>
        <Container className=''>
            <div>
              <Link to="/profile" ><h1 className='text-3xl text-center mb-10'>Rafel Seguidores</h1></Link>
                
            {followers.map((person) => (
              <ProfileCard person={person}/>
            ))}
            </div>
        </Container>
    </Layout>

  )

};

export default ProfileFollowList;
