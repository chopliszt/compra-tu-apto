import React from "react";

//aqui debemos mostrardescripci[on],foto y precio

const ItemDetail = () => {
  return (
    <>
      <div class="row mt-3">
        <col-12>
          <h2>Título de mi producto</h2>
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
          <button class="btn btn-primary">Regresar</button>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
