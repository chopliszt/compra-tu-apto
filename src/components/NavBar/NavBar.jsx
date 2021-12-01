import React from "react";
import NarvBarItem from "./NavBarItem/NarvBarItem";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div className="container-fluid">
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: `${props.colorDeNavBar}` }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.navBrandLeft}
          </Link>
          {/* <a className="navbar-brand" href="perspektiva360.com">
            {props.navBrandLeft}
          </a> */}
          {/* Seccion del boton de hamburguesa */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Fin de la seccion del boton de hamburguesa */}

          {/* Todo lo que hay desde aca se va a colapsar en la hamburguesa */}
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Aqui comienza el unordered list que hace el menu */}
            <ul className="navbar-nav">
              <NavLink to="/">
                <NarvBarItem
                  texto="Home"
                  aClase="nav-link active"
                  aHref="https://perspektiva360.com/"
                />
              </NavLink>
              <NarvBarItem
                texto="Boton1"
                aClase="nav-link"
                aHref="https://perspektiva360.com/?lang=en"
              />
              <NarvBarItem
                texto="Boton2"
                aClase="nav-link"
                aHref="https://perspektiva360.com/?lang=en"
              />
              {/* <NarvBarItem
                texto="Deshabilitado"
                aClase="nav-link disabled"
                aHref="https://perspektiva360.com/?lang=en"
              /> */}
            </ul>
            {/* este UL  se alinea derecha por clase ms-auto*/}
            <ul class="navbar-nav ms-auto">
              <CartWidget />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
