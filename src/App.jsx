import React from "react";
import { ComponentNavbar } from "./components/ComponentNavbar"
import { ItemListContainer } from "./components/ItemListContainer";



export const App = () => {
  return (
    <>
  <ComponentNavbar/>
  <ItemListContainer

  greeting={'hola, bienvenido a mi ecomerce'}
  />
    </>
  );
};
