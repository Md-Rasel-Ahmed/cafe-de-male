import React, { useEffect, useState, useContext } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

import { FaCartArrowDown } from "react-icons/fa";
import { CartProviderContext } from "./../Providers/CartProvider";
const beverage = [
  {
    id: 2,
    name: "Cappuccino",
    category: "Beverages",
    price: 16.0,
    spice_level: "None",
    img: "/images/menu/cappuccino.jpg",
    ingredients: [
      { id: 1, name: "Espresso", img: "/images/ingredients/espresso.jpg" },
      { id: 2, name: "Milk Foam", img: "/images/ingredients/milk.jpg" },
    ],
  },
  {
    id: 3,
    name: "Café Latte",
    category: "Beverages",
    price: 17.0,
    spice_level: "None",
    img: "/images/menu/latte.jpg",
    ingredients: [
      { id: 1, name: "Espresso", img: "/images/ingredients/espresso.jpg" },
      { id: 2, name: "Steamed Milk", img: "/images/ingredients/milk.jpg" },
    ],
  },
  {
    id: 4,
    name: "Americano",
    category: "Beverages",
    price: 14.0,
    spice_level: "None",
    img: "/images/menu/americano.jpg",
    ingredients: [
      { id: 1, name: "Espresso", img: "/images/ingredients/espresso.jpg" },
      { id: 2, name: "Hot Water", img: "/images/ingredients/water.jpg" },
    ],
  },
  {
    id: 5,
    name: "Hot Chocolate",
    category: "Beverages",
    price: 18.0,
    spice_level: "None",
    img: "/images/menu/hot-chocolate.jpg",
    ingredients: [
      { id: 1, name: "Chocolate", img: "/images/ingredients/chocolate.jpg" },
      { id: 2, name: "Milk", img: "/images/ingredients/milk.jpg" },
    ],
  },
  {
    id: 6,
    name: "Black Tea",
    category: "Beverages",
    price: 10.0,
    spice_level: "None",
    img: "/images/menu/black-tea.jpg",
    ingredients: [
      { id: 1, name: "Tea Leaves", img: "/images/ingredients/tea.jpg" },
      { id: 2, name: "Water", img: "/images/ingredients/water.jpg" },
    ],
  },
  {
    id: 7,
    name: "Milk Tea",
    category: "Beverages",
    price: 12.0,
    spice_level: "None",
    img: "/images/menu/milk-tea.jpg",
    ingredients: [
      { id: 1, name: "Tea Leaves", img: "/images/ingredients/tea.jpg" },
      { id: 2, name: "Milk", img: "/images/ingredients/milk.jpg" },
    ],
  },
];
export default function Menus() {
  const [catagoris, setCatagoris] = useState([]);
  const [menus, setMenus] = useState(beverage);
  const [loading, setLoading] = useState(true);
  const [clickBtn, setClickBtn] = useState("Beverages");
  const { cartAdded } = useContext(CartProviderContext);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("/catagoris2.json")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setCatagoris(data);
      });
    fetch("/menus2.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const filterData = data?.menu.filter(
          (c) => c.category === "Breakfast - Maldivian Delights"
        );

        setMenus(filterData[0].items);
        setLoading(false);
      });
  }, []);
  const handleClick = (name) => {
    setClickBtn(name);

    setLoading(true);
    setMenus([]);
    fetch("/menus2.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const filterData = data?.menu.filter((c) => c.category === name);

        setMenus(filterData[0].items);
        setLoading(false);
      });
  };

  // handle add cart
  const handleAddCart = (menu) => {
    const quantity = 1;
    menu.quantity = quantity;
    cartAdded(menu);
  };

  return (
    <div
      className="min-h-screen justify-center bg-cover bg-base-300 "
      style={{
        backgroundImage: "url(./menu-img.jpg)",
      }}
    >
      <div
        className="menu-content h-full"
        // style={{
        //   backgroundImage: "url(https://i.ibb.co/GvZvgrp7/bg.webp)",
        // }}
      >
        <h1 className="text-center text-xl font-bold py-5">Menus</h1>
        <h1 className="text-8xl font-bold text-center py-5">
          Discover Our menu
        </h1>
        <div className="w-100 mx-auto">
          <p className="text-center text-xl">
            A carefully crafted menu featuring fresh ingredients, rich flavors,
            and dishes made to delight every appetite.
          </p>
        </div>
      </div>
      <div className="menus  py-5 bg-base-300 p-5 mt-5">
        <h1 className="text-xl font-bold text-center py-2">Categoris</h1>
        <div className="menu-cetagory  w-full    gap-1 text-2xl justify-center">
          {catagoris?.map((catagory) => (
            <motion.button
              onClick={(e) => handleClick(catagory.name, e)}
              key={catagory.id}
              className={`btn btn-sm hover:bg-secondary  ${
                clickBtn === catagory.name && "btn-secondary"
              }`}
            >
              {catagory.name}
            </motion.button>
          ))}
          {/* <NavLink className="p-2 rounded" to={"all-dishes"}>
            All Dishes
          </NavLink>
          <NavLink className="p-2 rounded" to={"dishes"}>
            Dishes
          </NavLink>
          <NavLink className="p-2 rounded" to={"desserts"}>
            Desserts
          </NavLink>
          <NavLink className="p-2 rounded" to={"drinks"}>
            Drinks
          </NavLink> */}
        </div>
        {loading && (
          <div className="mt-10 flex justify-center items-center">
            <span className="loading loading-bars loading-xl text-[#F43098]"></span>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-4 md:grid-cols-2 gap-3 my-10"
        >
          {menus?.map((menu) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="  bg-base-100 shadow-sm rounded-2xl h-90 flex flex-col justify-between"
            >
              <figure>
                <img
                  src={menu.img}
                  alt="Movie"
                  className="rounded-t-2xl h-50 w-full "
                />
              </figure>
              <div className=" w-full p-2 ">
                <div className="flex  justify-between items-center">
                  <h1 className="text-sm font-bold">{menu.name}</h1>
                  <p className="text-sm text-primary ">MVR {menu.price}</p>
                </div>
                <div className="flex justify-between mt-3 items-center">
                  <div className="flex gap-1  text-sm">
                    <p className="text-bold ">Ingredients :</p>
                    {/* {menu?.ingredients.map((ing) => (
                      <a
                        href={`http://www.google.com/search?q=www.google.com+${ing.name}+images`}
                        target="_blank"
                        className="underline text-primary"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        {ing.name}
                      </a>
                    ))} */}
                  </div>

                  {/* <Link to={"menus/details"}>
                      <button className="btn btn-sm btn-secondary">Details</button>
                    </Link> */}
                </div>
              </div>
              <button
                onClick={() => handleAddCart(menu)}
                className="btn w-full rounded-b-2xl btn-secondary"
              >
                Add to Cart{" "}
                <FaCartArrowDown size={20} className=" cursor-pointer" />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* <Outlet></Outlet> */}
      </div>
    </div>
  );
}
