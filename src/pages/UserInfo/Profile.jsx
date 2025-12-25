import { motion } from "framer-motion";
import { useContext } from "react";
import {
  FaUser,
  FaEnvelope,
  FaUserShield,
  FaCalendarAlt,
  FaEdit,
} from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import moment from "moment";

export default function Profile() {
  const { user, creationTime } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="card bg-base-100 shadow-xl w-full max-w-md"
      >
        <div className="card-body items-center text-center">
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="avatar"
          >
            <div className="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src="https://i.ibb.co/dwBWNWzs/reshma.jpg"
                alt="Profile"
                className=""
              />
            </div>
          </motion.div>

          {/* Name */}
          <h2 className="text-2xl font-bold mt-4">{user?.displayName}</h2>

          {/* Email */}
          <p className="flex items-center gap-2 text-gray-500">
            <FaEnvelope />
            {user?.email}
          </p>

          {/* Role */}
          <span className="badge badge-primary mt-2 flex items-center gap-1">
            <FaUserShield />
            User
          </span>

          <div className="divider"></div>

          {/* Info */}
          <div className="w-full space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <FaUser className="text-primary" />
              <span className="font-medium">Username:</span>
              <span className="ml-auto">{user?.displayName}</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCalendarAlt className="text-primary" />
              <span className="font-medium">Joined:</span>

              <span className="ml-auto">
                {creationTime + ` (${moment(creationTime).fromNow()})`}
              </span>
            </div>
          </div>

          {/* Action */}
          <div className="card-actions mt-6 w-full">
            <button className="btn btn-primary w-full flex items-center gap-2">
              <FaEdit />
              Edit Profile
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
