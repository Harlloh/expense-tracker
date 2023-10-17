import React from "react";
import "./ExpenseButton.css";
import { FaPlus, FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ExpenseButton() {
  return (
    <div className="expense-btn-div">
      <Link to="/app/addTransaction">
        <FaPlus className="expense-btn" />
      </Link>
    </div>
  );
}
