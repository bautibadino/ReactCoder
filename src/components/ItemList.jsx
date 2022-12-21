import React from 'react'
import { Item } from './Item'

export const ItemList = ({productosFetch}) => {

  return (
    <div className='contenedorPadre'>
      <div className='contenedor'>
            {productosFetch.map((producto) =>(
                <Item key={producto.id} producto= {producto} />
            ))}
      </div>
    </div>
  )

}
