import React from "react";
import "./ExpenseButton.css";
import { FaPlus, FaPlusCircle } from "react-icons/fa";

export default function ExpenseButton() {
  return (
    <div className="expense-btn-div">
      <FaPlus className="expense-btn" />
    </div>
  );
}
