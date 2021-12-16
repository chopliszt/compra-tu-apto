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
//Firebase, de firebaseConfig
import { db } from "./firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

function App() {
  //TEMPORAL- borrar pronto
  const [apartamentos, setApartamentos] = useState([]);

  console.log("apartamentos");
  console.log(apartamentos);
  useEffect(() => {
    console.log("trayendo los datos");
    const getAptos = async () => {
      const q = query(collection(db, "apartamentos"));
      const misDocumentos = []; //creo esta variable para luego sumarle a los datos, el ID
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        misDocumentos.push({ ...doc.data(), id: doc.id }); //para que tengan el id
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
      });
      setApartamentos(misDocumentos);
    };
    //la tengo que llamar para que se ejecute
    getAptos();
  }, []); //aqui hay que colocarle una variable normalmente, no olvide

  return (
    // <CartContext.Provider values={{ cantidadCompras, setCantidadCompras }}>
    //TEMPORAL borrar pronto
    <CartProvider>
      {/* esta parte estaba verificando que si estoy trayendo los datos desde Firebase */}
      {/* {apartamentos.map((documento) => {
        return (
          <div>
            <h1>Apartamento: {documento.proyecto}</h1>
            <h3>Ciudad: {documento.ciudad}</h3>
            <h3>Etapa: {documento.etapa}</h3>
          </div>
        );
      })} */}
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
    // </CartContext.Provider>
  );
}

export default App;
