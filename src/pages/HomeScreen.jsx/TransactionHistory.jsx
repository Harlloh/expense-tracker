import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function TransactionHistory() {
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
        <Link to="#">see all</Link>
      </Stack>
      {/* TRANSACTION LIST */}
      <Stack direction={"column"}>
        <NavLink to="transactions/id" className="transactions">
          <Stack
            direction="row"
            className="transaction-list"
            gap=".2rem"
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Stack>
              <h4>Upwork</h4>
              <p>DateNTime</p>
            </Stack>
            <Box>
              <Typography variant="h6" className="prices">
                +$ 850,000
              </Typography>
            </Box>
          </Stack>
        </NavLink>
        <NavLink to="transactions/id" className="transactions">
          <Stack
            direction="row"
            className="transaction-list"
            sx={{ justifyContent: "space-between" }}
          >
            <Stack>
              <h4>Upwork</h4>
              <p>DateNTime</p>
            </Stack>
            <Box>
              <Typography variant="h6" className="prices">
                +$ 850,000
              </Typography>
            </Box>
          </Stack>
        </NavLink>
        <NavLink to="transactions/id" className="transactions">
          <Stack
            direction="row"
            className="transaction-list"
            sx={{ justifyContent: "space-between" }}
          >
            <Stack>
              <h4>Upwork</h4>
              <p>DateNTime</p>
            </Stack>
            <Box>
              <Typography variant="h6" className="prices">
                +$ 850,000
              </Typography>
            </Box>
          </Stack>
        </NavLink>
        <NavLink to="transactions/id" className="transactions">
          <Stack
            direction="row"
            className="transaction-list"
            sx={{ justifyContent: "space-between" }}
          >
            <Stack>
              <h4>Upwork</h4>
              <p>DateNTime</p>
            </Stack>
            <Box>
              <Typography variant="h6" className="prices">
                +$ 850,000
              </Typography>
            </Box>
          </Stack>
        </NavLink>
        <NavLink to="transactions/id" className="transactions">
          <Stack
            direction="row"
            className="transaction-list"
            sx={{ justifyContent: "space-between" }}
          >
            <Stack>
              <h4>Upwork</h4>
              <p>DateNTime</p>
            </Stack>
            <Box>
              <Typography variant="h6" className="prices">
                +$ 850,000
              </Typography>
            </Box>
          </Stack>
        </NavLink>
        <NavLink to="transactions/id" className="transactions">
          <Stack
            direction="row"
            className="transaction-list"
            sx={{ justifyContent: "space-between" }}
          >
            <Stack>
              <h4>Upwork</h4>
              <p>DateNTime</p>
            </Stack>
            <Box>
              <Typography variant="h6" className="prices">
                +$ 850,000
              </Typography>
            </Box>
          </Stack>
        </NavLink>
        <NavLink to="transactions/id" className="transactions">
          <Stack
            direction="row"
            className="transaction-list"
            sx={{ justifyContent: "space-between" }}
          >
            <Stack>
              <h4>Upwork</h4>
              <p>DateNTime</p>
            </Stack>
            <Box>
              <Typography variant="h6" className="prices">
                +$ 850,000
              </Typography>
            </Box>
          </Stack>
        </NavLink>
        <NavLink to="transactions/id" className="transactions">
          <Stack
            direction="row"
            className="transaction-list"
            sx={{ justifyContent: "space-between" }}
          >
            <Stack>
              <h4>Upwork</h4>
              <p>DateNTime</p>
            </Stack>
            <Box>
              <Typography variant="h6" className="prices">
                +$ 850,000
              </Typography>
            </Box>
          </Stack>
        </NavLink>
        <NavLink to="transactions/id" className="transactions">
          <Stack
            direction="row"
            className="transaction-list"
            sx={{ justifyContent: "space-between" }}
          >
            <Stack>
              <h4>Upwork</h4>
              <p>DateNTime</p>
            </Stack>
            <Box>
              <Typography variant="h6" className="prices">
                +$ 850,000
              </Typography>
            </Box>
          </Stack>
        </NavLink>
        <NavLink to="transactions/id" className="transactions">
          <Stack
            direction="row"
            className="transaction-list"
            sx={{ justifyContent: "space-between" }}
          >
            <Stack>
              <h4>Upwork</h4>
              <p>DateNTime</p>
            </Stack>
            <Box>
              <Typography variant="h6" className="prices">
                +$ 850,000
              </Typography>
            </Box>
          </Stack>
        </NavLink>
        <NavLink to="transactions/id" className="transactions">
          <Stack
            direction="row"
            className="transaction-list"
            sx={{ justifyContent: "space-between" }}
          >
            <Stack>
              <h4>Upwork</h4>
              <p>DateNTime</p>
            </Stack>
            <Box>
              <Typography variant="h6" className="prices">
                +$ 850,000
              </Typography>
            </Box>
          </Stack>
        </NavLink>
        <NavLink to="transactions/id" className="transactions">
          <Stack
            direction="row"
            className="transaction-list"
            sx={{ justifyContent: "space-between" }}
          >
            <Stack>
              <h4>Upwork</h4>
              <p>DateNTime</p>
            </Stack>
            <Box>
              <Typography variant="h6" className="prices">
                +$ 850,000
              </Typography>
            </Box>
          </Stack>
        </NavLink>
      </Stack>
    </div>
  );
}
