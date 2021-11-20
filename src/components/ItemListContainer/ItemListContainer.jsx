import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = (props) => {
  return (
    <div>
      <h1>{props.greeting}</h1>
      <ItemCount inicial={0} inventario={4} />
    </div>
  );
};

export default ItemListContainer;
