import { Card, Button } from 'react-bootstrap';


export const Item = ({producto}) => {
    const {name, capacity, description, year, img,price} = producto;
  return (
    <> 
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
      <Card.Text className='price'>
        ${price}
      </Card.Text>
      <Button variant="primary">Comprar</Button>
      <Button variant="primary">Ver mas info</Button>
    </Card.Body>
  </Card>
  </>
  )
}
