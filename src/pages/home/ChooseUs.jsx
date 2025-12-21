import { motion } from "framer-motion";
import { GiChefToque, GiMeal, GiKnifeFork } from "react-icons/gi";

const reasons = [
  {
    icon: <GiChefToque className="text-4xl text-primary" />,
    title: "Expert Chefs",
    desc: "Our chefs are highly skilled and passionate about creating perfect dishes.",
  },
  {
    icon: <GiKnifeFork className="text-4xl text-primary" />,
    title: "Fresh Ingredients",
    desc: "We only use fresh and high-quality ingredients for all our meals.",
  },
  {
    icon: <GiMeal className="text-4xl text-primary" />,
    title: "Delicious Meals",
    desc: "Every dish is crafted to delight your taste buds and senses.",
  },
];

const ChooseUs = () => {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Why People Choose Us
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              className="bg-base-300 p-6 rounded-xl shadow-lg hover:shadow-2xl transition cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <div className="flex justify-center mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
