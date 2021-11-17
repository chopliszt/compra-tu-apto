import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ItemCount() {
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
              Apartamento 1
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
                  alert("Funciona!");
                }}
              >
                -
              </button>
              {/* <Button size="small" variant="outlined">
              +
            </Button> */}
              <div class="ui input">
                <input type="text" placeholder="Agregar..." />
              </div>
              <button className="btn btn-primary">+</button>
              {/* <Button size="small">-</Button> */}
            </div>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
