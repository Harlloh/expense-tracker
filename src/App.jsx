import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Welcome from "./pages/WelcomeScreen/Welcome";
import Login from "./pages//auth/Login";
import RootLayout from "./layout/RootLayout";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/HomeScreen.jsx/Home";
import Profile from "./pages/Profile/Profile";
import Stat from "./pages/Stat/Stat";
import AddTransaction from "./pages/AddTransaction/AddTransaction";
import Wallet from "./pages/wallet/Wallet";
import TransactionDetails from "./pages/TransactionDetails/TransactionDetails";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<RootLayout />}>
          <Route index element={<Welcome />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="app/*" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="stats" element={<Stat />} />
          <Route path="profile" element={<Profile />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="addTransaction" element={<AddTransaction />} />
          <Route
            path="transactionDetails/:id"
            element={<TransactionDetails />}
          />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
