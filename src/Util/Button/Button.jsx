import React from "react";

const Button = ({ children, className = "" }) => {
  return (
    <button
      className={`p-3 px-4 rounded-md  ${className}"`}
      style={{ backgroundColor: "#fb7c29", color: "#fff" }}
    >
      {children}
    </button>
  );
};

export default Button;
