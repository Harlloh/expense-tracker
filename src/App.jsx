import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import RootLayout from "./layout/RootLayout";
import Login from "./pages/auth/Login";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Welcome from "./pages/WelcomeScreen/Welcome";
import Home from "./pages/HomeScreen.jsx/Home";
import AppLayout from "./layout/AppLayout";
import Wallet from "./pages/wallet/Wallet";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route exact path="/" element={<RootLayout />}>
          <Route exact index element={<Welcome />} />
          <Route exact path="login" element={<Login />} />
          <Route exact path="home" element={<AppLayout />} />
          {/* <Route exact path="wallet" element={<Wallet />} /> */}
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
