import React, { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";

// const items2 = [
//   {
//     id: 1,
//     title: "Aloe vera & neem hair cleanser (200ml)",
//     price: 100,
//     pictureUrl:
//       "https://www.ayurvedabay.com/media/catalog/product/cache/1/image/988x988/9df78eab33525d08d6e5fb8d27136e95/f/o/forest-essentials-aloe-vera-_-neem-hair-cleanser.jpg",
//   },
//   {
//     id: 2,
//     title: "Aloe vera & neem hair conditioner (200ml)",
//     price: 150,
//     pictureUrl:
//       "https://mliucwkxxnyr.i.optimole.com/B5ND7_w-ptHCS-wA/w:auto/h:auto/q:auto/https://jolpari.com/wp-content/uploads/2021/03/AVNHC200ml_aloeveraneemconditioner1.jpg",
//   },
//   {
//     id: 3,
//     title: "Hair vitalizer bhringraj (130ml)",
//     price: 200,
//     pictureUrl: "https://m.media-amazon.com/images/I/612eEAWy9yL._SL1500_.jpg",
//   },
// ];

const ItemListContainer = (props) => {
  //creando el state para traer los datos desde la API
  const [items, setItems] = useState([]);

  //trayendo los datos de la API
  fetch("https://jsonplaceholder.typicode.com/todos/")
    .then((response) => response.json())
    .then((json) => setItems(json))
    .then(console.log(items, "ItemListContainer"));
  // .catch(error => {
  //   this.setState({ errorMessage: error.toString() });
  //   console.error('There was an error!', error);

  // useEffect(() => {}, []);

  return (
    <div>
      {/* {items2.map((item) => {
        return <h1>item</h1>;
      })} */}
      <h1>
        {/* el arreglo de items no me funciona y tampoco puedo usar items.lenght */}
        {/* {props.greeting} la cantidad de elementos es {items[2].id} */}
      </h1>
      <ItemList itemsAEnviar={items} />
      <ItemCount inicial={0} inventario={4} />
    </div>
  );
};

export default ItemListContainer;
