import React from "react";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("yourInfo"));

  if (
    user?.userInfo?.email &&
    user?.userInfo?.role === "admin" &&
    user?.userInfo?.emailVerified !== false
  ) {
    return children;
  }
  return <Navigate to="/signin" />;
};

export default AdminRoute;
