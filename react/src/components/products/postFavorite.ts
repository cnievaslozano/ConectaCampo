import { User } from "@types/models";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const postFavorite = (isFavorited: boolean, prodId: number|null) => {
    // Aquí podrías hacer la lógica de la petición POST para agregar o quitar de favoritos

    const userString= localStorage.getItem("userData");
    let userId = null;
    if (!userString) { //Si no existe localStorage, hacemos fake data y que sea el usuario 8
        userId = 8;
        console.log("Userdata NO found")
    }else if(userString){   //Si existe token, hacemos que sea lo que saca de el localStorage, el usuario
        const ownUser:User = JSON.parse(userString);
        userId = ownUser.id;
        console.log("Userdata Json found")
    }   

    //TODO Necesito también el usuario de el currentUser y el de el productoId
    // Determinar el tipo de operación según el estado actual de isFavorited
    let urlType = ""; 
    if(isFavorited){
        // Si es true, se hará el POST para añadir a favoritos, o sea han cambiado de no-like a like
        urlType = "like"; // Establece el tipo de URL para la operación "like"
        console.log("LIKE TO PUBLICATION")
    } else if(!isFavorited){
        // Si es false, se hace el POST para eliminar de favoritos, ya que estaba en true y nos llega el !isFavorited
        urlType = "unlike"; // Establece el tipo de URL para la operación "unlike"
        console.log("UNLIKE TO PUBLICATION")
    }
    
    // Configuración del requestOptions, que se mantendrá como un POST en ambos casos
    const requestOptions = {
        method: "POST", // Siempre se usa el método POST, ya sea para "like" o "unlike"
        redirect: "follow" as RequestRedirect
    };

    // Construcción de la URL completa para la solicitud, incluyendo los parámetros necesarios
    const url = `http://localhost:8080/api/v1/publication/${prodId}/${urlType}?userId=${userId}`;

    // Realizar la solicitud POST
    fetch(url, requestOptions)
        .then((response) => response.text()) // Manejar la respuesta como texto
        .then((result) => {
            console.log(result); // Log para depuración
            //toast.success(result); // Mostrar un toast de éxito con el mensaje de la respuesta
            toast.success("Acción ejecutada con éxito");
        })
        .catch((error) => {
            console.error(error); // Log para depuración de errores
            //toast.error(error.message); // Mostrar un toast de error con el mensaje del error
            toast.error("Error al ejecutar acción")
        });

    console.log(isFavorited ? "Añadir a Favoritos..." : "Eliminar de Favoritos...");

    return null;
}

export default postFavorite;
