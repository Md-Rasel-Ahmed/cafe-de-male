import Lottie from "lottie-react";
import registerLottie from "./registerLottie.json";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router";

const Register = () => {
  return (
    <section className="min-h-screen bg-base-300 flex items-center justify-center px-4">
      <div className="max-w-6xl w-full grid md:grid-cols-2 bg-base-100 rounded-2xl shadow-2xl overflow-hidden">
        {/* Left Side - Form */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="p-10 flex flex-col justify-center"
        >
          <h2 className="text-4xl font-bold mb-2">Create Account</h2>
          <p className="text-gray-500 mb-8">
            Join us today and start enjoying delicious meals! 🍽️
          </p>

          <form className="space-y-6">
            {/* Full Name */}
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 z-10 text-gray-400   text-lg" />
              <input
                type="text"
                placeholder="Enter your full name"
                className="input input-bordered w-full pl-10 focus:outline-0 "
                required
              />
            </div>

            {/* Email */}
            <div className="relative">
              <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 z-10 text-gray-400 text-lg" />
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full pl-10 focus:outline-0"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <RiLockPasswordLine className="absolute left-3 top-1/2 -translate-y-1/2 z-10 text-gray-400 text-lg" />
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full pl-10 focus:outline-0"
                required
              />
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <RiLockPasswordLine className="absolute left-3 top-1/2 -translate-y-1/2 z-10 text-gray-400 text-lg" />
              <input
                type="password"
                placeholder="Confirm your password"
                className="input input-bordered w-full pl-10 focus:outline-0"
                required
              />
            </div>

            <button className="btn btn-primary btn-lg w-full">Sign Up</button>
          </form>

          <p className="text-sm text-center mt-6">
            Already have an account?{" "}
            <Link to={"/login"}>
              <span className="text-primary font-semibold cursor-pointer">
                Login
              </span>
            </Link>
          </p>
        </motion.div>

        {/* Right Side - Lottie */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden md:flex items-center justify-center bg-base-300"
        >
          <div className="w-[420px]">
            <Lottie animationData={registerLottie} loop autoplay />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Register;
