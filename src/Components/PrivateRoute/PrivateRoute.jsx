import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const userData = JSON.parse(localStorage.getItem("yourInfo"));

  console.log(userData);

  if (
    userData.email &&
    userData?.role === "admin" &&
    userData?.emailVerified !== false
  ) {
    return children;
  }
  return <Navigate to="/signin" state={{ from: location }} />;
};

export default PrivateRoute;
