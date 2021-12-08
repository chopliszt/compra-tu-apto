import * as React from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
import Alerta from "../Alerta/Alerta";
//los contextos
import { CartContext } from "../../contexts/CartContext";

export default function ItemCount({ inventario, inicial }) {
  //const [cantidadCompras, setCantidadCompras] = React.useState(inicial);
  const [cantidadCompras, setCantidadCompras] = React.useContext(CartContext);
  const [hayAlertaDeInventario, setHayAlertaDeInventario] =
    React.useState(false);
  const [irACarrito, setIrACarrito] = React.useState(false);
  //nuevo hook segun lo que el usuario quiera ingresar
  // const [cantidadAAgregar, setCantidadAAgregar] = React.useState(0);

  // function handleInput(event) {
  //   const valorAAgregarORestar = event.target.value;
  //   setCantidadAAgregar(valorAAgregarORestar);
  // }

  return (
    <div className="container">
      <div>
        {hayAlertaDeInventario && <Alerta mensaje="No hay suficiente Stock" />}
      </div>
      <div className="row mb-5 justify-content-center">
        {/* <Card sx={{ maxWidth: 345 }}> */}
        {/* <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="/juan camilo1.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Artículo 1
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, deserunt! Itaque doloribus perspiciatis provident
              ducimus!
            </Typography>
          </CardContent> */}
        {/* <CardActions> */}
        {/* <div className="col ">
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
            </div> */}
        {/* </CardActions> */}
        {/* </Card> */}
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
          {/* 0Confirmar {cantidadCompras} items */}
        </button>
      </div>
    </div>
  );
}
