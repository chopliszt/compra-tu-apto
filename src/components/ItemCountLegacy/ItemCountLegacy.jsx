import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ItemCount() {
  const [cantidadCompras, setCantidadCompras] = React.useState(5);
  const [cantidadAAgregar, setCantidadAAgregar] = React.useState(0);

  function handleInput(event) {
    const valorAAgregarORestar = event.target.value;
    setCantidadAAgregar(valorAAgregarORestar);
  }

  function onAdd(event) {
    //aqui tengo que decidir si lo que le pase viene de la casilla de agregar o si viene de la casilla restar
    //Se puede hacer el prevState
  }

  //onChange, onClick, value
  return (
    <div className="container">
      <div className="row mb-5 justify-content-center">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
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
          </CardContent>
          <CardActions>
            <div className="col ">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setCantidadCompras(cantidadCompras - cantidadAAgregar);
                }}
              >
                -
              </button>
              {/* <Button size="small" variant="outlined">
              +
            </Button> */}
              <div class="ui input">
                <input
                  type="text"
                  onChange={handleInput}
                  name="casillaDeItems"
                  placeholder="Agregar..."
                />
              </div>
              <button
                className="btn btn-primary"
                onClick={() => {
                  let compras2 = cantidadCompras + cantidadAAgregar;

                  setCantidadCompras(
                    parseInt(cantidadCompras) + parseInt(cantidadAAgregar)
                  );
                }}
              >
                +
              </button>
              {/* <Button size="small">-</Button> */}
            </div>
          </CardActions>
        </Card>
        <p>Total comprado: {cantidadCompras}</p>
      </div>
    </div>
  );
}
export const pruebaDeExportar = 1;
