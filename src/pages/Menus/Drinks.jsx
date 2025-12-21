import React from "react";
import { motion } from "framer-motion";
import { FaCartArrowDown } from "react-icons/fa";

export default function Drinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="grid lg:grid-cols-2 gap-3 my-10"
    >
      <motion.div className="flex  bg-base-100 shadow-sm rounded-2xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            alt="Movie"
            className="rounded-l-2xl h-30 w-40"
          />
        </figure>
        <div className=" w-full p-5 ">
          <div className="flex  justify-between items-center">
            <h1 className="text-xl font-bold">Salad</h1>
            <p className="text-xl font-bold">mvr 30</p>
          </div>
          <div className="flex justify-between mt-3 items-center">
            <p>Lorem ipsum dolor sit amet.</p>
            <FaCartArrowDown
              size={30}
              className="text-secondary cursor-pointer"
            />
          </div>
        </div>
      </motion.div>
      <div className="flex  bg-base-100 shadow-sm rounded-2xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            alt="Movie"
            className="rounded-l-2xl h-30 w-40"
          />
        </figure>
        <div className=" w-full p-5 ">
          <div className="flex  justify-between">
            <h1 className="text-xl font-bold">Salad</h1>
            <p className="text-xl font-bold">mvr 30</p>
          </div>
          <div className="flex justify-between mt-3">
            <p>Lorem ipsum dolor sit amet.</p>
            <button className="btn">Add</button>
          </div>
        </div>
      </div>
      <div className="flex  bg-base-100 shadow-sm rounded-2xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            alt="Movie"
            className="rounded-l-2xl h-30 w-40"
          />
        </figure>
        <div className=" w-full p-5 ">
          <div className="flex  justify-between">
            <h1 className="text-xl font-bold">Salad</h1>
            <p className="text-xl font-bold">mvr 30</p>
          </div>
          <div className="flex justify-between mt-3">
            <p>Lorem ipsum dolor sit amet.</p>
            <button className="btn">Add</button>
          </div>
        </div>
      </div>
      <div className="flex  bg-base-100 shadow-sm rounded-2xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            alt="Movie"
            className="rounded-l-2xl h-30 w-40"
          />
        </figure>
        <div className=" w-full p-5 ">
          <div className="flex  justify-between">
            <h1 className="text-xl font-bold">Salad</h1>
            <p className="text-xl font-bold">mvr 30</p>
          </div>
          <div className="flex justify-between mt-3">
            <p>Lorem ipsum dolor sit amet.</p>
            <button className="btn">Add</button>
          </div>
        </div>
      </div>
      <div className="flex  bg-base-100 shadow-sm rounded-2xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            alt="Movie"
            className="rounded-l-2xl h-30 w-40"
          />
        </figure>
        <div className=" w-full p-5 ">
          <div className="flex  justify-between">
            <h1 className="text-xl font-bold">Salad</h1>
            <p className="text-xl font-bold">mvr 30</p>
          </div>
          <div className="flex justify-between mt-3">
            <p>Lorem ipsum dolor sit amet.</p>
            <button className="btn">Add</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
