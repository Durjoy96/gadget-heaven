import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./routes/ErrorPage";
import Statistics from "./routes/Statistics";
import Home from "./routes/Home/Home";
import Dashboard from "./routes/Dashboard";
import AllProducts from "./routes/Home/AllProducts";
import Smartphones from "./routes/Home/Smartphones";
import Details from "./components/DisplayProducts/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <AllProducts></AllProducts>,
            loader: () => fetch("/gadgetsData.json"),
          },
          {
            path: "/smartphones",
            element: <Smartphones></Smartphones>,
            loader: () => fetch("/gadgetsData.json"),
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/details/:productId",
        element: <Details></Details>,
        loader: () => fetch("/gadgetsData.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
