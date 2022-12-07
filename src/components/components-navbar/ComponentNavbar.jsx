import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import { AiOutlineApple } from "react-icons/ai";
import { CartWidget } from "./CartWidget";
import { ItemListContainer } from "./ItemListContainer";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

const Home = () => <h1>home page</h1>
const IphonePage = () => <h1>iph page</h1>
const IpadPage = () => <h1>ipad page</h1>
const MacPage = () => <h1>mac page</h1>

export const ComponentNavbar = () => {
  return (
    <BrowserRouter>
      <header>
        <Navbar
          bg="black"
          variant="dark"
          className="text-white d-flex flex-row p-2 align-items-center navbar justify-content-between"
        >
          <div className="logo d-f  lex align-items-center justify-content-center">
            <a
              className="d-flex align-items-center justify-content-center text-white text-decoration-none"
              href="#inicio"
            >
              <AiOutlineApple size={"1.7em"} />
              MundoApple
            </a>
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
      <Route path="/">
        <Home />
      </Route>

      <Route path="/iPhone">
        <IphonePage />
      </Route>

      <Route path="/Mac">
        <MacPage />
      </Route>

      <Route path="/iPad">
        <IpadPage />
      </Route>
      
      </Routes>

      
    </BrowserRouter>
  );
};
