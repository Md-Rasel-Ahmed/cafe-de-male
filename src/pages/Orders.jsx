import { FaClipboardList } from "react-icons/fa";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { CartProviderContext } from "../Providers/CartProvider";
import { AuthContext } from "../Providers/AuthProvider";
import moment from "moment/moment";

const statusBadge = {
  Pending: "badge-warning",
  Preparing: "badge-info",
  Completed: "badge-success",
};

export default function Orders() {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => {
        const filterOrderByEmail = data?.filter(
          (order) => order.email === user?.email
        );

        setOrders(filterOrderByEmail);
      });
  }, [user?.email]);
  const date = new Date().toLocaleTimeString();
  console.log(date);

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

      {/* Orders */}
      <div className="space-y-4">
        {orders?.map((order, index) => (
          <motion.div
            key={order.id}
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
                <span className="font-semibold">Total: {order.total} MVR</span>

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
    </motion.div>
  );
}
