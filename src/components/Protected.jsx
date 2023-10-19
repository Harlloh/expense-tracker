import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useGetUserInfo } from "../hooks/useGetUserInfo";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase-config";

const Protected = ({ children }) => {
  const location = useLocation();
  console.log(auth.currentUser);

  return auth.currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
export default Protected;
