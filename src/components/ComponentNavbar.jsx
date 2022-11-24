import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import { AiOutlineApple } from "react-icons/ai";
import { CartWidget } from "./CartWidget";
import { ItemListContainer } from "./ItemListContainer";



export const ComponentNavbar = () => {
  return (
    <header>

    <Navbar
      bg="black"
      variant="dark"
      fixed="top"
      className="text-white d-flex flex-row p-2 align-items-center navbar justify-content-between"
    >
      <div className="logo d-flex align-items-center justify-content-center">
        <a className="d-flex align-items-center justify-content-center text-white text-decoration-none" href="#inicio" >
          <AiOutlineApple size={"1.7em"} />
          MundoApple
        </a>
      </div>

      <div className="links d-flex align-items-center">
      <a href="#inicio" className="p-2 text-white text-decoration-none">
          Inicio
        </a>
        <a href="#iPhone" className="p-2 text-white text-decoration-none ">
          iPhone
        </a>
        <a href="Mac" className="p-2 text-white text-decoration-none ">
          Mac
        </a>
        <a href="iPad" className="p-2 text-white text-decoration-none  ">
          iPad
        </a>
      </div>

    <CartWidget/>

    </Navbar>
    </header>
    
  );
};
