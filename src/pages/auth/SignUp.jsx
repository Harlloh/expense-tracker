import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase-config";
import "./style.css";
import { toast } from "react-toastify";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [create, setCreate] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    displayName: "", // Add displayName to the form data
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const onSignEmailSignUp = async (e) => {
    e.preventDefault();
    setCreate(true);
    setErrorMessage(null);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      // Update user's display name
      await updateProfile(userCredential.user, {
        displayName: formData.displayName,
      });

      await sendEmailVerification(auth.currentUser);

      toast.success(
        "Account created successfully. Verify your email by clicking the link sent to your email."
      );
      setCreate(false);
      navigate("/login");
    } catch (error) {
      setCreate(false);
      setErrorMessage(error.message);
      console.error(error);
    }
  };

  return (
    <div className="register">
      <div className="shapee1"></div>
      <div className="shapee2"></div>

      <form action="" onSubmit={onSignEmailSignUp}>
        <h2>Create a new account</h2>
        <p>Welcome! Sign up for a new account to get started.</p>
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
          <div className="inputs">
            <input
              type="text"
              required
              placeholder="Display name..."
              value={formData.displayName}
              onChange={handleChange}
              name="displayName"
            />
          </div>
        </div>
        {errorMessage && <p id="error-message">{errorMessage}</p>}

        <button type="submit">
          {create ? "Creating account..." : "Sign Up"}
        </button>
        <p>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </form>
    </div>
  );
}
