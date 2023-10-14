import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <img src="https://www.creativefabrica.com/wp-content/uploads/2021/02/16/Illustration-concept-of-404-error-page-Graphics-8663539-1-580x386.png" />
      <Button className="border border-orange-500 text-orange-500">
        <Link to="/">Click here for go to home</Link>
      </Button>
    </div>
  );
}

export default NotFound;
