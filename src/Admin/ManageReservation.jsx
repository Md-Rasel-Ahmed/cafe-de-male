import { useState } from "react";
import {
  MdEventSeat,
  MdCancel,
  MdCheckCircle,
  MdVisibility,
} from "react-icons/md";
import { motion } from "framer-motion";

const initialReservations = [
  {
    id: 1,
    name: "Rasel Ahmed",
    date: "2025-01-15",
    time: "7:30 PM",
    guests: 4,
    status: "Pending",
  },
  {
    id: 2,
    name: "Nahida",
    date: "2025-01-16",
    time: "8:00 PM",
    guests: 2,
    status: "Confirmed",
  },
  {
    id: 3,
    name: "Abdur Rahman",
    date: "2025-01-17",
    time: "6:45 PM",
    guests: 6,
    status: "Cancelled",
  },
];

const statusBadge = {
  Pending: "badge-warning",
  Confirmed: "badge-success",
  Cancelled: "badge-error",
};

export default function ManageReservation() {
  const [reservations, setReservations] = useState(initialReservations);

  const handleStatusChange = (id, newStatus) => {
    setReservations((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
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
        <MdEventSeat className="text-2xl text-primary" />
        <h2 className="text-2xl font-bold">Manage Reservations</h2>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-base-100 rounded-xl shadow">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Guests</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {reservations.map((res, index) => (
              <motion.tr
                key={res.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <td>{index + 1}</td>
                <td className="font-medium">{res.name}</td>
                <td>{res.date}</td>
                <td>{res.time}</td>
                <td>{res.guests}</td>

                {/* Status */}
                <td>
                  <div className="flex items-center gap-2">
                    <span className={`badge ${statusBadge[res.status]}`}>
                      {res.status}
                    </span>

                    <select
                      className="select select-xs select-bordered"
                      value={res.status}
                      onChange={(e) =>
                        handleStatusChange(res.id, e.target.value)
                      }
                    >
                      <option value="Pending">Pending</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </div>
                </td>

                {/* Actions */}
                <td className="flex justify-center gap-2">
                  <button className="btn btn-xs btn-outline btn-info">
                    <MdVisibility />
                  </button>

                  <button className="btn btn-xs btn-outline btn-success">
                    <MdCheckCircle />
                  </button>

                  <button className="btn btn-xs btn-outline btn-error">
                    <MdCancel />
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
