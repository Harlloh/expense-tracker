import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "lightgray 0% 0% / 100px 100px repeat",
      }}
    >
      <Outlet />
    </Box>
  );
}
