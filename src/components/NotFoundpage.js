import React from "react";
import error from "./404.png";

function NotFoundpage() {
  return (
    <div
      style={{
        display: "flex",
        height: "90vh",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          fontSize: 200,
        }}
      >
        404
      </h1>
      <h1 style={{
          fontSize: 50,
        }}> Page Not Found</h1>
        <p>You might have entered the broken URL.</p>
    </div>
  );
}

export default NotFoundpage;
