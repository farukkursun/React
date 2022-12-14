import React from "react";
import { Outlet, Navigate } from "react-router-dom";



const PrivateRouter = () => {
  return JSON.parse(localStorage.getItem("kullanici")) === "osman" &&
  JSON.parse(localStorage.getItem("kullanicipass")) === "1234" 
  ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};
// kullanıcı osman girdiyse rota ne diyorsa onu yap (Outlet), osman değilse Login de kal (<Navigate to="/" />)
export default PrivateRouter;
