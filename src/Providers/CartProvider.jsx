import React, { createContext, useState } from "react";
export const CartProviderContext = createContext(null);
export default function CartProvider({ children }) {
  const [carts, setCarts] = useState([]);
  const [total, setTotal] = useState(0);
  const cartAdded = (menu) => {
    setCarts([...carts, menu]);
    const newTotal = total + parseFloat(menu.price);
    setTotal(newTotal);
  };
  //   delete cart
  const deleteCart = (id) => {
    const remaining = carts?.filter((cart) => cart.id !== id);
    setCarts(remaining);
  };
  const cartInfo = {
    cartAdded,
    carts,
    total,
    deleteCart,
  };
  return (
    <CartProviderContext.Provider value={cartInfo}>
      {children}
    </CartProviderContext.Provider>
  );
}
