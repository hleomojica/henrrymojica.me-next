import { useState, useEffect } from 'react';

export const useProducts = () => {
  const [products, setProducts] = useState<any[]>([]);

  const fetchProducts = async () => {
    const url = `https://fakestoreapi.com/products`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log('Error calling the API');
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products };
};

export default useProducts;
