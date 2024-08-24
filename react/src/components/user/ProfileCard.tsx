import React from 'react';
import { Link } from 'react-router-dom';

const FollowerCard = ({ person }:any) => {
  const ProfileStyle = {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    display: 'flex',
  };

  return (
    <div style={ProfileStyle} className='my-3'>
      <Link to="/profile" className='flex content-center'>
        <img className="h-20 rounded-lg" src={person.image} alt="Err" />
        <p className="text-lg mx-10 self-center">{person.name}</p>
      </Link>
      <div className='flex-col ml-10 content-center'>
        <p>{person.description}</p>
        <p className="text-gray-700">{person.location}</p>
      </div>
    </div>
  );
};

export default FollowerCard;
