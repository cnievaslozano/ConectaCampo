import React from 'react';
import trashSVG from '@assets/trash.svg';
import {Product} from '@types/models'

// Define la interfaz para las categorías y productos


const DeleteProduct= ({ product }:any) => {
  const deleteProduct = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/product/${product.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete product');
      }

      console.log('Product deleted successfully', await response.json());
      alert('Product deleted successfully');
    } catch (error) {
      console.error('Error deleting product', error);
      alert('Failed to delete product');
    }
  };

  return (
    <button 
      onClick={deleteProduct} 
      className="w-7 h-7  rounded-lg bg-red-400 flex items-center justify-center border-none cursor-pointer hover:bg-red-600"
    >
      <img src={trashSVG} alt="Delete product" />
    </button>
  );
}

export default DeleteProduct;
