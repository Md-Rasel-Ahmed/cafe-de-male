import { useState } from "react";
import { FaClipboardList, FaEye, FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";

const initialOrders = [
  {
    id: 1,
    customer: "Rasel Ahmed",
    item: "Chicken Burger",
    price: "$12",
    status: "Pending",
  },
  {
    id: 2,
    customer: "Nahida",
    item: "Pizza",
    price: "$18",
    status: "Preparing",
  },
  {
    id: 3,
    customer: "Abdur Rahman",
    item: "Pasta",
    price: "$15",
    status: "Completed",
  },
];

const statusColor = {
  Pending: "badge-warning",
  Preparing: "badge-info",
  Completed: "badge-success",
};

export default function ManageOrders() {
  const [orders, setOrders] = useState(initialOrders);

  const handleStatusChange = (id, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="p-6"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <FaClipboardList className="text-2xl text-primary" />
        <h2 className="text-2xl font-bold">Manage Orders</h2>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-base-100 rounded-xl shadow">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer</th>
              <th>Item</th>
              <th>Price</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <motion.tr
                key={order.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <td>{index + 1}</td>
                <td>{order.customer}</td>
                <td>{order.item}</td>
                <td>{order.price}</td>

                {/* Status Column */}
                <td>
                  <div className="flex items-center gap-2">
                    <span className={`badge ${statusColor[order.status]}`}>
                      {order.status}
                    </span>

                    <select
                      className="select select-xs select-bordered"
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(order.id, e.target.value)
                      }
                    >
                      <option value="Pending">Pending</option>
                      <option value="Preparing">Preparing</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                </td>

                {/* Actions */}
                <td className="flex justify-center gap-2">
                  <button className="btn btn-xs btn-outline btn-info">
                    <FaEye />
                  </button>
                  <button className="btn btn-xs btn-outline btn-error">
                    <FaTrash />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
