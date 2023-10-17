import React from "react";
import { NavLink } from "react-router-dom";
import { FaChartBar, FaHome, FaUser, FaWallet } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="homeNStat">
        <NavLink to="home">
          <FaHome />
        </NavLink>
        <NavLink to="stats">
          <FaChartBar />
        </NavLink>
      </div>
      <div className="profileNwallet">
        <NavLink to="wallet">
          <FaWallet />
        </NavLink>
        <NavLink to="profile">
          <FaUser />
        </NavLink>
      </div>
    </div>
  );
}
