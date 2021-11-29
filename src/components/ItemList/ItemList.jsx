import React, { useState } from "react";
import Item from "../Item/Item";

const ItemList = ({ ItemsAEnviar }) => {
  return (
    <>
      {ItemsAEnviar.map((item, index) => {
        return index < 5 ? (
          <Item
            key={item.id}
            title={item.login}
            price={item.id}
            pictureUrl={item.avatar_url}
          />
        ) : null;
      })}
    </>
  );
};

export default ItemList;
