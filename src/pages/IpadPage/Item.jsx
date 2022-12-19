import { Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'

export const Item = ({producto}) => {
    const {id, name, capacity, description, year, img,price} = producto;
  return (
    <> 
    <Card style={{ width: '18rem' }} key ={id}>
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
      <Card.Text className='price'>
        ${price}
      </Card.Text>
      <Button variant="primary"to=''>Comprar</Button>
      <Link to={`/iPad/{name}`}>Mas info</Link>
    </Card.Body>
  </Card>
  </>
  )
}
