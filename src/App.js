import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
// import CardTarjeta from "./components/CardTarjeta/CardTarjeta";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

//Obteniendo la hora del d[ia] para el saludo
const fecha = new Date();
const [hora, minutos, segundos] = [
  fecha.getHours(),
  fecha.getMinutes(),
  fecha.getSeconds(),
];

//Con Componentes
function App() {
  return (
    <div className="App container-fluid">
      <NavBar colorDeNavBar="#e3f2fd" navBrandLeft="CompraTuAppto" />
      {hora}:{minutos}:{segundos}
      <ItemListContainer
        greeting={
          hora > 0 && hora < 12
            ? "Buenos días!"
            : hora > 12 && hora < 18
            ? "Buenas tardes!"
            : "Buenas noches!"
        }
      />
    </div>
  );
}

export default App;
