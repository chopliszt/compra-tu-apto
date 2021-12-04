import React from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const fecha = new Date();
const [hora, minutos, segundos] = [
  fecha.getHours(),
  fecha.getMinutes(),
  fecha.getSeconds(),
];

const Home = () => {
  return (
    <div>
      <h1>
        {hora > 0 && hora < 12
          ? "Buenos dias querido comprador o compradora!"
          : hora > 12 && hora < 18
          ? "Buenas tardes querido comprador o compradora!"
          : "Buenas noches querido comprador o compradora!"}
      </h1>
      <h4>Esperamos compres muchas cosas bonitas de nuestra tienda</h4>
      <p>
        {hora}:{minutos}:{segundos}
      </p>
      <ItemListContainer categoria="electronics" />
      <ItemListContainer categoria="jewelery" />
      <ItemListContainer categoria="men's clothing" />
      <ItemListContainer categoria="women's clothing" />
    </div>
  );
};

export default Home;
