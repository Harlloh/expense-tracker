import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../config/firebase-config";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      const res = await sendPasswordResetEmail(auth, email);
      alert("email reset sent");
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
        <h2>Welcome</h2>
        <p>Welcome back! Sign in to your account.</p>
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
      </form>
    </div>
  );
}
