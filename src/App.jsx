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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route exact path="/" element={<RootLayout />}>
          <Route exact index element={<Welcome />} />
          <Route exact path="login" element={<Login />} />
          <Route exact path="home" element={<Home />} />
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
