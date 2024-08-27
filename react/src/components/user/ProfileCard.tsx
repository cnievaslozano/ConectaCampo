import React from "react";
import { Link } from "react-router-dom";
import defaultUser from "@assets/user/defaultUser.webp";
import { ProfileCardProps } from "../../types/props";

const ProfileCard: React.FC<ProfileCardProps> = ({ person, userList }) => {
    const truncateDescription = (description: string, maxLength: number) => {
        if (description.length > maxLength) {
          return description.substring(0, maxLength) + "...";
        }
        return description;
      };

      const countMatchingIds = (following: { id: number }[]) => { //Compara la array de los id users creados con los followers id que le pases, si existen devuelve el length para contar seguidos y seguidores
        if (!userList) {
          return 0;
        }
    
        // Crear un set para optimizar la búsqueda de coincidencias
        const userSet = new Set(userList);
    
        // Filtrar los IDs de following que están presentes en userList
        const matchingIds = following.filter(user => userSet.has(user.id));
    
        // Retornar el número de coincidencias
        return matchingIds.length;
      };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex items-center my-4 transition-transform duration-300 ease-in-out transform hover:scale-105">
      <Link to={"/profile/" + person.username} className="flex items-center">
        <img
          className="h-20 w-20 rounded-full object-cover border-2 border-gray-300"
          src={person.profileImage ? person.profileImage : defaultUser}
          alt={`${person.name} profile`}
          title={person.username}
        />
      </Link>
      <div className="ml-6 flex-1">
        <Link to={"/profile/" + person.username} className="block">
          <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200">
            {person.name} {person.surname}
          </h2>
        </Link>
        <p className="text-gray-600 mt-2">
          {person.aboutMe ? truncateDescription(person.aboutMe, 90) : "Descripción no introducida"}
        </p>
        <p className="text-gray-500 mt-1">
          {person.city ? person.city : "Ubicación no especificada"}
        </p>
        <div className="flex mt-4 space-x-6 text-sm text-gray-500">
          <p>
            <span className="font-semibold">{countMatchingIds(person.followers)}</span>{" "}
            Seguidores
          </p>
          <p>
            <span className="font-semibold">{countMatchingIds(person.following)}</span>{" "}
            Siguiendo
          </p>
        </div>
        <p className="text-gray-400 text-sm mt-3">
          Miembro desde: {new Date(person.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;