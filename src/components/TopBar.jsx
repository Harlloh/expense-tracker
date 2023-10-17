import React from "react";
import { FaArrowLeft, FaTheRedYeti } from "react-icons/fa";

export default function TopBar({ p, color }) {
  const Back = () => {
    window.history.back();
  };
  return (
    <div className="top">
      <FaArrowLeft onClick={Back} color={color || "white"} />
      <p style={{ color: color || "white" }}>{p}</p>
      <FaTheRedYeti color={color || "white"} size="35" />
    </div>
  );
}
