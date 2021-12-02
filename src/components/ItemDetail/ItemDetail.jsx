import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = () => {
  let params = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    console.log(`https://fakestoreapi.com/products/${params.id}`);
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((response) => response.json())
      .then((json) => setProduct(json));
  }, []);

  return (
    <>
      <div class="row mt-3">
        <col-12>
          <h2>
            {product ? product.title : "Título de artículo"}{" "}
            <span class="badge bg-primary">
              {product ? product.category : null}
            </span>
          </h2>
        </col-12>
      </div>
      <div class="row mt-3">
        <div class="col-xs-12 col-lg-6">
          <img class="img-fluid" src={product ? product.image : null} alt="" />
        </div>
        <div class="col-xs-12 col-lg-6">
          <h4>Descripción</h4>
          <p>{product ? product.description : "Descripción"}</p>
          <p>
            <strong>Categoría: {product ? product.category : null}</strong>
          </p>
          <p>
            <strong>
              Precio: {product ? product.price : "precio"}{" "}
              <span class="badge bg-warning">Entrega Inmediata</span>
            </strong>
          </p>
          <h4>Cantidad a comprar</h4>
          <ItemCount inventario={5} inicial={0} />
          <Link to="/">
            <button class="btn btn-info">Regresar</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
