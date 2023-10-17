import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import { useGetDate } from "../../hooks/useGetDate";
import TransactionCard from "../../components/TransactionCard";

export default function TransactionHistory() {
  const { transactions } = useGetTransactions();

  const [sortedTransactions, setSortedTransactions] = useState([]);

  useEffect(() => {
    // Sort the transactions by createAt timestamp to display the most recent on top
    const sorted = [...transactions].sort((a, b) => b.createAt - a.createAt);
    setSortedTransactions(sorted);
  }, [transactions]);

  return (
    <div
      className="transactionHistory"
      style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
    >
      <Stack
        direction="row"
        width="100%"
        sx={{ justifyContent: "space-between" }}
        className="top"
      >
        <h4>Transactions History</h4>
      </Stack>
      {/* Show loading spinner while transactions are loading */}
      {Object.keys(sortedTransactions).length === 0 ? (
        <div>
          <h4>You have not tracked any expense/income yet</h4>
          <p>click the plus sign to add transactions</p>
          <CircularProgress color="primary" size={50} thickness={4} />
        </div>
      ) : (
        <Stack direction={"column"}>
          {sortedTransactions.map((transaction, index) => {
            return <TransactionCard transaction={transaction} />;
          })}
        </Stack>
      )}
    </div>
  );
}
