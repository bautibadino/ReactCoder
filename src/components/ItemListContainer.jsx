  import React, { useEffect, useState } from 'react';
  import { ItemList } from './ItemList'; 
  import { products } from '../data/products';
  import { getProducts } from '../data/products';
  export const ItemListContainer = () => {
    const [productosFetch, setProductosFetch] = useState([]);

    useEffect(() => {
      
      fetch('../data/products.js')
        .then((res)=> res.json())
        .then((result) => setProductosFetch(result) )
    }, [])
    
    useEffect(() => {
      getProducts().then((products) => {
        setProductosFetch(products);
      });
    }, [])
    
    return (
      <>
        <ItemList productosFetch={productosFetch} />
      </>
    );
  };