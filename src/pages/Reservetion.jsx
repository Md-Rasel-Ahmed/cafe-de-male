import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { FaCalendarAlt, FaUserFriends, FaClock } from "react-icons/fa";
import reservationLottie from "./reservation.json";
const Reservetion = () => {
  return (
    <section className="py-24 bg-[url('/src/assets/reservation-bg.jpg')] bg-cover bg-center relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-5xl mx-auto px-6 text-center text-white">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Make a Reservation
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-200 max-w-2xl mx-auto mb-12"
        >
          Reserve your table in advance and enjoy an unforgettable dining
          experience crafted with passion and perfection.
        </motion.p>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-base-300  rounded-2xl p-8 shadow-2xl"
        >
          <div className="hero ">
            <div className="hero-content flex-col  lg:flex-row-reverse">
              <div className="text-center lg:text-left w-100">
                <Lottie animationData={reservationLottie} loop={true}></Lottie>
              </div>
              <form className="flex flex-col gap-6 w-100">
                {/* Date */}
                <div className="relative">
                  <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
                  <input
                    type="date"
                    className="input input-bordered w-full pl-10"
                    required
                  />
                </div>

                {/* Time */}
                <div className="relative">
                  <FaClock className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
                  <input
                    type="time"
                    className="input input-bordered w-full pl-10"
                    required
                  />
                </div>

                {/* Guests */}
                <div className="relative">
                  <FaUserFriends className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
                  <select
                    className="select select-bordered w-full pl-10"
                    required
                  >
                    <option disabled selected>
                      Guests
                    </option>
                    <option>1 Person</option>
                    <option>2 People</option>
                    <option>3 People</option>
                    <option>4 People</option>
                    <option>5+ People</option>
                  </select>
                </div>

                {/* Button */}
                <div className="md:col-span-3 mt-4">
                  <button className="btn btn-primary btn-lg w-full tracking-wide">
                    Book a Table
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reservetion;
