import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import UserCard from "./UserCard";
import useGetDaytime from "../../hooks/useGetDaytime";
import "./home.css";
import TransactionHistory from "./TransactionHistory";
import ExpenseButton from "../ExpenseButton/ExpenseButton";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import { useLocation, useNavigate } from "react-router-dom";

export default function Home() {
  const dayTime = useGetDaytime();
  const { name } = useGetUserInfo();
  return (
    <div className="HomeComponent">
      <div className="greetings">
        <p>{dayTime},</p>
        <h2>{name ? name : <p>Esteemed User</p>}</h2>
      </div>
      <UserCard />
      <TransactionHistory />
      <ExpenseButton />
    </div>
  );
}
