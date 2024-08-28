import CorBefore from "@assets/cor antes.webp";
import CorAfter from "@assets/corazon.webp";

import { Product, User, Publication } from "@types/models";
const defaultUserData = {
    id: 1,
    following: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
    ],
    followers: [
        { id: 10 },
        { id: 19 },
        { id: 28 },
        { id: 37 },
        { id: 46 },
        { id: 55 },
        { id: 64 },
        { id: 73 },
        { id: 82 },
    ],
    products: [
        {
            id: 1,
            categories: [{ id: 1, name: "Verduras" }],
            publications: [
                {
                    id: 1,
                    likes: [
                        { id: 1 },
                        { id: 2 },
                        { id: 3 },
                        { id: 4 },
                        { id: 5 },
                        { id: 6 },
                        { id: 7 },
                        { id: 8 },
                        { id: 9 },
                        { id: 10 },
                    ],
                    description:
                        "Zanahorias frescas y crujientes disponibles en diferentes cantidades.",
                    address: "Reus",
                    schedule: "Mañanas",
                    active: true,
                    pathPublicationImage:
                        "https://firebasestorage.googleapis.com/v0/b/conectacampo-9691f.appspot.com/o/images-publication%2Fzanahoria.webp?alt=media&token=4a78145a-5f98-4f5b-ac87-5d6d7b39de0b",
                    createdAt: "2024-08-25T01:56:00.000+00:00",
                    likeCount: 10,
                },
            ],
            name: "Zanahorias",
            description: "Zanahorias frescas y crujientes.",
            price: 2.5,
            quantity: 50,
            createdAt: "2024-08-25T02:08:36.000+00:00",
            userId: 1,
        },
        {
            id: 9,
            categories: [{ id: 1, name: "Verduras" }],
            publications: [
                {
                    id: 9,
                    likes: [
                        { id: 81 },
                        { id: 82 },
                        { id: 83 },
                        { id: 84 },
                        { id: 85 },
                        { id: 86 },
                        { id: 87 },
                        { id: 88 },
                        { id: 89 },
                        { id: 90 },
                    ],
                    description:
                        "Lechugas frescas y crujientes, perfectas para ensaladas.",
                    address: "Reus",
                    schedule: "Mañanas",
                    active: true,
                    pathPublicationImage:
                        "https://firebasestorage.googleapis.com/v0/b/conectacampo-9691f.appspot.com/o/images-publication%2Flechus.webp?alt=media&token=4236ed73-614c-49e1-9cb0-3d5ccae004f8",
                    createdAt: "2024-08-25T02:04:00.000+00:00",
                    likeCount: 10,
                },
            ],
            name: "Lechugas",
            description: "Lechugas frescas y crujientes.",
            price: 2.0,
            quantity: 70,
            createdAt: "2024-08-25T02:08:36.000+00:00",
            userId: 1,
        },
        {
            id: 15,
            categories: [{ id: 9, name: "Aceites" }],
            publications: [
                {
                    id: 15,
                    likes: [],
                    description:
                        "Nuestro aceite de coco es ideal para cocinar y para el cuidado de la piel. 100% puro y natural.",
                    address: "987 Calle del Coco, Sector Salud",
                    schedule: "Lunes a Domingo, 8:00 AM - 7:00 PM",
                    active: true,
                    pathPublicationImage:
                        "https://firebasestorage.googleapis.com/v0/b/conectacampo-9691f.appspot.com/o/images-publication%2F14-CONOCE_EL_ACEITE_DE_COCO_NATURAL_UN_AMIGO_PERFECTO_Y_VERSATIL_800x.webp?alt=media&token=66f4923e-8004-4afd-a06e-f6913f398df0",
                    createdAt: "2024-08-25T02:26:31.000+00:00",
                    likeCount: 0,
                },
            ],
            name: "Aceite de coco",
            description: "Aceite de coco puro.",
            price: 6.5,
            quantity: 20,
            createdAt: "2024-08-25T02:21:55.000+00:00",
            userId: 1,
        },
    ],
    roles: [{ id: 1, name: "FARMER" }],
    city: "Reus",
    name: "Pepe",
    surname: "Rojas Tomillo",
    username: "pepe",
    password: "$2a$10$PxmU0g1VRMPSjj19xkEWhuUl4JcHJfUWTKFLjmQILR/tTquKTcoIm",
    email: "pepe@gmail.com",
    telephone: "987456123",
    aboutMe:
        "Agricultor apasionado con años de experiencia cultivando hortalizas frescas y orgánicas.",
    pathProfileImage:
        "https://firebasestorage.googleapis.com/v0/b/conectacampo-9691f.appspot.com/o/images%2F1724549797550_1.jpg?alt=media&token=f9a0a992-b266-4bb5-9a6d-d87311aff585",
    createdAt: "2024-08-25T01:36:39.000+00:00",
};
/**
 * Verifica si un usuario (OwnUser) sigue a otro usuario basado en su lista de seguidores.
 *
 * @param
 * @returns
 */
//TODO Comprobar si ownUser ID esta en los likes user id. Pero hay que sacar el id de ownUser primero, luego comparar
const isFavourite = (publication: Publication) => {
    let userString = localStorage.getItem("userData");

    if (!userString) {
        //Fake Data
        userString = JSON.stringify(defaultUserData);
    } else if (userString) {
        const ownUser: User = JSON.parse(userString);
        const ownUserId = ownUser.id;

        // Verifica si el ID del usuario está en el array de likes.
        const hasUserLiked = publication.likes.some((like) => like.id === ownUserId);

        console.log("Valor userLiked? " + hasUserLiked);

        return hasUserLiked;
    }

    console.log("Null favourite");
    return false;
};
export default isFavourite;
