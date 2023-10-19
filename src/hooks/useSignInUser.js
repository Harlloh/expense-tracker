// // Create a new file for your custom hook, e.g., useAuthSignIn.js

// import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import Cookies from "js-cookie";
// import { auth, provider } from "../config/firebase-config";

// export function useAuthSignIn() {
//   const navigate = useNavigate();
//   let userInfo;

//   const signInWithEmail = async (e, email, password) => {
//     e.preventDefault();
//     try {
//       const result = await signInWithEmailAndPassword(auth, email, password);
//       userInfo = {
//         userId: result.user.uid,
//         name: result.user.displayName,
//         email: result.user.email,
//         profilePhoto: result.user.photoURL,
//         verified: result.user.emailVerified,
//         isAuth: true,
//       };
//       Cookies.set("auth", JSON.stringify(userInfo));
//       if (result.user.emailVerified) {
//         navigate("/app/home");
//       } else {
//         toast.error("Please verify your email address");
//       }
//     } catch (error) {
//       console.error("Error while signing in with email and password:", error);
//     }
//   };

//   const signInWithGoogle = async () => {
//     try {
//       const result = await signInWithPopup(auth, provider);
//       userInfo = {
//         userId: result.user.uid,
//         name: result.user.displayName,
//         email: result.user.email,
//         profilePhoto: result.user.photoURL,
//         verified: result.user.emailVerified,
//         isAuth: true,
//       };
//       Cookies.set("auth", JSON.stringify(userInfo));
//       if (userInfo.verified) {
//         navigate("/app/home");
//       } else {
//         toast.error("Please verify your email address");
//       }
//     } catch (error) {
//       console.error("Error while signing in with Google:", error);
//     }
//   };

//   return { signInWithEmail, signInWithGoogle };
// }

import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { auth, provider } from "../config/firebase-config";
import { useState } from "react";

export function useAuthSignIn() {
  const navigate = useNavigate();
  const [create, setCreate] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  let userInfo;

  const signInWithEmail = async (e, email, password) => {
    setErrorMessage(null);
    setCreate(true);
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      userInfo = {
        userId: result.user.uid,
        name: result.user.displayName,
        email: result.user.email,
        profilePhoto: result.user.photoURL,
        verified: result.user.emailVerified,
        isAuth: true,
      };
      Cookies.set("auth", JSON.stringify(userInfo));
      if (result.user.emailVerified) {
        navigate("/app/home");
      } else {
        toast.error("Please verify your email address");
      }
      setCreate(false);
    } catch (error) {
      setCreate(false);
      setErrorMessage(error.message);
      console.error("Error while signing in with email and password:", error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      userInfo = {
        userId: result.user.uid,
        name: result.user.displayName,
        email: result.user.email,
        profilePhoto: result.user.photoURL,
        verified: result.user.emailVerified,
        isAuth: true,
      };
      Cookies.set("auth", JSON.stringify(userInfo));
      if (userInfo.verified) {
        navigate("/app/home");
      } else {
        toast.error("Please verify your email address");
      }
    } catch (error) {
      console.error("Error while signing in with Google:", error);
    }
  };

  const signUserOut = async () => {
    try {
      await signOut(auth);
      Cookies.remove("auth");
      userInfo = { isAuth: false };
    } catch (error) {
      console.error("Error while signing out:", error);
    }
  };

  return {
    signInWithEmail,
    signInWithGoogle,
    signUserOut,
    create,
    errorMessage,
  };
}
