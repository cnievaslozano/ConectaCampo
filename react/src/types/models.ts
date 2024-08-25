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

export interface UserData {
  // para el SearchProductGrid
  pathProfileImage: string;
}

export interface Publication {
  id: number; // ID publicación
  user: {
    id: number;
  };
  likes: any[]; // Puedes especificar más si sabes la estructura de los likes
  description: string;
  address: string;
  schedule: string;
  active: boolean;
  pathPublicationImage: string;
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
  image: string;
  userId: number;
  imageUser: string;
  publications: Publication[];
  createdAt?: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface Role {
  id: number;
  name: string;
}
