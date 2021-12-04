import React from "react";
import Item from "../Item/Item";

const ItemList = ({ ItemsAEnviar }) => {
  return (
    <>
      {ItemsAEnviar.map((item, index) => {
        return index < 15 ? (
          <Item
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            pictureUrl={item.image}
          />
        ) : null;
      })}
    </>
  );
};

export default ItemList;
