import React, { Component, Fragment, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import CardTarjeta from "./components/CardTarjeta/CardTarjeta";
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
  //La cantidad de tarjetas a pintar
  const [tarjetas, setTarjetas] = useState([
    {
      nombre: "mateo",
      descripcion: "Musico",
    },
    {
      nombre: "Camilo",
      descripcion: "Salsa Dancer",
    },
    {
      nombre: "Gaby",
      descripcion: "Model and Animal lover",
    },
    {
      nombre: "Gaby2",
      descripcion: "Model and Animal lover",
    },
  ]);
  return (
    <div className="App">
      <NavBar colorDeNavBar="#e3f2fd" navBrandLeft="CompraTuAppto" />
      <ItemListContainer
        greeting={
          hora > 0 && hora < 12
            ? "Buenos días!"
            : hora > 12 && hora < 18
            ? "Buenas tardes!"
            : hora > 18 && hora < 24
            ? "Buenas noches!"
            : null
        }
      />
      <div className="row justify-content-between d-inline-flex">
        {tarjetas.map((tarjeta) => {
          return (
            <div className="col">
              <CardTarjeta
                name={tarjeta.nombre}
                description={tarjeta.descripcion}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

//Con Clases
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <NavBar colorDeNavBar="#e3f2fd" navBrandLeft="CompraTuAppto" />
//         <h1>Este es mi contenido dentro de App.jsx con Clases</h1>
//       </div>
//     );
//   }
// }

export default App;
