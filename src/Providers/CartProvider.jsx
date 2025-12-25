import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "./AuthProvider";
import moment from "moment";
export const CartProviderContext = createContext(null);
export default function CartProvider({ children }) {
  const { user } = useContext(AuthContext);
  const [carts, setCarts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState(0);
  const cartAdded = (menu) => {
    const id = menu.id;
    const findItem = carts.find((cart) => cart.id == id);
    if (findItem) return toast.error("The food already exited!");
    setCarts([...carts, menu]);
    const newTotal = total + parseFloat(menu.price);
    setTotal(newTotal);
    toast.success(`${menu.name} Added To Cart!`);
  };
  //   delete cart
  const deleteCart = (id) => {
    const findItems = carts.find((cart) => cart.id === id);
    const remaining = carts?.filter((cart) => cart.id !== id);
    const findItemTotalPrice = findItems.price * findItems.quantity;
    const newTotal = total - findItemTotalPrice;
    // console.log(findIItems.quantity*price);

    setTotal(newTotal);
    setCarts(remaining);
  };
  // inress price
  const incress = (id) => {
    const findIItems = carts.find((cart) => cart.id === id);
    findIItems.quantity = findIItems.quantity + 1;
    setCarts([...carts]);
    const newTotal = total + parseFloat(findIItems.price);
    setTotal(newTotal);
    // console.log(total);
  };
  // order added
  const orderAdd = () => {
    const items = [];
    for (const cart of carts) {
      items.push({ name: cart.name, qty: cart.quantity });
    }
    const newOrder = {
      orderId: Math.floor(Math.random() * 100000),
      id: 1,
      date: moment().format("MMMM Do YYYY, h:mm:ss a"),
      items: items,
      total: total,
      status: "Pending",
      email: user?.email,
    };
    setOrders([...orders, newOrder]);
    fetch(
      "https://cafe-de-male-server-msxdx3d8j-md-rasel-ahmeds-projects.vercel.app/orders",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newOrder),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setCarts([]);
        }
      });
  };

  const cartInfo = {
    cartAdded,
    carts,
    total,
    deleteCart,
    incress,
    orderAdd,
    orders,
  };
  return (
    <CartProviderContext.Provider value={cartInfo}>
      {children}
    </CartProviderContext.Provider>
  );
}
