import React from "react";
import OnlineOrders from "../OnlineOrders";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import { MdEventSeat, MdManageAccounts } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoIosSettings } from "react-icons/io";

import { motion } from "framer-motion";

export default function UserInfo() {
  const location = useLocation();
  console.log(location);

  return (
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="my-1.5 inline-block size-4"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M9 4v16"></path>
              <path d="M14 10l2 2l-2 2"></path>
            </svg>{" "}
          </label>
          <div className="px-4">{location.pathname}</div>
        </nav>
        {/* Page content here */}
        {location.pathname === "/dashboard" && (
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center text-4xl font-bold mt-10"
          >
            WELCOME TO YOUR PROFILE!
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
            <NavLink to={"profile"}>
              <button
                className="cursor-pointer is-drawer-close:tooltip is-drawer-close:tooltip-right border border-gray-400 p-1 flex items-center gap-2 text-lg font-bold rounded w-full"
                data-tip="Profile"
              >
                {/* Home icon */}
                <CgProfile size={25}></CgProfile>
                <span className="is-drawer-close:hidden">Profile</span>
              </button>
            </NavLink>

            {/* List item */}
            <NavLink to={"setting"}>
              <button
                className=" cursor-pointer is-drawer-close:tooltip is-drawer-close:tooltip-right border border-gray-400 p-1 flex items-center gap-2 text-lg font-bold rounded w-full"
                data-tip="setting"
              >
                {/* Settings icon */}
                <IoIosSettings size={25} />

                <span className="is-drawer-close:hidden">Setting</span>
              </button>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}
