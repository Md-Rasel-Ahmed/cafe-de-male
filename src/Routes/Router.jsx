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
import PrivateRouter from "../Providers/PrivateRouter";
import Gallery from "../pages/Gallery";
import Dashboard from "../Admin/Dashboard";
import ManageUsers from "../Admin/ManageUsers";
import ManageItems from "../Admin/ManageItems";
import ManageOrders from "../Admin/ManageOrders";
import ManageReservation from "../Admin/ManageReservation";
import Orders from "../pages/Orders";
import Thank from "../pages/Thank";
import UserInfo from "../pages/UserInfo/UsersInfo";
import Profile from "../pages/UserInfo/Profile";
import Setting from "../pages/UserInfo/Setting";
import AdminRouter from "../Providers/AdminRouter";

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
          element={
            <PrivateRouter>
              <Reservetion></Reservetion>
            </PrivateRouter>
          }
        ></Route>
        <Route
          path="/chekout"
          element={
            <PrivateRouter>
              <CheckOut></CheckOut>
            </PrivateRouter>
          }
        ></Route>
        <Route
          path="/ordersummary"
          element={
            <PrivateRouter>
              <OrderSumary></OrderSumary>
            </PrivateRouter>
          }
        ></Route>
        <Route
          path="/thank"
          element={
            <PrivateRouter>
              <Thank></Thank>
            </PrivateRouter>
          }
        ></Route>
        <Route
          path="/orders"
          element={
            <PrivateRouter>
              <Orders></Orders>
            </PrivateRouter>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/gallery" element={<Gallery></Gallery>}></Route>
        <Route
          path="/profile"
          element={
            <PrivateRouter>
              <UserInfo></UserInfo>
            </PrivateRouter>
          }
        >
          <Route path="profile" element={<Profile></Profile>}></Route>
          <Route path="setting" element={<Setting></Setting>}></Route>
        </Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRouter>
              <AdminRouter>
                <Dashboard></Dashboard>
              </AdminRouter>
            </PrivateRouter>
          }
        >
          <Route
            path="manageusers"
            element={<ManageUsers></ManageUsers>}
          ></Route>
          <Route
            path="manageitems"
            element={<ManageItems></ManageItems>}
          ></Route>
          <Route
            path="manageorders"
            element={<ManageOrders></ManageOrders>}
          ></Route>
          <Route
            path="managereservation"
            element={<ManageReservation></ManageReservation>}
          ></Route>
        </Route>
      </Route>
    </Routes>
  );
}
