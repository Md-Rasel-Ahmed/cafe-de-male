import { use, useContext, useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { CartProviderContext } from "../../Providers/CartProvider";
import { AuthContext } from "../../Providers/AuthProvider";
import { MdOutlineMarkEmailRead } from "react-icons/md";

import {
  IoMailUnreadSharp,
  IoNotificationsCircleSharp,
  IoNotificationsOff,
} from "react-icons/io5";
import {
  collection,
  addDoc,
  query,
  onSnapshot,
  updateDoc,
  doc,
  deleteDoc,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { toast } from "react-toastify";
import moment from "moment/moment";
import { firestore } from "../../../firebase.init";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [notifications, setNotifications] = useState([]);
  const { carts, lsCarts } = useContext(CartProviderContext);

  const [scrollUpDistance, setScrollUpDistance] = useState(0);

  const { user, logOutUser, isAdmin } = useContext(AuthContext);
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY === 0) {
      setShowNavbar(true);
      setScrollUpDistance(0);
      setLastScrollY(0);
      return;
    }
    if (currentScrollY < lastScrollY) {
      // scrolling UP
      const diff = lastScrollY - currentScrollY;
      setScrollUpDistance((prev) => prev + diff);

      if (scrollUpDistance + diff >= 100) {
        setShowNavbar(false);
      }
    } else {
      // scrolling DOWN
      setShowNavbar(true);
      setScrollUpDistance(0); // reset
    }

    setLastScrollY(currentScrollY);
  };
  const notificationsRef = collection(firestore, "notifications");
  const notificationsQuery = query(
    notificationsRef,
    orderBy("createdAt", "desc")
  );
  // Real-time listener
  useEffect(() => {
    const unsubscribe = onSnapshot(notificationsQuery, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNotifications(data);
    });

    return () => unsubscribe();
  }, [notificationsQuery]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const totalPrice = carts.reduce((total, item) => total + item.price, 0);
  // logut user
  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        // Sign-out successful.
        toast.success("Logout Successed!");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  // console.log(lsCarts);

  // handle unread sms
  const handleUnReadMessage = async (id) => {
    const docRef = doc(firestore, "notifications", id);
    await updateDoc(docRef, { read: true });
  };
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  transition-transform duration-300
      ${showNavbar ? "translate-y-0 " : "-translate-y-full"}`}
    >
      <div className="navbar bg-base-100 shadow-md px-4">
        {/* Left */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden  hover:bg-primary  "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="text-xl ">
                <NavLink className={"text-2xl"} to="/">
                  Home
                </NavLink>
              </li>
              <li className="text-xl">
                <NavLink className={"text-2xl"} to="/menus">
                  Menu
                </NavLink>
              </li>
              {user?.email && (
                <li className="text-xl">
                  <NavLink className={"text-2xl"} to="/orders">
                    Orders
                  </NavLink>
                </li>
              )}
              <li className="text-xl">
                <NavLink className={"text-2xl"} to="/reservation">
                  Reservation
                </NavLink>
              </li>
              <li className="text-xl">
                <NavLink className={"text-2xl"} to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="text-xl">
                <NavLink className={"text-2xl"} to="/gallery">
                  Gallery
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Logo */}

          <Link to="/" className="lg:text-2xl text-xl font-bold text-primary">
            Cafe De <span className="text-secondary">Male</span>
          </Link>
        </div>

        {/* Center (Desktop Menu) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium">
            <li className="text-xl ">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-xl">
              <NavLink to="/menus">Menu</NavLink>
            </li>
            <li className="text-xl">
              <NavLink to="/reservation">Reservation</NavLink>
            </li>
            {user?.email && (
              <li className="text-xl">
                <NavLink to="/orders">Orders</NavLink>
              </li>
            )}
            <li className="text-xl">
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li className="text-xl ">
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end gap-3">
          {/* notifications */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle  hover:bg-primary rounded-2xl "
            >
              <div className="indicator  ">
                <IoNotificationsCircleSharp
                  size={36}
                ></IoNotificationsCircleSharp>
                {/* <span className="badge badge-sm indicator-item bg-primary">
                  {notifications?.filter((noti) => noti.read === false).length}
                </span> */}
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-primary z-1 mt-3 w-80 shadow"
            >
              <div className="card-body">
                {notifications?.length <= 0 ? (
                  <div className="flex flex-col justify-center items-center gap-2">
                    <IoNotificationsOff size={70} />
                    <h1>No Notificatons for you</h1>
                  </div>
                ) : (
                  <div>
                    <h1 className="text-bold text-center">Notifications</h1>
                    <ul>
                      {notifications?.map((noti) => (
                        <div className="p-1 mt-2   bg-gray-300 rounded">
                          <p className="text-primary text-sm">
                            {moment(
                              noti?.createdAt?.toDate().toLocaleString()
                            ).fromNow()}
                          </p>
                          <li className=" text-base-300 flex justify-between items-center  ">
                            <span className="font-bold text-sm">
                              {noti.message}
                            </span>
                          </li>
                        </div>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Cart */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle  hover:bg-primary rounded-2xl "
            >
              <div className="indicator  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />{" "}
                </svg>
                <span className="badge badge-sm indicator-item bg-secondary">
                  {carts?.length}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">{carts?.length} Items</span>
                <span className="text-secondary">
                  Subtotal: MVR {totalPrice}
                </span>
                <div className="card-actions">
                  <Link to={"/chekout"} className="btn btn-primary btn-block ">
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="avatar avatar-online">
                  <div className="w-12 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <ul className="flex flex-col gap-2">
                    <Link
                      className="bg-gray-300 p-1 rounded hover:bg-secondary text-black"
                      to="/profile/profile"
                    >
                      Profile
                    </Link>
                    <Link
                      className="bg-gray-300 p-1 rounded hover:bg-secondary text-black"
                      to={"/setting"}
                    >
                      Setting
                    </Link>
                    {isAdmin === "admin" && (
                      <Link
                        className="bg-gray-300 p-1 rounded hover:bg-secondary text-black"
                        to={"/dashboard"}
                      >
                        Dashboard
                      </Link>
                    )}

                    <button onClick={handleLogOut} className="btn btn-error">
                      Logout
                    </button>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <Link to="/login" className="btn btn-primary btn-sm">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
