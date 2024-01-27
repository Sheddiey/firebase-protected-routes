// eslint-disable-next-line no-unused-vars
import React from "react";
import { UserAuth } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to={"/"} />;
  }
  return children;
};

export default ProtectedRoute;
