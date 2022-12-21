import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/products";

export const SingleProduct = () => {
    const [infoProduct, setInfoProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            resolve(products);
        });
        promesa
            .then((data) => setInfoProduct(data.find((ipad) => ipad.id === id)))
            .catch((err) => console.log(err));
    }, []);

    console.log(infoProduct);

    return <div>hola {id}</div>;
};