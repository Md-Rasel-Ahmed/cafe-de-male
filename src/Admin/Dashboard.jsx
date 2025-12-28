import React from "react";
import OnlineOrders from "./../pages/OnlineOrders";
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router";
import {
  MdEventSeat,
  MdManageAccounts,
  MdOutlineMenuOpen,
} from "react-icons/md";
import { FaBoxOpen, FaClipboardList, FaUsersCog } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Dashboard() {
  const location = useLocation();
  console.log(location);

  return (
    // <div>
    //   <h1 className="text-2xl font-bold text-center py-5">Dashboard</h1>

    //   <div className="flex">
    //     {/* left bar */}
    //     <div className="w-60">
    //       <ul className="flex flex-col gap-2">
    //         <Link to={"/manageorders"} className="bg-secondary p-2 rounded">Manage Orders</Link>
    //         <Link to={"/manageorders"} className="bg-secondary p-2 rounded">Manage Orders</Link>
    //         <Link to={"/manageorders"} className="bg-secondary p-2 rounded">Manage Orders</Link>
    //         <Link to={"/manageorders"} className="bg-secondary p-2 rounded">Manage Orders</Link>
    //         <Link to={"/manageorders"} className="bg-secondary p-2 rounded">Manage Orders</Link>

    //       </ul>
    //     </div>
    //     {/* MAIN CONTENT */}
    //     <div className="bg-red-500 w-full">
    //       <h2>Content</h2>
    //     </div>
    //   </div>
    // </div>
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-300">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            {/* Sidebar toggle icon */}
            <MdOutlineMenuOpen size={32} />
          </label>
          <div className="px-4">{location.pathname}</div>
        </nav>
        {/* Page content here */}
        {location.pathname === "/dashboard" && (
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center text-4xl font-bold my-10"
          >
            WELCOME TO YOUR DASHBOARD!
          </motion.h1>
        )}

        <Outlet></Outlet>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col  bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu sidebar_menus w-full grow gap-3  md:mt-0 mt-15">
            {/* List item */}
            <NavLink to={"manageorders"}>
              <button
                className="cursor-pointer is-drawer-close:tooltip is-drawer-close:tooltip-right border border-gray-400 p-1 flex items-center gap-2 text-lg font-bold rounded w-full"
                data-tip="Manage Orders"
              >
                {/* Home icon */}
                <FaClipboardList size={25}></FaClipboardList>
                <span className="is-drawer-close:hidden">Manage Order</span>
              </button>
            </NavLink>

            {/* List item */}
            <NavLink to={"manageusers"}>
              <button
                className=" cursor-pointer is-drawer-close:tooltip is-drawer-close:tooltip-right border border-gray-400 p-1 flex items-center gap-2 text-lg font-bold rounded w-full"
                data-tip="Manage Users"
              >
                {/* Settings icon */}
                <FaUsersCog size={25} />

                <span className="is-drawer-close:hidden">Manage Users</span>
              </button>
            </NavLink>
            <NavLink to={"manageitems"}>
              <button
                className="cursor-pointer is-drawer-close:tooltip is-drawer-close:tooltip-right border border-gray-400 p-1 flex items-center gap-2 text-lg font-bold rounded w-full"
                data-tip="Manage Items"
              >
                {/* Settings icon */}
                <FaBoxOpen size={25}></FaBoxOpen>
                <span className="is-drawer-close:hidden">Manage Items</span>
              </button>
            </NavLink>
            <NavLink to={"managereservation"}>
              <button
                className="cursor-pointer is-drawer-close:tooltip is-drawer-close:tooltip-right border border-gray-400 p-1 flex items-center gap-2 text-lg font-bold rounded w-full"
                data-tip="Manage Reservation"
              >
                {/* Settings icon */}
                <MdEventSeat size={25}></MdEventSeat>
                <span className="is-drawer-close:hidden">
                  Manage Reservation
                </span>
              </button>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}
