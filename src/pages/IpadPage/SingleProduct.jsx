import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {ipads} from '../../../public/data/Ipad.json'


export const SingleProduct = () => {

    const [infoProduct, setInfoProduct] = useState([])
    const {id} = useParams();

    useEffect(() => {
      fetch("../data/Ipad.json")
          .then((res) => res.json())
          .then((data) => setInfoProduct(data.find((ipad) => ipad.id === parseInt(id))))
          .catch((err) => console.log(err));
  }, []);

    console.log(infoProduct)

    return (
    <div>
 
    </div>
  )
}