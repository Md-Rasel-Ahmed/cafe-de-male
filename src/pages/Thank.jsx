import { motion } from "framer-motion";
import Lottie from "lottie-react";
import successAnimation from "./delivery.json";
import { Link } from "react-router";

export default function Thank() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen flex items-center justify-center bg-base-200 px-4"
    >
      <div className="card bg-base-100 shadow-xl max-w-md w-full text-center">
        <div className="card-body">
          {/* Lottie */}
          <div className="w-48 mx-auto">
            <Lottie animationData={successAnimation} loop={false} />
          </div>

          {/* Text */}
          <h2 className="text-2xl font-bold mt-2">Thank You for Your Order!</h2>

          <p className="text-gray-500 mt-2">
            Your order has been placed successfully. We are preparing it with
            care 🍽️
          </p>

          <p className="text-gray-500 mt-2">
            Please check your orders we will change your order status as soon as
            possible
          </p>

          {/* Buttons */}
          <div className="card-actions justify-center mt-6 gap-3">
            <Link to="/orders" className="btn btn-primary">
              View My Orders
            </Link>

            <Link to="/" className="btn btn-outline">
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
