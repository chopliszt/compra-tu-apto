import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

//Este Item va a contener una tarjeta de cada elemento y va a recibir unas props de id, title, price, url
const Item = ({ id, title, price, pictureUrl }) => {
  return (
    <div class="container">
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
            <div className="col "></div>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default Item;
