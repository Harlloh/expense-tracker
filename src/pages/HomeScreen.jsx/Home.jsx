import React from "react";
import Navbar from "../../components/Navbar";
import UserCard from "./UserCard";
import useGetDaytime from "../../hooks/useGetDaytime";
import "./home.css";
import TransactionHistory from "./TransactionHistory";
import ExpenseButton from "../ExpenseButton/ExpenseButton";

export default function Home() {
  const dayTime = useGetDaytime();

  return (
    <div className="HomeComponent">
      <div className="greetings">
        <p>{dayTime},</p>
        <h2>USER'S NAME</h2>
      </div>
      <UserCard />
      <TransactionHistory />
      <ExpenseButton />
    </div>
  );
}
