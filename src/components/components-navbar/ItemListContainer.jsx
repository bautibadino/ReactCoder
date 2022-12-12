import React, { useEffect, useState } from 'react';
import {ItemList} from '../../pages/IpadPage/ItemList'

export const ItemListContainer = () => {
  const [productosFetch, setProductosFetch] = useState([]);
  useEffect(() => {
    fetch('../data/Ipad.json')
      .then((res) => res.json())
      .then((data) => setProductosFetch(data.ipads))
      .catch((err) => console.log(err));
  }, []);
  console.log(productosFetch)
  return (
    <>
      <ItemList productosFetch={productosFetch} />
    </>
  );
};