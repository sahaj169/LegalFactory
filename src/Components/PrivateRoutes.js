import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export const ClientPrivateRoute = ({ component: Component, ...rest }) => {
  const userInfo = useSelector((state) => state.user);

  return userInfo.authData && userInfo.authData.token && userInfo.authData.type==="Client" ? <Outlet /> : <Navigate to="/sign-in" />;
}

export const AdminPrivateRoute = ({ component: Component, ...rest }) => {
  
  const userInfo = useSelector((state) => state.user);
  
  return userInfo.authData && userInfo.authData.token && userInfo.authData.type==="Admin" ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default AdminPrivateRoute;
