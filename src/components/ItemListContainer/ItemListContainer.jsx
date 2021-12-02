import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

const fecha = new Date();
const [hora, minutos, segundos] = [
  fecha.getHours(),
  fecha.getMinutes(),
  fecha.getSeconds(),
];

const ItemListContainer = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://fakestoreapi.com/products/")
        .then((response) => response.json())
        .then((json) => setUsers(json));
    }, 0);
  }, []);

  return (
    <div>
      <h1> {props.greeting}</h1>
      <h1>
        {hora > 0 && hora < 12
          ? "Buenos dias querido comprador o compradora!"
          : hora > 12 && hora < 18
          ? "Buenasn tardes querido comprador o compradora!"
          : "Buenasn noches querido comprador o compradora!"}
      </h1>
      <p>Esperamos compres muchas cosas bonitas de nuestra tienda</p>
      <div>
        <ItemList ItemsAEnviar={users} />
      </div>
    </div>
  );
};

export default ItemListContainer;
