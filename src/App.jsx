import React from "react";
import { Form } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ComponentNavbar } from "./components/components-navbar/ComponentNavbar";
import { ItemListContainer } from "./components/ItemListContainer";
import { SingleProduct } from "./pages/IpadPage/SingleProduct";
// import { IpadPage } from "./pages/ipadPage/IpadPage";


export const App = () => {


  return (
    <BrowserRouter>
      <ComponentNavbar />
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/categorias/:id" element={<ItemListContainer/>}/>
        <Route path="/detalle/:id" element={<SingleProduct/>}/>
      </Routes>
    </BrowserRouter>
    
  );
};