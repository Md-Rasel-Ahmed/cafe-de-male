import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
export default function HomeBanner() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co/GvZvgrp7/bg.webp)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center flex lg:flex-row flex-col justify-between">
        <div className="max-w-md">
          {/* Heading */}
          <motion.h1
            className="mb-5 text-5xl font-bold"
            initial={{ opacity: 0, y: 50 }} // শুরুতে 50px নিচে
            animate={{ opacity: 1, y: 0 }} // slide up & fade in
            transition={{ duration: 0.8 }} // animation duration
          >
            Enjoy Cuisine Crafted With Heart & Creativity
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            className="mb-5"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }} // heading এর পরে 0.3s delay
          >
            Experience handcrafted dishes with fresh ingredients and rich
            flavors, creating memorable moments that celebrate the true beauty
            of fine dining.
          </motion.p>

          {/* Button */}
          <motion.button
            className="btn btn-primary"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Order Now
          </motion.button>
        </div>
        <div>
          <motion.img
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            src="https://i.ibb.co/v4gwh5vG/amanda.jpg"
            alt=""
            className="w-80 h-80 rounded-full"
          />
          <motion.img
            animate={{ y: [10, 0, 10] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            src="https://i.ibb.co/dwBWNWzs/reshma.jpg"
            alt=""
            className="w-80 h-80 rounded-full ml-50 -mt-30"
          />
        </div>
      </div>
    </div>
  );
}
