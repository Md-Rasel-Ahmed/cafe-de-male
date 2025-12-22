import { useState } from "react";
import {
  FaUsersCog,
  FaEye,
  FaTrash,
  FaUserShield,
  FaUserSlash,
} from "react-icons/fa";
import { motion } from "framer-motion";

const initialUsers = [
  {
    id: 1,
    name: "Rasel Ahmed",
    email: "rasel@gmail.com",
    role: "admin",
    status: "active",
  },
  {
    id: 2,
    name: "Nahida",
    email: "nahida@gmail.com",
    role: "user",
    status: "active",
  },
  {
    id: 3,
    name: "Abdur Rahman",
    email: "abdur@gmail.com",
    role: "user",
    status: "blocked",
  },
];

const roleBadge = {
  admin: "badge-primary",
  user: "badge-ghost",
};

const statusBadge = {
  active: "badge-success",
  blocked: "badge-error",
};

export default function ManageUsers() {
  const [users, setUsers] = useState(initialUsers);

  const handleRoleChange = (id, newRole) => {
    setUsers((prev) =>
      prev.map((user) => (user.id === id ? { ...user, role: newRole } : user))
    );
  };

  const toggleStatus = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id
          ? {
              ...user,
              status: user.status === "active" ? "blocked" : "active",
            }
          : user
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
        <FaUsersCog className="text-2xl text-primary" />
        <h2 className="text-2xl font-bold">Manage Users</h2>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-base-100 rounded-xl shadow">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <motion.tr
                key={user.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <td>{index + 1}</td>

                <td className="font-medium">{user.name}</td>

                <td>{user.email}</td>

                {/* Role */}
                <td>
                  <div className="flex items-center gap-2">
                    <span className={`badge ${roleBadge[user.role]}`}>
                      {user.role}
                    </span>

                    <select
                      className="select select-xs select-bordered"
                      value={user.role}
                      onChange={(e) =>
                        handleRoleChange(user.id, e.target.value)
                      }
                    >
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                </td>

                {/* Status */}
                <td>
                  <span className={`badge ${statusBadge[user.status]}`}>
                    {user.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="flex justify-center gap-2">
                  <button className="btn btn-xs btn-outline btn-info">
                    <FaEye />
                  </button>

                  <button
                    onClick={() => toggleStatus(user.id)}
                    className="btn btn-xs btn-outline btn-warning"
                  >
                    {user.status === "active" ? (
                      <FaUserSlash />
                    ) : (
                      <FaUserShield />
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
