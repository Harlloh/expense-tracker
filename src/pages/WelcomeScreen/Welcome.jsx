import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Typography } from "@mui/material";

export default function Welcome() {
  return (
    <Link to="login" className="splash-screen">
      <Typography variant="h2" className="splash-text">
        mono
      </Typography>
    </Link>
  );
}
