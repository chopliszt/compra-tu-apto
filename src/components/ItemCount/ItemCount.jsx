import * as React from "react";
import Alerta from "../Alerta/Alerta";
// import { Link } from "react-router-dom";
//los contextos
import { CartContext } from "../../contexts/CartContext";

export default function ItemCount({ inventario, inicial }) {
  //const [cantidadCompras, setCantidadCompras] = React.useState(inicial);
  const [cantidadCompras, setCantidadCompras] = React.useContext(CartContext);
  const [hayAlertaDeInventario, setHayAlertaDeInventario] =
    React.useState(false);
  const [irACarrito, setIrACarrito] = React.useState(false);

  return (
    <div className="container">
      <div>
        {hayAlertaDeInventario && <Alerta mensaje="No hay suficiente Stock" />}
      </div>
      <div className="row mb-5 justify-content-center">
        <div className="col ">
          <button
            className="btn btn-primary"
            onClick={() => {
              const resta = cantidadCompras - 1;
              resta < 0
                ? setCantidadCompras(0)
                : setCantidadCompras(cantidadCompras - 1);
            }}
          >
            -
          </button>

          <div class="ui input">
            <input
              type="text"
              //   onChange={handleInput}
              name="casillaDeItems"
              placeholder="Input Desabilitado"
            />
          </div>
          <button
            className="btn btn-primary"
            onClick={() => {
              const suma = parseInt(cantidadCompras) + 1;
              suma > inventario
                ? setHayAlertaDeInventario(true)
                : setCantidadCompras(parseInt(cantidadCompras) + 1);
            }}
          >
            +
          </button>
        </div>
        <p>({inventario} Disponibles)</p>
        <p>Has comprado: {cantidadCompras} items!</p>
        <button
          className="btn btn-primary"
          onClick={() => {
            setIrACarrito(true);
          }}
        >
          {irACarrito ? "ir a carrito!" : "confirmar items"}
        </button>
        {/* <Link to="/cart">
          <button className="btn btn-dark mt-2">Compraaarrrr</button>
        </Link> */}
      </div>
    </div>
  );
}
