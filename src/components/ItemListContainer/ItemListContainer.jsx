import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
//Firebase, de firebaseConfig
import { db } from "../../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const ItemListContainer = (props) => {
  const [propiedades, setPropiedades] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     fetch(`https://fakestoreapi.com/products/category/${props.categoria}`)
  //       .then((response) => response.json())
  //       .then((json) => setPropiedades(json));
  //   }, 0);
  // }, [props.categoria]); //esto me causaba muchos errores!!! no tenia el props.categoria

  useEffect(() => {
    let isCancelled = false;
    console.log("trayendo los datos en USeeffect");
    const getAptos = async () => {
      console.log("tratyendo en getAptos");
      const q = query(collection(db, "apartamentos"));
      const misDocumentos = []; //creo esta variable para luego sumarle a los datos, el ID
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        misDocumentos.push({ ...doc.data(), id: doc.id }); //para que tengan el id
      });
      setPropiedades(misDocumentos);
    };
    getAptos();
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []); //aqui hay que colocarle una variable normalmente, no olvide

  // useEffect(() => {
  //   console.log("prueba de ejecici[on useEffect");
  // }, []);

  return (
    <>
      {isLoading ? (
        <h1>Cargando propiedad de tus sueños...</h1>
      ) : (
        <div>
          <ItemList ItemsAEnviar={propiedades} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
