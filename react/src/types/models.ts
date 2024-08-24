export interface User {
  id: number;
  following: User[];
  followers: User[];
  products: Product[];
  roles: Role[];
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
export interface Publication {
  //Partes de la publicacion que me interesan
  id: number; // ID publicación
  user: {
    id: number; // ID usuario
  };
  likes: any[]; // Puedes especificar más si sabes la estructura de los likes
  description: string;
  address: string;
  schedule: string;
  active: boolean;
  pathPublicationImage?: string | null;
  createdAt: string;
  likeCount: number;
}

export interface Product {
  id: number;
  categories: Category[];
  name: string;
  description: string;
  price: number;
  quantity: number;
  createdAt: string;
}

export interface Category {
  id?: number;
  name?: string;
}

export interface Role {
  id: number;
  name: string;
}
