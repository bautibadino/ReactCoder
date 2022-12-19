import React from 'react'
import { useParams } from 'react-router-dom'
import {ipads} from '../../../public/data/Ipad.json'


export const SingleProduct = () => {

    const {productId} = useParams();
    const product = ipads.find((ipad) => ipad.id === productId)
    
    console.log(product);
    return (
    <div>hola  </div>
  )
}
