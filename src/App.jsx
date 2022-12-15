import React from "react";
import { Form } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ComponentNavbar } from "./components/components-navbar/ComponentNavbar";
import { ItemListContainer } from "./components/components-navbar/ItemListContainer";
// import { IpadPage } from "./pages/ipadPage/IpadPage";


export const App = () => {
  return (
    <BrowserRouter>
      <ComponentNavbar />
      <Routes>
        <Route path="/iPad" element={<ItemListContainer/>}/>
        <Route path="/" element={'home page'}/>
        <Route path="/Mac" element={'mac page'}/>
        <Route path="/iPhone" element={'iphone page'}/>
      </Routes>
    </BrowserRouter>
    
  );
};