import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import { AiOutlineApple } from "react-icons/ai";
import { CartWidget } from "./CartWidget";
import { Route, Link, Routes } from "react-router-dom";
import { IphonePage } from "../../pages/IphonePage";
import { Home } from "../../pages/Home";
import { MacPage } from "../../pages/MacPage";
import { IpadPage } from "../../pages/ipadPage/IpadPage";

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
            <Link to="/iPhone" className="p-2 text-white text-decoration-none ">
              iPhone
            </Link>
            <Link to="/Mac" className="p-2 text-white text-decoration-none ">
              Mac
            </Link>
            <Link to="/iPad" className="p-2 text-white text-decoration-none  ">
              iPad
            </Link>
          </div>

          <CartWidget />
        </Navbar>
      </header>

    <Routes>
      
      <Route path="/" element={<Home/>}/>

      <Route path="/iPhone" element={<IphonePage/>}/>

      <Route path="/Mac" element={<MacPage/>}/>

      <Route path="/iPad" element={<IpadPage/>}/>

      </Routes>
    
    </>

      
  );
};
