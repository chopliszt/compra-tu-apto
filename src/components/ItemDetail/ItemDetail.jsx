import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
//importando el contexto
import { CartContext } from "../../contexts/CartContext";
//Firebase, de firebaseConfig
import { db } from "../../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const ItemDetail = () => {
  let params = useParams();
  const [product, setProduct] = useState();
  //el contexto
  const [
    cantidadCompras,
    setCantidadCompras,
    itemsComprados,
    setItemsComprados,
    alertar,
    estaDuplicada,
    borrarCarrito,
    eliminarItem,
    agregarProducto,
  ] = useContext(CartContext);

  // useEffect(() => {
  //   fetch(`https://fakestoreapi.com/products/${params.id}`)
  //     .then((response) => response.json())
  //     .then((json) => setProduct(json));
  // }, []);

  useEffect(() => {
    console.log("trayendo los datos en ItemDetail");
    const getAptos = async () => {
      const q = query(
        collection(db, "apartamentos"),
        where("id", "==", `${params.id}`)
      );
      const misDocumentos = []; //creo esta variable para luego sumarle a los datos, el ID
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        misDocumentos.push({ ...doc.data(), id: doc.id }); //para que tengan el id
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
      });
      setProduct(misDocumentos);
      console.log(product);
    };
    //la tengo que llamar para que se ejecute
    getAptos();
  }, []); //aqui hay que colocarle una variable normalmente, no olvide

  // useEffect(() => {
  //   //const db = getFirestore();
  //   const itemCollection = db.collection("apartamentos");
  //   const firebaseItem = itemCollection.doc("SnWPII0BN73yMIPw0Qck");

  //   firebaseItem
  //     .get()
  //     .then((doc) => {
  //       if (doc.exists) setProduct({ id: doc.id, ...doc.data() });
  //     })
  //     .finally(() => {
  //       // setLoading(false);
  //       console.log("Esto viene despu[es del finally");
  //     });
  // }, []); //[id]

  return (
    <>
      <div class="row mt-3">
        <col-12>
          <h2>
            {product ? product.proyecto : "Título de artículo"}
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
              Precio: US${product ? product.price : "precio"}
              <span class="badge bg-warning">Entrega Inmediata</span>
            </strong>
          </p>
          <h4>Cantidad a comprar</h4>
          <h4>Cantidad comprada temporal {cantidadCompras}</h4>
          <ItemCount inventario={5} inicial={0} />
          <Link to="/cart">
            <button
              className="btn btn-warning me-2"
              onClick={() => {
                //faltaria implementar que lo que compre sea mayor a 0
                estaDuplicada(product.title) == false
                  ? agregarProducto(product, cantidadCompras)
                  : alert("Está repetido!");
              }}
            >
              Compraaar Ir al Carrito!
            </button>
          </Link>
          <button
            className="btn btn-success me-1"
            onClick={() => {
              borrarCarrito();
            }}
          >
            Borrar todo
          </button>
          <button
            className="btn btn-success me-1"
            onClick={() => {
              eliminarItem(product.id);
            }}
          >
            Borrar este producto
          </button>
          {/* </Link> */}
          <Link to="/">
            <button class="btn btn-info">Regresar</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
