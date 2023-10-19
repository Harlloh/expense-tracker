import React, { useState } from "react";
import {
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/HomeScreen.jsx/Home";
import Wallet from "../pages/wallet/Wallet";
import "./appLayout.css";
import AddTransaction from "../pages/AddTransaction/AddTransaction";
import Profile from "../pages/Profile/Profile";
import Stat from "../pages/Stat/Stat";
import TransactionDetails from "../pages/TransactionDetails/TransactionDetails";
import { useGetUserInfo } from "../hooks/useGetUserInfo";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

export default function AppLayout() {
  return (
    <div className="appLayout">
      <div className="shape">
        <svg
          className="circles1"
          xmlns="http://www.w3.org/2000/svg"
          width="157"
          height="197"
          viewBox="0 0 157 197"
          fill="none"
        >
          <path
            opacity="0.1"
            d="M-55 91C-55 149.542 -7.54219 197 51 197C109.542 197 157 149.542 157 91C157 32.4578 109.542 -15 51 -15C-7.54219 -15 -55 32.4578 -55 91ZM135.8 91C135.8 137.834 97.8337 175.8 51 175.8C4.16624 175.8 -33.8 137.834 -33.8 91C-33.8 44.1663 4.16624 6.2 51 6.2C97.8337 6.2 135.8 44.1663 135.8 91Z"
            fill="url(#paint0_linear_1_408)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_408"
              x1="130.5"
              y1="-12.5909"
              x2="-97.1591"
              y2="215.068"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" stop-opacity="0" />
              <stop offset="1" stop-color="white" stop-opacity="0.7" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          className="circles2"
          xmlns="http://www.w3.org/2000/svg"
          width="127"
          height="112"
          viewBox="0 0 127 112"
          fill="none"
        >
          <path
            opacity="0.1"
            d="M0 48.5C0 83.5701 28.4299 112 63.5 112C98.5701 112 127 83.5701 127 48.5C127 13.4299 98.5701 -15 63.5 -15C28.4299 -15 0 13.4299 0 48.5ZM114.3 48.5C114.3 76.5561 91.5561 99.3 63.5 99.3C35.4439 99.3 12.7 76.5561 12.7 48.5C12.7 20.4439 35.4439 -2.3 63.5 -2.3C91.5561 -2.3 114.3 20.4439 114.3 48.5Z"
            fill="url(#paint0_linear_1_409)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_409"
              x1="111.125"
              y1="-13.5568"
              x2="-25.2557"
              y2="122.824"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" stop-opacity="0" />
              <stop offset="1" stop-color="white" stop-opacity="0.7" />
            </linearGradient>
          </defs>
        </svg>{" "}
        <svg
          className="circles3"
          xmlns="http://www.w3.org/2000/svg"
          width="85"
          height="63"
          viewBox="0 0 85 63"
          fill="none"
        >
          <path
            opacity="0.1"
            d="M85 20.5C85 43.9721 65.9721 63 42.5 63C19.0279 63 0 43.9721 0 20.5C0 -2.9721 19.0279 -22 42.5 -22C65.9721 -22 85 -2.9721 85 20.5ZM8.5 20.5C8.5 39.2777 23.7223 54.5 42.5 54.5C61.2777 54.5 76.5 39.2777 76.5 20.5C76.5 1.72232 61.2777 -13.5 42.5 -13.5C23.7223 -13.5 8.5 1.72232 8.5 20.5Z"
            fill="url(#paint0_linear_1_410)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_410"
              x1="10.625"
              y1="-21.0341"
              x2="101.903"
              y2="70.2443"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" stop-opacity="0" />
              <stop offset="1" stop-color="white" stop-opacity="0.7" />
            </linearGradient>
          </defs>
        </svg>{" "}
      </div>
      <div className="content">
        <Outlet />
      </div>
      <Navbar />
    </div>
  );
}
