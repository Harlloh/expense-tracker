import React from "react";
import "./profile.css";
import {
  FaArrowLeft,
  FaFemale,
  FaTheRedYeti,
  FaUser,
  FaUserAlt,
} from "react-icons/fa";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import TopBar from "../../components/TopBar";
import { auth } from "../../config/firebase-config";
import { signOut } from "firebase/auth";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useAuthSignIn } from "../../hooks/useSignInUser";

export default function Profile() {
  const { name, email, profilePhoto } = useGetUserInfo();
  const { signUserOut } = useAuthSignIn();
  const navigate = useNavigate();
  const handleUserSignOut = async () => {
    try {
      await signUserOut();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="profile-div">
      <TopBar p="Profile" />
      <div className="image">
        <img
          src={profilePhoto ? profilePhoto : "../../assets/woman.png"}
          alt=""
        />
        <h3>{name}</h3>
        <p>{email} </p>
      </div>
      <button onClick={handleUserSignOut} className="btnes">
        Log Out
      </button>
    </div>
  );
}
