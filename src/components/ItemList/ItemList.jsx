import React from "react";
import Item from "../Item/Item";

const ItemList = ({ ItemsAEnviar }) => {
  console.log(ItemsAEnviar, "items que llegan hoy miercoles2");
  return (
    <>
      {ItemsAEnviar.map((item, index) => {
        return (
          <>
            <Item
              key={item.id}
              id={item.id}
              title={item.proyecto}
              price={item.valor}
              pictureUrl={item.img}
            />
          </>
        );
      })}
    </>
  );
};

export default ItemList;
