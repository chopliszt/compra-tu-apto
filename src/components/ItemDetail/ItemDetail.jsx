import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

//aqui debemos mostrardescripci[on],foto y precio

const ItemDetail = () => {
  let params = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    console.log(`https://api.github.com/users/${params.id}`);
    fetch(`https://api.github.com/users/${params.id}`)
      .then((response) => response.json())
      .then((json) => setUser(json));
    // .then((json) => console.log(user, "UseItemDetail"));
  }, []);

  console.log(user, "UseItemDetail");
  return (
    <>
      <div class="row mt-3">
        <col-12>
          <h2>{user ? user.name : "AquívaElNombre"}</h2>
        </col-12>
      </div>
      <div class="row mt-3">
        <div class="col-xs-12 col-lg-6">
          <img
            class="img-fluid"
            src="https://conexoinmobiliario.com/wp-content/uploads/2017/01/CL19106-HDR.jpg"
            alt=""
          />
        </div>
        <div class="col-xs-12 col-lg-6">
          <h4>
            Descripción <span class="badge bg-warning">Entrega Inmediata</span>
          </h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            perferendis ipsum eveniet quidem quas modi. Odit ea cupiditate rerum
            ab?
          </p>
          <p>
            <strong>Precio: 130 USD</strong>
          </p>
          <Link to="/">
            <button class="btn btn-primary">Regresar</button>
          </Link>
          <h4>Cantidad a comprar</h4>
          <ItemCount inventario={5} inicial={0} />
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
