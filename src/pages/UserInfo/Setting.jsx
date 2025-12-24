import { motion } from "framer-motion";
import { FaUserCog, FaBell, FaLock, FaPalette, FaSave } from "react-icons/fa";

export default function Setting() {
  return (
    <div className="min-h-screen bg-base-200 px-4 py-8 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-3xl space-y-6"
      >
        {/* Header */}
        <div className="flex items-center gap-3">
          <FaUserCog className="text-2xl text-primary" />
          <h2 className="text-2xl font-bold">Settings</h2>
        </div>

        {/* Profile Settings */}
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h3 className="font-semibold flex items-center gap-2">
              <FaUserCog />
              Profile Settings
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                placeholder="Full Name"
                className="input input-bordered w-full"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="input input-bordered w-full"
              />
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h3 className="font-semibold flex items-center gap-2">
              <FaBell />
              Notifications
            </h3>

            <div className="mt-4 space-y-3">
              <div className="flex justify-between items-center">
                <span>Email Notifications</span>
                <input type="checkbox" className="toggle toggle-primary" />
              </div>

              <div className="flex justify-between items-center">
                <span>Order Updates</span>
                <input type="checkbox" className="toggle toggle-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h3 className="font-semibold flex items-center gap-2">
              <FaLock />
              Privacy
            </h3>

            <div className="mt-4 space-y-3">
              <div className="flex justify-between items-center">
                <span>Show Profile Publicly</span>
                <input type="checkbox" className="toggle" />
              </div>

              <div className="flex justify-between items-center">
                <span>Two-Factor Authentication</span>
                <input type="checkbox" className="toggle toggle-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Theme Settings */}
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h3 className="font-semibold flex items-center gap-2">
              <FaPalette />
              Appearance
            </h3>

            <select className="select select-bordered w-full max-w-xs mt-4">
              <option>System Default</option>
              <option>Light</option>
              <option>Dark</option>
            </select>
          </div>
        </div>

        {/* Save Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="btn btn-primary w-full flex items-center gap-2"
        >
          <FaSave />
          Save Changes
        </motion.button>
      </motion.div>
    </div>
  );
}
