import React from 'react'
import { Item } from './Item'

export const ItemList = ({productosFetch}) => {

  return (
    <div className='container'>
        <div className='d-flex justify-content- around'>
            {productosFetch.map((producto) =>(
                <Item key={producto.id} producto= {producto}/>

            ))}
        </div>
    </div>
  )

}
