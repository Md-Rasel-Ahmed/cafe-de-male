import { useEffect, useState } from "react";
import {
  MdEventSeat,
  MdCancel,
  MdCheckCircle,
  MdVisibility,
} from "react-icons/md";
import { motion } from "framer-motion";
import { deleteData, updateData } from "../utilities/manageAPI";
import Loading from "../Shared/Loading";

const statusBadge = {
  Pending: "badge-warning",
  Confirmed: "badge-success",
  Cancelled: "badge-error",
};
const apiName = "reservation";
export default function ManageReservation() {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://cafe-de-male-server.onrender.com/api/reservation")
      .then((res) => res.json())
      .then((data) => {
        setReservations(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loading></Loading>;
  }
  const handleStatusChange = (id, newStatus) => {
    updateData(id, newStatus, reservations, setReservations, apiName);
  };
  // handle order delete by id
  const handleOrderDelete = (id) => {
    deleteData(id, reservations, setReservations, "Reservation", apiName);
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
                key={res._id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <td>{index + 1}</td>
                <td className="font-medium">{res.user}</td>
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
                        handleStatusChange(res._id, e.target.value)
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

                  <button
                    onClick={() => handleOrderDelete(res._id)}
                    className="btn btn-xs btn-outline btn-error"
                  >
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
