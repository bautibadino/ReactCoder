import React from "react";
import {AiOutlineShoppingCart} from "react-icons/ai"
import "bootstrap/dist/css/bootstrap.min.css";


export const CartWidget = (props) => {


  return (
    <div className="d-flex justify-content-center flex-row align-items-center">
      <button  className="carrito d-flex justify-content-center flex-row align-items-center bg-transparent text-white ">
        <AiOutlineShoppingCart className="m-1" size={"1.5em"} />
      </button>
      <p className="mx-3">1</p>
    </div>

  );
};
