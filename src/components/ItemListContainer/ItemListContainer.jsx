import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch(`https://fakestoreapi.com/products/category/${props.categoria}`)
        .then((response) => response.json())
        .then((json) => setUsers(json));
    }, 0);
  }, [props.categoria]); //esto me causaba muchos errores!!! no tenia el props.categoria

  return (
    <div>
      <div>
        <ItemList ItemsAEnviar={users} />
      </div>
    </div>
  );
};

export default ItemListContainer;
