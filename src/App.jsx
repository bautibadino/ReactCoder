import React from "react";
import { Form } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import { ComponentNavbar } from "./components/components-navbar/ComponentNavbar";
import { ItemListContainer } from "./components/components-navbar/ItemListContainer";
import { IpadPage } from "./pages/ipadPage/IpadPage";


export const App = () => {
  return (
    <BrowserRouter>
    
    <ComponentNavbar />
    
    </BrowserRouter>
    
  );
};
