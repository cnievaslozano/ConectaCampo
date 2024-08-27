import CorBefore from "@assets/cor antes.webp";
import CorAfter from "@assets/corazon.webp";
import { User } from "@types/models";

/**
 * Verifica si un usuario (OwnUser) sigue a otro usuario basado en su lista de seguidores.
 *
 * @param followerList - Array de objetos que representan los seguidores del usuario visualizado, cada objeto contiene un `id` numérico.
 * @param OwnUser - Nombre de usuario del observador que se está verificando si sigue a otro usuario.
 * @param allUsersJson - Array que contiene la información de todos los usuarios, utilizada para encontrar el `id` de `OwnUser`.
 * @returns `true` si el usuario (OwnUser) sigue al usuario visualizado osea Corafter, `false` en caso contrario o si los parámetros proporcionados no son válidos CorBefore.
 */
const isFollowing = (followerList: { id: number }[] | null, OwnUser: any, allUsersJson: User[]|null) => {
    //Quiero ver si el usuario, sigue a el usuario que se le da, 

    if (allUsersJson && followerList) {
        //TODO ToChange: Para debugear, si no existe localStorare Username, sera Pepe
        if(!OwnUser){
            OwnUser = "pepe";
        }
        const user = allUsersJson.find((user: User) => user.username === OwnUser);
        const userId = user?.id;
        //Ver si followers de su usuario sale el id de OwnUser

         // Verifica si el ID del usuario está en el array de followers del usuario que se está visualizando
         const isUserFollowing = followerList.some(follower => follower.id === userId);
         if (isUserFollowing) {
            console.log("Returning corYes");
            return CorAfter;
         } else {
            console.log("Returning corNo");
            return CorBefore;
         }
    }else{
        console.log("Returning null");
        return null;
    }
}
export default isFollowing;