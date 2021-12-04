import React from "react";
import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Category = () => {
  const params = useParams();
  const categoria = params.category;

  //   console.log(`La categoria es ${categoria}`);

  return (
    <div>
      <ItemListContainer categoria={categoria} />
    </div>
  );
};

export default Category;
