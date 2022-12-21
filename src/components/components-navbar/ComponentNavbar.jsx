import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import { AiOutlineApple } from "react-icons/ai";
import { CartWidget } from "../CartWidget";
import { Link } from "react-router-dom";

export const ComponentNavbar = () => {
  return (
    <>
    
      <header>
        <Navbar
          bg="black"
          variant="dark"
          className="text-white d-flex flex-row p-2 align-items-center navbar justify-content-between"
        >
          <div className="logo d-f  lex align-items-center justify-content-center">
            <Link
              className="d-flex align-items-center justify-content-center text-white text-decoration-none"
              // to="/"
            >
              <AiOutlineApple size={"1.7em"} />
              MundoApple
            </Link>
          </div>

          <div className="links d-flex align-items-center">
            <Link to="/"  className="p-2 text-white text-decoration-none">
              Inicio
            </Link>
            <Link to="/categorias/iPhone" className="p-2 text-white text-decoration-none ">
              iPhone
            </Link>
            <Link to="/categorias/Mac" className="p-2 text-white text-decoration-none ">
              Mac
            </Link>
            <Link to="/categorias/iPad" className="p-2 text-white text-decoration-none  ">
              iPad
            </Link>
          </div>

          <CartWidget />
        </Navbar>
      </header>

    
    
    </>

      
  );
};