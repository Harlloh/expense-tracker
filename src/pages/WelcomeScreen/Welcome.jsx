import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Typography } from "@mui/material";

export default function Welcome() {
  return (
    <Link
      to="login"
      className="splash-screen"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Typography variant="h2" className="splash-text">
        mono
      </Typography>
      <p>click anywhere to begin</p>
    </Link>
  );
}
