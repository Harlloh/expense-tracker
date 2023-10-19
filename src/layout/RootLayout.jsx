import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Protected from "../components/Protected";

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
      {/* <Protected /> */}
      <Outlet />
    </Box>
  );
}
