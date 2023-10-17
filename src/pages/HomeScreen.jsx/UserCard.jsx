import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useGetTransactions } from "../../hooks/useGetTransactions";

export default function UserCard() {
  const { transactionTotals } = useGetTransactions();
  const { balance, expense, income } = transactionTotals;

  return (
    <div className="usercard">
      <div className="totalBalance">
        <p>Total Balance</p>
        {balance >= 0 ? (
          <h2>$ {balance.toLocaleString()}</h2>
        ) : (
          <h2>-${(balance * -1).toLocaleString()}</h2>
        )}
      </div>
      <div className="expenseNIncome">
        <div className="income">
          <span>
            <FaArrowDown />
            <p>Income</p>
          </span>
          <h2>$ {income.toLocaleString()}</h2>
        </div>
        <div className="expense">
          <span>
            <FaArrowUp />
            <p>Expense</p>
          </span>
          <h2>$ {expense.toLocaleString()}</h2>
        </div>
      </div>
    </div>
  );
}
