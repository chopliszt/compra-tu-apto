import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart";
import ItemDetail from "./components/ItemDetail/ItemDetail";
//todo lo necesario para el enrutamiento
import About from "./views/About";
import Contact from "./views/Contact";
import Error from "./views/Error";
import Home from "./views/Home";
import Category from "./views/Category";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//los contextos
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App container">
          <NavBar colorDeNavBar="#e3f2fd" navBrandLeft="MyLittleShop 🎁" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route exact path="/detail/:id" element={<ItemDetail />} />
            <Route path="/category/:category" element={<Category />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
