import { FaBoxOpen, FaClipboardList } from "react-icons/fa";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { CartProviderContext } from "../Providers/CartProvider";
import { AuthContext } from "../Providers/AuthProvider";
import moment from "moment/moment";
import Loading from "../Shared/Loading";

const statusBadge = {
  Pending: "badge-warning",
  Preparing: "badge-info",
  Completed: "badge-success",
};
const liveUrl = "https://cafe-de-male-server.onrender.com/api";
const localUrl = "http://localhost:5000/api";
export default function Orders() {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${liveUrl}/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
        console.log(data);
      });
  }, [user?.email]);
  // const date = new Date().toLocaleTimeString();
  // console.log(date);
  if (loading) return <Loading></Loading>;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="p-6 max-w-5xl mx-auto"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <FaClipboardList className="text-2xl text-primary" />
        <h2 className="text-2xl font-bold">My Orders</h2>
        <h2 className="text-2xl font-bold"></h2>
      </div>
      {orders?.length < 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-primary text-6xl mb-4"
          >
            <FaBoxOpen />
          </motion.div>

          <h2 className="text-xl font-semibold">No Orders Found</h2>

          <p className="text-gray-500 mt-2 max-w-sm">
            You haven’t placed any orders yet. Start exploring and place your
            first order!
          </p>

          <button className="btn btn-primary mt-6">Browse Menu</button>
        </div>
      ) : (
        <div className="space-y-4">
          {orders?.map((order, index) => (
            <motion.div
              key={order._id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`card bg-base-100 shadow ${
                order.status === "Completed" && "text-gray-600"
              }`}
            >
              <div className="card-body">
                {/* Top */}
                <div className="flex flex-col md:flex-row md:justify-between gap-2">
                  <div>
                    <h3 className="font-semibold">Order ID: {order.orderId}</h3>
                    <p className="text-sm text-gray-500">Date: {order.date}</p>
                  </div>

                  <span
                    className={`badge ${statusBadge[order.status]} self-start`}
                  >
                    {order.status}
                  </span>
                </div>

                {/* Items */}
                <div className="mt-3">
                  <p className="font-medium mb-1">Items:</p>
                  <ul className="list-disc list-inside text-sm">
                    {order?.items?.map((item, i) => (
                      <li key={i}>
                        {item.name} × {item.qty}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Total */}
                <div className="mt-3 flex justify-between items-center">
                  <span className="font-semibold">
                    Total: {order.total} MVR
                  </span>

                  {order.status === "Completed" && (
                    <span className="text-success text-sm font-medium">
                      ✔ Delivered
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
