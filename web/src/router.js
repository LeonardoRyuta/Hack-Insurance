import { createBrowserRouter } from "react-router-dom";
import { SignIn, Claim, Subscribe } from "./pages";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />
  },
  {
    path: "subscribe",
    element: <Subscribe />
  },
  {
    path: "claim",
    element: <Claim />
  }
]);

export default router;