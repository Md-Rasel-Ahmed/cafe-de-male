import { motion } from "framer-motion";

const images = [
  { id: 1, src: "https://i.ibb.co/dwBWNWzs/reshma.jpg", category: "Food" },
  { id: 2, src: "https://i.ibb.co/dwBWNWzs/reshma.jpg", category: "Food" },
  { id: 3, src: "https://i.ibb.co/dwBWNWzs/reshma.jpg", category: "Interior" },
  { id: 4, src: "https://i.ibb.co/dwBWNWzs/reshma.jpg", category: "Interior" },
  { id: 5, src: "https://i.ibb.co/dwBWNWzs/reshma.jpg", category: "Chef" },
  { id: 6, src: "https://i.ibb.co/dwBWNWzs/reshma.jpg", category: "Dessert" },
  { id: 7, src: "https://i.ibb.co/dwBWNWzs/reshma.jpg", category: "Dessert" },
  { id: 8, src: "https://i.ibb.co/dwBWNWzs/reshma.jpg", category: "Dessert" },
  { id: 9, src: "https://i.ibb.co/dwBWNWzs/reshma.jpg", category: "Dessert" },
  { id: 10, src: "https://i.ibb.co/dwBWNWzs/reshma.jpg", category: "Dessert" },
  { id: 11, src: "https://i.ibb.co/dwBWNWzs/reshma.jpg", category: "Dessert" },
  { id: 12, src: "https://i.ibb.co/dwBWNWzs/reshma.jpg", category: "Dessert" },
  { id: 13, src: "https://i.ibb.co/dwBWNWzs/reshma.jpg", category: "Dessert" },
  { id: 14, src: "https://i.ibb.co/dwBWNWzs/reshma.jpg", category: "Dessert" },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Gallery = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold mb-3">Our Gallery</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A glimpse of our delicious dishes, cozy atmosphere, and passionate
            chefs.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {images.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-2xl shadow-lg group"
            >
              <img
                src={item.src}
                alt="gallery"
                className="w-full h-72 object-cover"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
