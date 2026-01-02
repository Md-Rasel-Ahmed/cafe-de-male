import { collection, addDoc, getDocs } from "firebase/firestore";
import { firestore } from "./firebase";

const addNotification = async (title, message) => {
  try {
    await addDoc(collection(firestore, "notifications"), {
      title,
      message,
      read: false,
      createdAt: new Date(),
    });
  } catch (err) {
    console.error(err);
  }
};
addNotification();
const fetchNotifications = async () => {
  const snapshot = await getDocs(collection(firestore, "notifications"));
  const notifications = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  console.log(notifications);
};
fetchNotifications();
