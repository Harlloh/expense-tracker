import React from "react";
import { Box, Stack } from "@mui/material";
import "./style.css";
import { Img } from "react-image";
import image from "../../assets/man.png";

export default function Login() {
  return (
    // <div className="login-div">
    //   <Stack
    //     direction="column"
    //     gap="2rem"
    //     sx={{ background: " #FFF", width: "inherit" }}
    //   >
    //     <Box className="login-image-div">
    //       {/* Add a span element for the drop shadow */}
    //
    //       <span className="login-image-shadow"></span>
    //     </Box>
    //     <Stack direction="column">
    //       <h1 className="login-hero">
    //         Spend smarter <br /> save more
    //       </h1>
    //
    //     </Stack>
    //   </Stack>
    // </div>
    <div className="login-div">
      <div className="login-image-div">
        <Img
          src={image}
          alt=""
          className="login-image"
          // style={{ height: "10%", width: "60%" }}
        />
      </div>
      <div className="login-text-div">
        <h1 className="login-hero">
          Spend smarter <br /> save more
        </h1>
        <button className="login-btn" style={{ margin: "0 20px" }}>
          Get Started
        </button>
      </div>
    </div>
  );
}
