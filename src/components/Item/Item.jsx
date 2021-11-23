import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
//row justify-content-between o center d-inline-flex
//Este Item va a contener una tarjeta de cada elemento y va a recibir unas props de id, title, price, url
const Item = ({ id, title, price, pictureUrl }) => {
  return (
    // <div class="container"> ELIMINADO PORQUE YA ESTA DENTRO DE CONTAINER TODO
    //row justify-content-between o center d-inline-flex
    <div className="row mb-5 me-3 d-inline-flex">
      <div className="col">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={pictureUrl}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              El precio del artículo es: {price}
            </Typography>
          </CardContent>
          <CardActions>
            <div className="col "></div>
          </CardActions>
        </Card>
      </div>
    </div>
    // </div>
  );
};

export default Item;
