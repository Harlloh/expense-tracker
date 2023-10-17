import React from "react";
import { useGetDate } from "../hooks/useGetDate";
import { NavLink } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
useGetDate;
export default function TransactionCard({ transaction }) {
  const { formatDate } = useGetDate();

  const { name, description, createAt, amount, id, transactionType } =
    transaction;

  const transactionAmount = Number(amount);

  const date = formatDate(createAt);
  return (
    <NavLink to={`/app/transactionDetails/${id}`} className="transactions">
      <Stack
        key={id}
        direction="row"
        className="transaction-list"
        gap=".2rem"
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Stack>
          <h4>{name}</h4>
          <p>{date}</p>
        </Stack>
        <Box>
          <Typography
            variant="h6"
            className="prices"
            style={{
              color: transactionType === "income" ? "#25A96" : "#F95B51",
            }}
          >
            $ {transactionAmount.toLocaleString()}
          </Typography>
        </Box>
      </Stack>
    </NavLink>
  );
}
