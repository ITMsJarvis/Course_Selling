import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const ProtectedComponent = () => {
  let hasToken = localStorage.getItem("token");

  console.log("I am here");
  if (hasToken) {
    return <Outlet></Outlet>;
  } else {
    return <div>Enter Correct Credentials</div>;
  }
};

export default ProtectedComponent;
