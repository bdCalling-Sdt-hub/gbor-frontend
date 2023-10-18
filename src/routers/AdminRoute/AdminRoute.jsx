import React from "react";
import { useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("yourInfo"));

  console.log(user);

  if (
    user.userInfo?.email &&
    user.userInfo?.role === "admin" &&
    user.userInfo?.emailVerified !== false
  ) {
    return children;
  }
  return <Navigate to="/signin" state={{ from: location }} />;
};

export default AdminRoute;
