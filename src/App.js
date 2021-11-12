import React, { Component, Fragment } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";

//Con Componentes
// function App() {
//   return (
//     <div className="App">
//       <NavBar colorDeNavBar="#e3f2fd" navBrandLeft="CompraTuAppto" />
//       <h1>Este es mi contenido dentro de App.jsx con componentes</h1>
//     </div>
//   );
// }

//Con Clases
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar colorDeNavBar="#e3f2fd" navBrandLeft="CompraTuAppto" />
        <h1>Este es mi contenido dentro de App.jsx con Clases</h1>
      </div>
    );
  }
}

export default App;
