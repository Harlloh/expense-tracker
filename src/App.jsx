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
import Welcome from "./pages/HomeScreen/Welcome";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route exact path="/" element={<RootLayout />}>
          <Route exact index element={<Welcome />} />
          <Route exact path="login" element={<Login />} />
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
