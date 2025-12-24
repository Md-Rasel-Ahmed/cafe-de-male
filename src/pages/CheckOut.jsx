import React, { useContext, useState } from "react";
import { FaTrashAlt, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { CartProviderContext } from "../Providers/CartProvider";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const CheckOut = () => {
  const { carts, deleteCart, incress, total, orderAdd } =
    useContext(CartProviderContext);
  const [updateCarts, setUpdateCarts] = useState(carts);
  const [number, setNumber] = useState("");
  const [adress, setAdress] = useState("");
  // const [totalPrice,setTotalPrice]=useState(0)

  // delete item from cart
  const handleDelete = (id) => {
    Swal.fire({
      title: "Do you want to Delete the item?",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Item has been deleted!", "", "success");
        deleteCart(id);
      }
    });
    // toast.success("");
  };
  const navigate = useNavigate();
  const placeOrder = () => {
    if (number && adress) {
      orderAdd();
      navigate("/thank");
    } else {
      toast.error("Please provide adress!");
    }
    // Swal.fire({
    //   title: "Your order has been place!",
    //   icon: "success",
    //   draggable: true,
    // });
  };
  // incres quantity
  const incresQuantity = (id) => {
    incress(id);
    // const findItem = updateCarts.find((cart) => cart.id === id);
    // const findDefaultItem = carts.find((cart) => cart.id === id);
    // findItem.quantity = findItem.quantity + 1;

    // // findItem.price = findDefaultItem.price * findItem.quantity;
    // setUpdateCarts([...updateCarts]);
    // console.log(findItem, findDefaultItem);
  };
  // console.log("outside", carts);
  const totalPrice = updateCarts.reduce((total, item) => total + item.price, 0);
  // console.log(totalPrice, updateCarts);
  console.log(carts.length);

  return (
    <div className="min-h-screen flex justify-center items-start p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-base-300 shadow-2xl rounded-xl p-8"
      >
        <h2 className="text-3xl font-bold text-center mb-6 ">Checkout</h2>
        {/* Cart Items */}
        <div className="space-y-4">
          {carts?.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-between border rounded-lg p-4 hover:shadow-lg transition-shadow duration-200"
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
                    <button className="btn">-</button> {item.quantity}
                    <button
                      className="btn"
                      onClick={() => incresQuantity(item.id)}
                    >
                      +
                    </button>{" "}
                    x MVR {item.price.toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="font-bold text-lg">
                  MVR {(item.price * item.quantity).toFixed(2)}
                </span>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <FaTrashAlt size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total */}
        <div className="flex justify-between font-bold text-xl mt-6 border-t pt-4">
          <span>Total:</span>
          <span>MVR {total.toFixed(2)}</span>
        </div>

        {/* Checkout Actions */}
        <div className="flex justify-between mt-8">
          <Link
            to={"/menus"}
            className="btn btn-outline btn-primary flex items-center space-x-2"
          >
            <FaArrowLeft />
            <span>Back to Menu</span>
          </Link>

          <button
            onClick={placeOrder}
            className="btn btn-primary px-6 py-2 text-lg "
            disabled={carts?.length === 0 ? true : false}
          >
            Place Order
          </button>
        </div>

        {/* Delivery Section */}
        <div className="mt-10 bg-base-200 p-6 rounded-lg shadow-inner">
          <h3 className="text-xl font-semibold mb-4">Delivery Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full"
            />
            <input
              type="number"
              placeholder="Phone Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Address"
              value={adress}
              onChange={(e) => setAdress(e.target.value)}
              className="input input-bordered w-full col-span-2"
            />
            <input
              type="text"
              placeholder="City"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Postal Code"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* Payment Options */}
        <div className="mt-10 bg-base-0 p-6 rounded-lg shadow-inner">
          <h3 className="text-xl font-semibold mb-4">Payment Method</h3>
          <div className="flex flex-col gap-2">
            <button className="btn btn-outline w-full">
              Credit / Debit Card
            </button>
            <button className="btn btn-outline w-full">Cash on Delivery</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CheckOut;
