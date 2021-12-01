import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
// import CardTarjeta from "./components/CardTarjeta/CardTarjeta";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainter";
//todo lo necesario para el enrutamiento
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Error from "./views/Error";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

//Obteniendo la hora del d[ia] para el saludo
// const fecha = new Date();
// const [hora, minutos, segundos] = [
//   fecha.getHours(),
//   fecha.getMinutes(),
//   fecha.getSeconds(),
// ];

//Con Componentes
function App() {
  return (
    <Router>
      <div className="App container">
        <NavBar colorDeNavBar="#e3f2fd" navBrandLeft="CompraTuAppto" />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail/:id" element={<ItemDetail />} />
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

        {/* Esto deberia ir dentro de la ruta dle Home */}
        {/* <ItemDetailContainer /> */}
      </div>
    </Router>
  );
}

export default App;
