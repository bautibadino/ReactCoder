  import React, { useEffect, useState } from 'react';
  import {ItemList} from '../../pages/IpadPage/ItemList'
  import { products } from '../../../public/data/products';

  export const ItemListContainer = () => {
    const [productosFetch, setProductosFetch] = useState([]);

    useEffect(() => {
      
      fetch('../data/products.js')
        .then((res)=> res.json())
        .then((result) => setProductosFetch(result) )
    }, [])
    
    console.log(productosFetch)
    return (
      <>
        <ItemList productosFetch={productosFetch} />
      </>
    );
  };