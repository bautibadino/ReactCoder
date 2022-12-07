import React from "react";
import { Form } from "react-bootstrap";
import { ComponentNavbar } from "./components/components-navbar/ComponentNavbar";
import { ItemListContainer } from "./components/components-navbar/ItemListContainer";


export const App = () => {
  return (
    <>
      <ComponentNavbar />
      <ItemListContainer greeting={"hola, bienvenido a mi ecomerce"} />
    </>
  );
};
