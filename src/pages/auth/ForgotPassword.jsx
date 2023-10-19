import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../config/firebase-config";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      const res = await sendPasswordResetEmail(auth, email);
      alert("email for password reset has been sent succefully.");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="register">
      <div className="shapee1"></div>
      <div className="shapee2"></div>
      <form
        action=""
        onSubmit={handlePasswordReset}
        // onSubmit={handleSignInWithEmail}
      >
        <h2>Forgot password</h2>
        <p>Reset your password</p>
        <div className="input-formss">
          <div className="inputs">
            <input
              type="email"
              required
              placeholder="Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
            />
          </div>
        </div>
        <button type="submit">Reset Password</button>
        <p>
          Password reset succeful?,<Link to="/login">Sign in</Link>
        </p>
      </form>
    </div>
  );
}
