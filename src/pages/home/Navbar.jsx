import { useContext, useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { CartProviderContext } from "../../Providers/CartProvider";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { carts } = useContext(CartProviderContext);
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // scrolling down
      setShowNavbar(false);
    } else {
      // scrolling up
      setShowNavbar(true);
    }

    setLastScrollY(currentScrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  const totalPrice = carts.reduce((total, item) => total + item.price, 0);

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
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              <li className="text-xl">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="text-xl">
                <NavLink to="/menus">Menu</NavLink>
              </li>
              <li className="text-xl">
                <NavLink to="/reservation">Reservation</NavLink>
              </li>
              <li className="text-xl">
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>

          {/* Logo */}

          <Link to="/" className="text-2xl font-bold text-primary">
            Cafe De <span className="text-secondary">Male</span>
          </Link>
        </div>

        {/* Center (Desktop Menu) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium">
            <li className="text-xl">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-xl">
              <NavLink to="/menus">Menu</NavLink>
            </li>
            <li className="text-xl">
              <NavLink to="/reservation">Reservation</NavLink>
            </li>
            <li className="text-xl">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end gap-3">
          {/* Cart */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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

          {/* Login */}
          <Link to="/login" className="btn btn-primary btn-sm">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
