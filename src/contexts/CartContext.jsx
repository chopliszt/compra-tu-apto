//son las dos cosas que necesito para crear el contexto
import { createContext, useState } from "react";
export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cantidadCompras, setCantidadCompras] = useState(0);
  const [itemsComprados, setItemsComprados] = useState([
    { id: 1232, name: "parrot", price: 123, quantity: 1 },
    { id: 1423, name: "parrot2", price: 321, quantity: 2 },
  ]);

  function alertar() {
    alert("hola parrot🦜");
  }

  //Para agregar productos, recibo el objeto
  function agregarProducto(objetoProducto, cantidadComprada) {
    setItemsComprados([
      {
        id: objetoProducto.id,
        name: objetoProducto.title,
        price: objetoProducto.price,
        quantity: cantidadCompras,
      },
      ...itemsComprados,
    ]);
    console.log(itemsComprados);
  }

  //revisa si lo que estoy agregando al carrito ya estaba
  function estaDuplicada(titulo) {
    const itemsEncontrados = itemsComprados.find(
      (item) => item.name === titulo
    );
    return typeof itemsEncontrados != "undefined" ? true : false;
  }
  //borra el carrito totalmente
  function borrarCarrito() {
    setItemsComprados([]);
  }

  //esta funcion elimina un item especifico del carrito del ItemDetail
  function eliminarItem(productID) {
    setItemsComprados(itemsComprados.filter((item) => item.id != productID));
  }

  return (
    <CartContext.Provider
      value={[
        //le estoy diciendo todos los estados que va a poder tener el contexto
        cantidadCompras,
        setCantidadCompras,
        itemsComprados,
        setItemsComprados,
        alertar,
        estaDuplicada,
        borrarCarrito,
        eliminarItem,
        agregarProducto,
      ]}
    >
      {children}
    </CartContext.Provider>
  );
};
