import React from 'react';
import Layout from '@components/layout/Layout';
import Container from '@components/common/Container';
import { Link } from 'react-router-dom';


const ProfileFollowList = () => {
    const followers = [
        { id: 1, name: "Jorge del Amo", description: "Agricultor autoctono de pura cepa", location: "Reus, Catalunya", image:"https://naranjasmarisa.com/wp-content/uploads/2023/04/banner-melones-naranjas-marisa-2023.webp" },
        { id: 2, name: "Rafel Garcia", description: "Campero de la zona de Riudoms, siempre dispuesto", location: "Granada, España", image:"https://naranjasmarisa.com/wp-content/uploads/2023/04/banner-melones-naranjas-marisa-2023.webp" },

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

  return (
    <Layout>
        <Container className=''>
            <div>
              <Link to="/profile" ><h1 className='text-3xl text-center mb-10'>Rafel Seguidores</h1></Link>
                
            {followers.map((person) => (
            <div key={person.id} style={ProfileStyle} className='my-3'>
              <Link to="/profile" className='flex content-center'>
                <img className="h-20 rounded-lg" src={person.image} alt="Err" />
                <p className="text-lg mx-10 self-center">{person.name}</p>

              </Link>
                <div className='flex-col ml-10 content-center'>
                    <p className="">{person.description}</p>
                    <p className="text-gray-700">{person.location}</p>
                </div>

            </div>
            ))}
            </div>
        </Container>
    </Layout>

  )

};

export default ProfileFollowList;
