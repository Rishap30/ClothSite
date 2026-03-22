import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/signUp',
    element: <SignUp />
  }
])

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>

  )
}

export default App;