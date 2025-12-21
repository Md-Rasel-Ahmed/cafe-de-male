import React from "react";
import { Routes, Route } from "react-router";
import MainLayOut from "../Layouts/MainLayOut";
import Contact from "../pages/Contact";
import Menus from "../pages/Menus";
import Home from "../pages/home/Home";
import Dishes from "../pages/Menus/Dishes";
import AllDishes from "../pages/Menus/AllDishes";
import Desserts from "../pages/Menus/Desserts";
import Drinks from "../pages/Menus/Drinks";
import Reservetion from "../pages/Reservetion";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CheckOut from "../pages/CheckOut";
import OrderSumary from "../pages/OrderSumary";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayOut />}>
        <Route path="/" element={<Home></Home>} />
        <Route path="contact" element={<Contact></Contact>} />
        <Route path="/menus" element={<Menus></Menus>}>
          {/* <Route path="all-dishes" element={<AllDishes></AllDishes>} />
          <Route path="dishes" element={<Dishes></Dishes>} />
          <Route path="desserts" element={<Desserts></Desserts>} />
          <Route path="drinks" element={<Drinks></Drinks>} /> */}
        </Route>
        <Route
          path="/reservation"
          element={<Reservetion></Reservetion>}
        ></Route>
        <Route path="/chekout" element={<CheckOut></CheckOut>}></Route>
        <Route
          path="/ordersummary"
          element={<OrderSumary></OrderSumary>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Route>
    </Routes>
  );
}
