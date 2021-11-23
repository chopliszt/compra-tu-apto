import React, { useState, useEffect } from "react";
// import Item from "../Item/Item";
// import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      console.log("Esperando 3 segundos");
      fetch("https://api.github.com/users")
        .then((response) => response.json())
        .then((json) => setUsers(json));
    }, 3000);
  }, []);

  return (
    <div>
      <h1> {props.greeting}</h1>
      <div>
        <ItemList ItemsAEnviar={users} />
      </div>
    </div>
  );
};

export default ItemListContainer;
