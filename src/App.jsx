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
import Protected from "./components/Protected";
import SignUp from "./pages/auth/SignUp";
import Reg from "./pages/auth/Reg";
import ForgotPassword from "./pages/auth/ForgotPassword";
import NotFound from "./pages/auth/NotFound";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/* public pages */}
        <Route element={<RootLayout />}>
          <Route index element={<Welcome />} />
          <Route path="reg" element={<Reg />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgotPassword" element={<ForgotPassword />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* private pages */}
        <Route element={<Protected />}>
          <Route path="app/*" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="*" element={<NotFound />} />
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
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
