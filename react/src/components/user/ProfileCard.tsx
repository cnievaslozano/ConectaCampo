import React from 'react';
import { Link } from 'react-router-dom';
import defaultUser from '@assets/user/defaultUser.webp'
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
  interface ProfileCardProps {
    person: User;
  }

const ProfileCard: React.FC<ProfileCardProps> = ({ person }) => {
  const ProfileStyle:any = {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    display: 'flex',
  };

  return (
    <div style={ProfileStyle} className='my-3'>
      <Link to={"/profile/" + person.username} className='flex content-center'>
      <img 
          className="h-20 rounded-lg" 
          src={person.profileImage ? person.profileImage : defaultUser} 
          alt="Err" 
        />        <p className="text-lg mx-10 self-center">{person.name}</p>
      </Link>
      <div className='flex-col ml-10 content-center'>
        <p>{person.aboutMe ? person.aboutMe : "Descripcion no introducida"}</p>
        <p className="text-gray-700">{person.city ? person.city : "Barcelona, España"}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
