import { useEffect, useState } from "react";
import {
  FaBoxOpen,
  FaEdit,
  FaTrash,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";

const initialItems = [
  {
    id: 1,
    name: "Chicken Burger",
    category: "Fast Food",
    price: 12,
    stock: 20,
    status: "available",
  },
  {
    id: 2,
    name: "Pizza",
    category: "Fast Food",
    price: 18,
    stock: 0,
    status: "out",
  },
  {
    id: 3,
    name: "Pasta",
    category: "Italian",
    price: 15,
    stock: 10,
    status: "available",
  },
];

const statusBadge = {
  available: "badge-success",
  out: "badge-error",
};

export default function ManageItems() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("/menus2.json")
      .then((res) => res.json())
      .then((data) => {
        const allItems = data.menu.flatMap((category) =>
          category.items.map((item) => ({
            ...item,
            // categoryName: category.category
          }))
        );
        // console.log(allItems);
        setItems(allItems);
      });
  }, []);
  //   console.log(items);
  const toggleStatus = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: item.status === "available" ? "out" : "available",
              stock: item.status === "available" ? 0 : 10,
            }
          : item
      )
    );
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
        <FaBoxOpen className="text-2xl text-primary" />
        <h2 className="text-2xl font-bold">Manage Items</h2>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-base-100 rounded-xl shadow">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
              {/* <th>Category</th> */}
              <th>Price (MVR)</th>
              {/* <th>Stock</th> */}
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item, index) => (
              <motion.tr
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <td>{index + 1}</td>

                <td className="font-medium">{item.name}</td>

                {/* <td>
                  <span className="badge badge-outline">{item.catagory}</span>
                </td> */}

                <td>MVR {item.price}</td>

                {/* <td>{item.stock}</td> */}

                {/* Status */}
                <td>
                  <span className={`badge ${statusBadge[item.status]}`}>
                    {item.status === "available" ? "Available" : "Unavailable"}
                  </span>
                </td>

                {/* Actions */}
                <td className="flex justify-center gap-2">
                  <button className="btn btn-xs btn-outline btn-info">
                    <FaEdit />
                  </button>

                  <button
                    onClick={() => toggleStatus(item.id)}
                    className="btn btn-xs btn-outline btn-warning"
                  >
                    {item.status === "available" ? (
                      <FaTimesCircle />
                    ) : (
                      <FaCheckCircle />
                    )}
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
