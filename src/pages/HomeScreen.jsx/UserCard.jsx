import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export default function UserCard() {
  return (
    <div className="usercard">
      <div className="totalBalance">
        <p>Total Balance</p>
        <h2>$2,586.00</h2>
      </div>
      <div className="expenseNIncome">
        <div className="income">
          <span>
            <FaArrowDown />
            <p>Income</p>
          </span>
          <h2>$1,840.00</h2>
        </div>
        <div className="expense">
          <span>
            <FaArrowUp />
            <p>Expense</p>
          </span>
          <h2>$840.00</h2>
        </div>
      </div>
    </div>
  );
}
