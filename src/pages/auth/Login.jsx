import React from "react";
import { Box, Stack } from "@mui/material";
import "./style.css";
import { Img } from "react-image";
import image from "../../assets/man.png";
import { auth, provider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const handleSignIn = async () => {
    // const result = await signInWithPopup(auth, provider);
    // const userInfo = {
    //   userId: result.user.uid,
    //   name: result.user.displayName,
    //   profilePhoto: result.user.photoURL,
    //   isAuth: true,
    // };
    // Cookies.set(userInfo);
    navigate("/home");
  };
  return (
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
        <button
          className="login-btn"
          style={{ margin: "0 20px" }}
          onClick={handleSignIn}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
