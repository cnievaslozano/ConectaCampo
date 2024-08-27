import { User } from "@types/models";
import { toast } from "react-toastify";
import { Toast } from "react-toastify/dist/components";
import "react-toastify/dist/ReactToastify.css";

const postFollow = (isFollowing: boolean, currentUser:number|null) => {

    //TODO Necesito tambien el usuario de el currentUser y el de el UserPage
    let type= "";
    const userPageId = currentUser;
    let userString = localStorage.getItem("userData");
    let myUserId = null;
    console.log("Entrando funcion post follow")
    if (!userString) { //Si no existe localStorage, hacemos fake data y que sea el usuario 8
        myUserId = 8;

    }else if(userString){   //Si existe token, hacemos que sea lo que saca de el localStorage, el usuario
        const ownUser:User = JSON.parse(userString);
        myUserId = ownUser.id;
    }   

    if (isFollowing) {
        //Aqui habra que hacer que deje de seguirse
        type= "unfollow"
    }else if (!isFollowing) {
        //Aqui hay que hacer que se siga
        type= "follow"
    }

    const requestOptions = {
      method: "POST",
      redirect: "follow" as RequestRedirect
    };
    
    fetch("http://localhost:8080/api/v1/user/"+myUserId+"/"+ type+ "/"+userPageId, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result)
        toast.success(result)
    })
      .catch((error) => {
        console.error(error)
        toast.error(error.message)
    });

    console.log(isFollowing ? "Following..." : "Unfollowing...");
    return null;
}
export default postFollow;
