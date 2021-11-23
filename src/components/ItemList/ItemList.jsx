import React, { useState } from "react";
import Item from "../Item/Item";

const ItemList = ({ ItemsAEnviar }) => {
  console.log(ItemsAEnviar, "ItemList");
  return (
    <div>
      {/* {ItemsAEnviar.map((item) => {
        return <Item key={item.id} item={item} />;
      })} */}
      {/* <Item /> */}
    </div>
  );
};

export default ItemList;
