
    //TODO cuando se recoge el userId, hay que mapear todos los products.publications y ver si en los likes esta el
    //TODO id de este usuario
    import React, { useState, useEffect } from "react";
    import ProductProfileCard from "@components/user/ProductProfileCard";
    import { Product, User } from "@types/models";
    

    const FavouriteProductGrid = ({ userId, allUsers }: { userId: number; allUsers: User[]|null }) => {
      const [favouriteProducts, setFavouriteProducts] = useState<Set<Product>>(new Set());
    
      // Función para manejar la generación del grid de productos favoritos
      const handleFavouriteGrid = () => {
        const favouriteProductsSet = new Set<Product>();
    
        // Recorrer todos los usuarios en `allUsers`
        allUsers?.forEach(user => {
          // Recorrer todos los productos de cada usuario
          user.products.forEach(product => {
            // Recorrer todas las publicaciones de cada producto
            product.publications.forEach(publication => {
              // Verificar si el `userId` está en la lista de `likes` de la publicación
              const userHasLiked = publication.likes.some(like => like.id === userId);
              if (userHasLiked) {
                // Si está, añadir el producto al `Set` de productos favoritos
                favouriteProductsSet.add(product);
                console.log(publication.likes)
                console.log("El usuario que lo tiene en favoritos es: " + userId)
              }
            });
          });
        });
    
        // Actualizar el estado con los productos favoritos encontrados
        setFavouriteProducts(favouriteProductsSet);
      };
    
      useEffect(() => {
        handleFavouriteGrid(); // Llamar a la función al montar el componente o cuando `userId` o `allUsers` cambien
      }, [userId, allUsers]);
    
      return (
        <>
          {Array.from(favouriteProducts).map(product => (
            // Renderizar cada producto favorito usando el componente `ProductProfileCard`
            <ProductProfileCard key={product.id} product={product} />
          ))}
        </>
      );
    };
    
    export default FavouriteProductGrid;
    