import { createContext, useEffect, useState } from "react";
import { auth } from "./../../firebase.init";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
        const uid = user.uid;
        // ...
      } else {
        setUser(null);
        // User is signed out
        console.log("fdhf", user);
        setLoading(false);

        // ...
      }
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
    return signInWithEmailAndPassword(auth, email, password);
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
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
