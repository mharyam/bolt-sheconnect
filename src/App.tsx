import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./screens/Home";
import { Archive } from "./screens/Archive";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/archive",
    element: <Archive />,
  },
  {
    path: "/*",
    element: <Home />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};