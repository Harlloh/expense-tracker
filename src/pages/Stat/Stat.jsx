import React, { useState, useEffect } from "react";
import "./stat.css";
import TopBar from "../../components/TopBar";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import { CircularProgress, Stack } from "@mui/material";
import TransactionCard from "../../components/TransactionCard";
import Chart from "../chart/Chart";
import { addDays, subWeeks, subMonths, subYears, format } from "date-fns";
import SimpleChart from "../chart/Chart";

export default function Stat() {
  // Fetching the transactions using a custom hook
  const { transactions } = useGetTransactions();

  // State management for various UI elements
  const [selectedButton, setSelectedButton] = useState("day");
  const [sortedTransactions, setSortedTransactions] = useState([]);
  const [transactionType, setTransactionType] = useState("all");
  const [sortOrder, setSortOrder] = useState("desc"); // Default to descending order

  // useEffect(() => {
  //   // This effect runs whenever transactions, transactionType, or sortOrder changes

  //   // Filter and sort the transactions based on the selected transaction type and sorting order
  //   const filteredAndSorted = transactions
  //     .filter((transaction) => {
  //       // console.log(transaction);
  //       if (transactionType === "all") {
  //         return true; // Include all transaction types
  //       } else if (transactionType === "expense") {
  //         return transaction.transactionType === "expense";
  //       } else if (transactionType === "income") {
  //         return transaction.transactionType === "income";
  //       }
  //     })
  //     .sort((a, b) => {
  //       // Convert amount to a number to avoid errors
  //       const amountA = parseFloat(a.amount);
  //       const amountB = parseFloat(b.amount);

  //       if (sortOrder === "asc") {
  //         return amountA - amountB;
  //       } else {
  //         return amountB - amountA;
  //       }
  //     });
  //   setSortedTransactions(filteredAndSorted);
  // }, [transactions, transactionType, sortOrder]);

  //UPDATED USEEFFECT
  useEffect(() => {
    // This effect runs whenever transactions, transactionType, or sortOrder changes

    // Filter the transactions based on the selected transaction type
    let filteredTransactions = transactions;
    if (transactionType !== "all") {
      filteredTransactions = filteredTransactions.filter(
        (transaction) => transaction.transactionType === transactionType
      );
    }

    // Calculate the timeConstraint based on the selectedButton
    let timeConstraint;
    if (selectedButton === "day") {
      timeConstraint = addDays(new Date(), -1);
    } else if (selectedButton === "week") {
      timeConstraint = subWeeks(new Date(), 1);
    } else if (selectedButton === "month") {
      timeConstraint = subMonths(new Date(), 1);
    } else if (selectedButton === "year") {
      timeConstraint = subYears(new Date(), 1);
    }

    // Filter and sort the transactions based on createAt and sortOrder
    const filteredAndSorted = filteredTransactions
      .filter((transaction) => {
        const transactionCreatedAt = new Date(
          transaction.createAt.seconds * 1000
        );
        return transactionCreatedAt >= timeConstraint;
      })
      .sort((a, b) => {
        const createAtA = new Date(a.createAt.seconds * 1000);
        const createAtB = new Date(b.createAt.seconds * 1000);

        if (sortOrder === "asc") {
          return createAtA - createAtB;
        } else {
          return createAtB - createAtA;
        }
      });

    setSortedTransactions(filteredAndSorted);
  }, [transactions, transactionType, sortOrder, selectedButton]);

  // Function to toggle the sorting order (ascending or descending)
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };
  return (
    <div className="stat">
      {/* Rendering the top bar component */}
      <TopBar p="Statistics" color="black" />

      {/* Buttons for selecting a time interval (day, week, month, year) */}
      <div className="btns">
        <button
          className={selectedButton === "day" ? "selected-button" : ""}
          onClick={() => setSelectedButton("day")}
        >
          Day
        </button>
        <button
          className={selectedButton === "week" ? "selected-button" : ""}
          onClick={() => setSelectedButton("week")}
        >
          Week
        </button>
        <button
          className={selectedButton === "month" ? "selected-button" : ""}
          onClick={() => setSelectedButton("month")}
        >
          Month
        </button>
        <button
          className={selectedButton === "year" ? "selected-button" : ""}
          onClick={() => setSelectedButton("year")}
        >
          Year
        </button>
      </div>

      {/* Dropdown for selecting transaction type (All, Expense, Income) */}
      <select
        name="transactionType"
        id="transactionType"
        value={transactionType}
        onChange={(e) => setTransactionType(e.target.value)}
      >
        <option value="all">All</option>
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>
      <Chart
        // key={selectedButton} // Use the selectedButton value as the key
        selectedButton={selectedButton}
        sortedTransactions={sortedTransactions}
      />
      {/* Container for rendering transaction data and sorting options */}
      <div className="spending">
        {/* Sorting option: Top Spending (toggle sorting order) */}
        <div className="top-spending" onClick={toggleSortOrder}>
          <h3>Top Spending</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
          >
            {/* Sorting arrow SVG */}
            <path
              d="M7 14.5H3.5L8.75 19.75V2.25H7V14.5ZM12.25 4.875V19.75H14V7.5H17.5L12.25 2.25V4.875Z"
              fill="#666666"
            />
          </svg>{" "}
        </div>

        {/* Display loading or transaction data based on availability */}
        {Object.keys(sortedTransactions).length === 0 ? (
          <div>
            <p>loading...</p>
            <CircularProgress color="primary" size={50} thickness={4} />
          </div>
        ) : (
          <Stack
            direction={"column"}
            sx={{ height: "fit-content", overflowY: "scroll" }}
          >
            {/* Mapping and rendering individual TransactionCard components */}
            {sortedTransactions.map((transaction, index) => {
              return <TransactionCard transaction={transaction} key={index} />;
            })}
          </Stack>
        )}
      </div>
    </div>
  );
}
