import React from "react";
import OnlineOrders from "./../pages/OnlineOrders";
import { Link, NavLink, Outlet, useParams } from "react-router";
import { MdEventSeat, MdManageAccounts } from "react-icons/md";
import { FaBoxOpen, FaClipboardList, FaUsersCog } from "react-icons/fa";

export default function Dashboard() {
  const { params } = useParams();
  console.log(params);

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
            </svg>
          </label>
          <div className="px-4">Navbar Title</div>
        </nav>
        {/* Page content here */}
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
                data-tip="Homepage"
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
                data-tip="Settings"
              >
                {/* Settings icon */}
                <FaUsersCog size={25} />

                <span className="is-drawer-close:hidden">Manage Users</span>
              </button>
            </NavLink>
            <NavLink to={"manageitems"}>
              <button
                className="cursor-pointer is-drawer-close:tooltip is-drawer-close:tooltip-right border border-gray-400 p-1 flex items-center gap-2 text-lg font-bold rounded w-full"
                data-tip="Settings"
              >
                {/* Settings icon */}
                <FaBoxOpen size={25}></FaBoxOpen>
                <span className="is-drawer-close:hidden">Manage Items</span>
              </button>
            </NavLink>
            <NavLink to={"managereservation"}>
              <button
                className="cursor-pointer is-drawer-close:tooltip is-drawer-close:tooltip-right border border-gray-400 p-1 flex items-center gap-2 text-lg font-bold rounded w-full"
                data-tip="Settings"
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
