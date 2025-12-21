import { motion } from "framer-motion";
import { GiPizzaSlice, GiChickenOven, GiCakeSlice } from "react-icons/gi";
import { Link } from "react-router";

const menuItems = [
  {
    icon: <GiChickenOven className="text-3xl text-primary" />,
    name: "Grilled Chicken",
    price: "$15.99",
    desc: "Juicy grilled chicken with special house spices.",
    img: "https://i.ibb.co/sd5MtTTq/grilled-chicken.jpg",
  },
  {
    name: "Chocolate Cake",
    price: "$6.99",
    desc: "Rich chocolate cake with creamy frosting.",
    img: "https://i.ibb.co/R495kJTp/chocolate.jpg",
  },
];

const RestaurentMenu = () => {
  return (
    <section className="py-20  relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Our Menu</h2>

        {/* Menu Items */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="bg-base-300 p-6 rounded-xl shadow-lg hover:shadow-2xl transition cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <img
              src="https://i.ibb.co/j9g4jQdk/pizza.jpg"
              alt=""
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <div className="flex items-center gap-3 mb-2 justify-center">
              <GiPizzaSlice className="text-3xl text-primary" />
              <h3 className="text-xl font-semibold">Margherita Pizza</h3>
            </div>
            <p className="text-gray-600 mb-2">
              Classic pizza with fresh tomatoes and mozzarella.
            </p>
            <p className="text-primary font-bold mb-4">MVR 12</p>
          </motion.div>
          <motion.div
            className="bg-base-300 p-6 rounded-xl shadow-lg hover:shadow-2xl transition cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <img
              src="https://i.ibb.co/sd5MtTTq/grilled-chicken.jpg"
              alt=""
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <div className="flex items-center gap-3 mb-2 justify-center">
              <GiCakeSlice className="text-3xl text-primary" />
              <h3 className="text-xl font-semibold">Grilled Chicken</h3>
            </div>
            <p className="text-gray-600 mb-2">
              Juicy grilled chicken with special house spices{" "}
            </p>
            <p className="text-primary font-bold mb-4">MVR 90</p>
          </motion.div>
          <motion.div
            className="bg-base-300 p-6 rounded-xl shadow-lg hover:shadow-2xl transition cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <img
              src="https://i.ibb.co/R495kJTp/chocolate.jpg"
              alt=""
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <div className="flex items-center gap-3 mb-2 justify-center">
              <GiPizzaSlice className="text-3xl text-primary" />
              <h3 className="text-xl font-semibold">Chocolate Cake</h3>
            </div>
            <p className="text-gray-600 mb-2">
              Rich chocolate cake with creamy frosting.{" "}
            </p>
            <p className="text-primary font-bold mb-4">MVR 35</p>
          </motion.div>
        </div>

        {/* View Full Menu Button */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link to={"/menus/all-dishes"}>
            <button className="btn btn-primary btn-lg hover:scale-105 transition-transform">
              View Full Menu
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default RestaurentMenu;
