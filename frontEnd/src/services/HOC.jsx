import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import AuthGuard from "../authGuard/authGuard";

const ProtectedComponent = () => {
return  <>
POC</>
};

export default AuthGuard(ProtectedComponent) ;
