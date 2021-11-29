import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
// import CardTarjeta from "./components/CardTarjeta/CardTarjeta";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainter";
//todo lo necesario para el enrutamiento
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Error from "./views/Error";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

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
    <Router>
      <div className="App container">
        <NavBar colorDeNavBar="#e3f2fd" navBrandLeft="CompraTuAppto" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <ul>
          <NavLink className="me-3" to="/about">
            About
          </NavLink>
          <NavLink className="me-3" to="/contact">
            contact
          </NavLink>
          <NavLink className="me-3" to="/">
            home
          </NavLink>
        </ul>
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
        <ItemDetailContainer />
      </div>
    </Router>
  );
}

export default App;
