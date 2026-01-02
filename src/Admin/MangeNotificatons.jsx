import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  query,
  onSnapshot,
  updateDoc,
  doc,
  deleteDoc,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { FiTrash2, FiCheckCircle, FiPlus } from "react-icons/fi";
import { firestore } from "../../firebase";

export default function ManageNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [role, setRole] = useState("All");

  const notificationsRef = collection(firestore, "notifications");
  const notificationsQuery = query(
    notificationsRef,
    orderBy("createdAt", "desc")
  );
  // Real-time listener
  useEffect(() => {
    const unsubscribe = onSnapshot(notificationsQuery, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNotifications(data);
    });

    return () => unsubscribe();
  }, [notificationsQuery]);

  // Add new notification
  const addNotification = async () => {
    if (!newTitle || !newMessage) return;
    await addDoc(notificationsRef, {
      title: newTitle,
      message: newMessage,
      read: false,
      type: "all",
      targetUers: [],
      createdAt: serverTimestamp(),
    });
    setNewTitle("");
    setNewMessage("");
  };

  // Toggle read/unread
  const toggleRead = async (id, read) => {
    const docRef = doc(firestore, "notifications", id);
    await updateDoc(docRef, { read: !read });
  };

  // Delete notification
  const deleteNotification = async (id) => {
    const docRef = doc(firestore, "notifications", id);
    await deleteDoc(docRef);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Notifications</h2>

      {/* Add Notification Form */}
      <div className="flex gap-2 mb-6 flex-col md:flex-row">
        <input
          type="text"
          placeholder="Notification Title"
          className="input input-bordered w-full"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Message"
          className="input input-bordered w-full"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />

        <button
          onClick={addNotification}
          className="btn btn-primary flex items-center gap-1"
        >
          <FiPlus /> Add
        </button>
      </div>

      {/* Notifications Table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Title</th>
              <th>Message</th>
              <th>Status</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {notifications.map((n) => (
              <tr key={n.id} className={`${n.read ? "opacity-60" : ""}`}>
                <td>{n.title}</td>
                <td>{n.message}</td>
                <td>
                  <span
                    className={`badge ${
                      n.read ? "badge-success" : "badge-warning"
                    }`}
                  >
                    {n.read ? "Read" : "Unread"}
                  </span>
                </td>
                <td>
                  {n.createdAt?.toDate
                    ? n.createdAt.toDate().toLocaleString()
                    : "..."}
                </td>
                <td className="flex gap-2">
                  <button
                    className="btn btn-sm btn-info flex items-center gap-1"
                    onClick={() => toggleRead(n.id, n.read)}
                  >
                    <FiCheckCircle /> {n.read ? "Mark Unread" : "Mark Read"}
                  </button>
                  <button
                    className="btn btn-sm btn-error flex items-center gap-1"
                    onClick={() => deleteNotification(n.id)}
                  >
                    <FiTrash2 /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
