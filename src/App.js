import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetail from "./components/ItemDetail/ItemDetail";

//todo lo necesario para el enrutamiento
import About from "./views/About";
import Contact from "./views/Contact";
import Error from "./views/Error";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App container">
        <NavBar colorDeNavBar="#e3f2fd" navBrandLeft="CompraTuAppto" />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail/:id" element={<ItemDetail />} />
          <Route
            path="/joyas"
            element={<ItemListContainer categoria="jewelery" />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
