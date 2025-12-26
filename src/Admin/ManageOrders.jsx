import { useEffect, useState } from "react";
import { FaClipboardList, FaEye, FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { deleteData, getData, updateData } from "../utilities/manageAPI";
import Loading from "../Shared/Loading";

const statusColor = {
  Pending: "badge-warning",
  Preparing: "badge-info",
  Completed: "badge-success",
};
const apiName = "orders";

export default function ManageOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getData(apiName, setOrders);
    // console.log(orders);
  }, []);
  const handleStatusChange = (id, status) => {
    updateData(id, status, orders, setOrders, apiName);
    // console.log(orders, status);
    // setOrders()
  };
  // handle order delete by id
  const handleOrderDelete = (id) => {
    deleteData(id, orders, setOrders, "order", apiName);
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
      {orders?.length <= 0 && <Loading></Loading>}
      {/* Table */}
      <div className="overflow-x-auto bg-base-100 rounded-xl shadow">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Order Id</th>
              <th>Price</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <motion.tr
                key={order._id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <td>{index + 1}</td>
                <td>{order.email}</td>
                <td>{order.orderId}</td>
                <td>{order.total}</td>

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
                        handleStatusChange(order._id, e.target.value)
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
                  <button
                    onClick={() => handleOrderDelete(order._id)}
                    className="btn btn-xs btn-outline btn-error"
                  >
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
