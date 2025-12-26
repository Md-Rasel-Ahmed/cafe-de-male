import React, { Children, useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router";

export default function PrivateRouter({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(user, loading);

  if (loading)
    return (
      <div className="mt-10 min-h-screen flex justify-center items-center">
        <span className="loading loading-bars loading-xl text-[#F43098]"></span>
      </div>
    );
  return user?.email ? (
    children
  ) : (
    <Navigate to={"/login"} state={location.pathname}></Navigate>
  );
}
