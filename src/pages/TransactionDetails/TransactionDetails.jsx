import React from "react";
import "./TransactionDetails.css";
import TopBar from "../../components/TopBar";
import {
  FaAngleDoubleUp,
  FaAngleUp,
  FaArrowDown,
  FaArrowUp,
} from "react-icons/fa";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import { useParams } from "react-router-dom";
import { useGetDate } from "../../hooks/useGetDate";

export default function TransactionDetails() {
  const { id } = useParams();
  const { formatDate } = useGetDate();

  const { transactions } = useGetTransactions();

  const transaction = transactions.find((data) => data.id === id);
  if (!transaction) {
    return (
      <div>
        <TopBar p="Transaction Details" />
        <div className="details-element">
          <p>Transaction not found</p>
        </div>
      </div>
    );
  }
  const { name, amount, transactionType, description, createAt } = transaction;
  const transactionAmount = Number(transaction.amount).toLocaleString();
  const date = formatDate(createAt);
  return (
    <div>
      <TopBar p="Transaction Details" />
      <div className="details-element">
        <div className="details-head">
          <span>
            {transactionType === "income" ? (
              <FaArrowDown color="#438883" />
            ) : (
              <FaArrowUp color="#F95B51" />
            )}
          </span>
          <p
            className={
              transactionType === "income" ? "headIncome" : "headExpense"
            }
          >
            {transactionType}
          </p>
          <h3>$ {transactionAmount}</h3>
        </div>
        <div className="details">
          <span className="LHS">
            <h4>Transaction Detail</h4>
            <p>Status</p>
            <p>{transactionType === "income" ? "From" : "To"}</p>
            <p>Date</p>
          </span>
          <span className="RHS">
            <FaAngleUp />
            <p
              className="status"
              style={{
                color: transactionType === "income" ? "#438883" : "#F95B51",
              }}
            >
              {transactionType}
            </p>
            <p>{name}</p>
            <p>{date}</p>
          </span>
        </div>
        <span>
          <p className="LHS">Description:</p>
          <p className="RHS">{description}</p>
        </span>
      </div>
    </div>
  );
}
