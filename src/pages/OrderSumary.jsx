import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router";
import { FaHome } from "react-icons/fa";
import { CartProviderContext } from "../Providers/CartProvider";

const OrderSumary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { carts } = useContext(CartProviderContext);
  const { order, total } = location.state || { order: [], total: 0 };

  return (
    <div className="min-h-screen bg-base-300 flex justify-center items-start p-6">
      <div className="w-full max-w-4xl bg-base-200 shadow-2xl rounded-xl p-8">
        <h2 className="text-3xl font-bold  mb-6 text-center">
          Your Order Summary
        </h2>

        <div className="space-y-4">
          {carts.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border rounded-lg p-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-500">
                    {item.quantity} x ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="font-bold text-lg">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between font-bold text-xl mt-6 border-t pt-4">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <div className="flex justify-center mt-8">
          <button
            className="btn btn-primary flex items-center space-x-2"
            onClick={() => navigate("/")}
          >
            <FaHome />
            <span>Go to Home</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSumary;
