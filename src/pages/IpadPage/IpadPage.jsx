import {React, useEffect, useState} from 'react';
import { ItemList } from './ItemList';

  export const IpadPage  =  () => {

  const [productosFetch, setProductosFetch] = useState([]);

    //Traer info del data/json.
      useEffect(() => {
      fetch("../src/data/ipad.json")
        .then((response) => response.json())
        .then((data) => setProductosFetch(data))
        .catch((error) => console.log(error))
    }, []);
    
    console.log('Productos:', productosFetch);

    return (
      <>
      <ItemList productosFetch={productosFetch}/>
      </>
    )
  }


