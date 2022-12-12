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
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  </>
  )
}
