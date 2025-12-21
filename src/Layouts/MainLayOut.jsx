import React from "react";
import Navbar from "../pages/home/Navbar";
import { Outlet } from "react-router";
import Footer from "../pages/home/Footer";
import HomeBanner from "../pages/home/HomeBanner";
import Home from "../pages/home/Home";
import { ToastContainer } from "react-toastify";

export default function MainLayOut() {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="pt-16">
        <Outlet />
      </div>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}
