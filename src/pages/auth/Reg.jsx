import React from "react";
import "./style.css";
import image from "../../assets/man.png";
import { auth, provider } from "../../config/firebase-config";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

export default function Reg() {
  const navigate = useNavigate();
  // const handleSignIn = async () => {
  // const result = await signInWithPopup(auth, provider);
  // console.log(result);
  // const userInfo = {
  //   userId: result.user.uid,
  //   name: result.user.displayName,
  //   email: result.user.email,
  //   profilePhoto: result.user.photoURL,
  //   isAuth: true,
  // };
  // Cookies.set("auth", JSON.stringify(userInfo));
  // if (userInfo.isAuth) {
  // }
  // navigate("signup");
  // };

  return (
    <div className="login-div">
      <div className="login-image-div">
        <img
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
          <Link to="/signup">Get Started</Link>
        </button>
        <p>
          Already have an account? <Link to="/login">Sign In here</Link>
        </p>
      </div>
    </div>
  );
}
