import { motion } from "framer-motion";
import { GiKnifeFork, GiChefToque, GiMeal } from "react-icons/gi";
// import aboutImg from "../assets/about.jpg"; // local image path

const features = [
  {
    icon: <GiKnifeFork className="text-4xl text-primary" />,
    title: "Fresh Ingredients",
    desc: "We use only the freshest ingredients to ensure perfect taste.",
  },
  {
    icon: <GiChefToque className="text-4xl text-primary" />,
    title: "Expert Chefs",
    desc: "Our chefs craft each dish with passion and expertise.",
  },
  {
    icon: <GiMeal className="text-4xl text-primary" />,
    title: "Delicious Meals",
    desc: "Every meal is prepared to delight your senses and appetite.",
  },
];

const About = () => {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://i.ibb.co/KQrXvzY/about.jpg"
            alt="About Us"
            className="rounded-xl shadow-lg w-full h-100"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="mb-6 ">
            Welcome to our restaurant, where passion meets perfection. We craft
            every dish with fresh ingredients and love, creating a dining
            experience that delights your senses.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4 p-4 bg-base-300 rounded-lg shadow hover:shadow-lg transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
              >
                <div>{f.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg">{f.title}</h3>
                  <p className="text-gray-600 text-sm">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <button className="btn btn-primary">Learn More</button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
