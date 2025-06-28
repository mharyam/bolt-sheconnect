import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./screens/Home";
import { Archive } from "./screens/Archive";
import { Submit } from "./screens/Submit";
import { About } from "./screens/About";

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
    path: "/submit",
    element: <Submit />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/*",
    element: <Home />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};