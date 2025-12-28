import { createContext, useEffect, useState } from "react";
import { auth } from "./../../firebase.init";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
const localurl = "http://localhost:5000/api";
const liveUrl = "https://cafe-de-male-server.onrender.com/api";

export const AuthContext = createContext(null);
export default function AuthProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState("user");
  const [creationTime, setCreationTime] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAdmin("");
        setUser(user);
        setLoading(false);
        const email = user.email;
        fetch(`${liveUrl}/users/${email}`)
          .then((res) => res.json())
          .then((data) => {
            // const findUser = data?.find((u) => u.email === user?.email);
            if (data.status === "blocked") {
              setUser(null);
              Swal.fire({
                icon: "error",
                title: "Sorry...",
                text: "You can,t login because your are blocked user!",
              });
            }
            setCreationTime(data.creationTime);
            setIsAdmin(data.role);
            setLoading(false);
            // setUsers(data);
          });
        // ...
      } else {
        setUser(null);
        // User is signed out
        // console.log("fdhf", user);
        setLoading(false);

        // ...
      }
      // setLoading(false);

      return () => {
        subscribe();
      };
    });
  }, []);
  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // login user
  const loginUser = (email, password) => {
    setLoading(true);
    fetch(`${liveUrl}/users/${email}`)
      .then((res) => res.json())
      .then((data) => {
        // const findUser = data?.find((u) => u.email === user?.email);
        console.log(data);
        if (data.status === "blocked") {
          setLoading(false);
          return Swal.fire({
            icon: "error",
            title: "Sorry...",
            text: "You can,t login because your are blocked user!",
          });
        } else {
          return signInWithEmailAndPassword(auth, email, password);
        }
        // setCreationTime(data.creationTime);
        // setIsAdmin(data.role);
        // setUsers(data);
      });
  };
  // singout user
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  // Delete User form db
  const deleteUserFromDB = () => {
    deleteUser(user)
      .then(() => {
        // User deleted.
        console.log("user Delete");
      })
      .catch((error) => {
        // An error ocurred
        // ...
      });
  };
  const authInfo = {
    user,
    createUser,
    logOutUser,
    loginUser,
    loading,
    deleteUserFromDB,
    isAdmin,
    creationTime,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
