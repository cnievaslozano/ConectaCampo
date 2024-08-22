import { storage } from "../../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { toast } from "react-toastify";

// Función para subir una imagen a Firebase Storage
export const uploadImage = async (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const fileName = `${Date.now()}_${file.name}`; // Agregar un timestamp para evitar conflictos
    const storageRef = ref(storage, `images/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Opcional: puedes manejar el progreso de la carga aquí
      },
      (error) => {
        console.error("Error al subir la imagen:", error);
        toast.error("Error al subir la imagen.");
        reject(error);
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(downloadURL);
        } catch (error) {
          console.error("Error al obtener la URL de descarga:", error);
          toast.error("Error al obtener la URL de descarga.");
          reject(error);
        }
      }
    );
  });
};
