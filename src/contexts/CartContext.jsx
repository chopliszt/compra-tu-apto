//son las dos cosas que necesito para crear el contexto
import { createContext, useState } from "react";
export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cantidadCompras, setCantidadCompras] = useState(2);
  return (
    <CartContext.Provider value={[cantidadCompras, setCantidadCompras]}>
      {children}
    </CartContext.Provider>
  );
};
