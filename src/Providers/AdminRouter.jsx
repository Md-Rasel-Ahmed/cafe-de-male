import React, { Children, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router";

export default function AdminRouter({ children }) {
  const { user, loading } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(
      "https://cafe-de-male-server-msxdx3d8j-md-rasel-ahmeds-projects.vercel.app/users"
    )
      .then((res) => res.json())
      .then((data) => {
        const findAdmin = data?.find((u) => u.email === user?.email);
        setUsers(findAdmin);
      });
  }, [user?.email]);

  //   const location = useLocation();
  if (users?.role === "admin") {
    return children;
  } else {
    navigate("/profile");
  }
  //   if (loading)
  //     return (
  //       <div className="mt-10 min-h-screen flex justify-center items-center">
  //         <span className="loading loading-bars loading-xl text-[#F43098]"></span>
  //       </div>
  //     );
}
