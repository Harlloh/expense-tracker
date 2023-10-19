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
  // const [verifiedEmail, setVerifiedEmail] = useState(false);
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

  const { signInWithEmail, signInWithGoogle, create, errorMessage } =
    useAuthSignIn();

  return (
    <div className="register">
      <div className="shapee1"></div>
      <div className="shapee2"></div>
      <form
        action=""
        onSubmit={(e) => signInWithEmail(e, formData.email, formData.password)}
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
        <button type="submit">{create ? "Logging in..." : "Log in"}</button>
        <p>or</p>
        <button onClick={signInWithGoogle}>Sign in with Google</button>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
}
