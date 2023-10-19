import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import "./style.css";
import { Img } from "react-image";
import image from "../../assets/man.png";
import { auth, provider } from "../../config/firebase-config";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { useAuthSignIn } from "../../hooks/useSignInUser";
// import { useSignInUser } from "../../hooks/useSignInUser";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [verifiedEmail, setVerifiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const navigate = useNavigate();
  const { signInWithEmail, signInWithGoogle, create, errorMessage } =
    useAuthSignIn();
  // const handleSignInWithGoogle = async () => {
  //   try {
  //     const result = await signInWithPopup(auth, provider);
  //     const userInfo = {
  //       userId: result.user.uid,
  //       name: result.user.displayName,
  //       email: result.user.email,
  //       profilePhoto: result.user.photoURL,
  //       verified: result.user.emailVerified,
  //       isAuth: true,
  //     };
  //     Cookies.set("auth", JSON.stringify(userInfo));
  //     console.log(result);
  //     if (result.user.emailVerified) {
  //       navigate("/app/home");
  //     } else {
  //       toast.error("Please verify your email address");
  //     }
  //   } catch (error) {
  //     console.error("Error while signing in with Google:", error);
  //   }
  // };
  const navigate = useNavigate();
  // const handleSignInWithEmail = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const result = await signInWithEmailAndPassword(
  //       auth,
  //       formData.email,
  //       formData.password
  //     );
  //     const userInfo = {
  //       userId: result.user.uid,
  //       name: result.user.displayName,
  //       email: result.user.email,
  //       profilePhoto: result.user.photoURL,
  //       verified: result.user.emailVerified,
  //       isAuth: true,
  //     };
  //     Cookies.set("auth", JSON.stringify(userInfo));

  //     if (result.user.emailVerified) {
  //       navigate("/app/home");
  //     } else {
  //       toast.error("Please verify your email address");
  //     }
  //   } catch (error) {
  //     console.error("Error while signing in with email and password:", error);
  //   }
  // };

  return (
    <div className="register">
      <div className="shapee1"></div>
      <div className="shapee2"></div>
      <form
        action=""
        onSubmit={(e) => signInWithEmail(e, formData.email, formData.password)}
        // onSubmit={handleSignInWithEmail}
      >
        <h2>Welcome</h2>
        <p>Welcome back! Sign in to your account.</p>
        <div className="input-formss">
          <div className="inputs">
            <input
              type="email"
              required
              placeholder="Email..."
              value={formData.email}
              onChange={handleChange}
              name="email"
            />
          </div>
          <div className="inputs">
            <span>
              <input
                type={showPassword ? "text" : "password"}
                required
                name="password"
                placeholder="Password..."
                value={formData.password}
                onChange={handleChange}
              />
              <div onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </div>
            </span>
          </div>
        </div>
        <p>
          <Link to="/forgotPassword">Forgot Password?</Link>
        </p>
        {errorMessage && <p id="error-message">{errorMessage}</p>}
        <button type="submit" disabled={verifiedEmail}>
          {create ? "Logging in..." : "Log in"}
        </button>
        <p>or</p>
        {/* <button onClick={handleSignInWithGoogle}>Sign in with Google</button> */}
        <button onClick={signInWithGoogle}>Sign in with Google</button>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
}
