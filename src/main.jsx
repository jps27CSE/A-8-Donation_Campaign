import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/Root/Root";
import Donation from "./components/Donation/Donation";
import Statistics from "./components/Statistics/Statistics";
import Home from "./components/Home/Home";
import DonationDetails from "./components/DonationDetails/DonationDetails";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/donation", element: <Donation /> },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/donation-details/:id",
        element: <DonationDetails />,
        loader: () => fetch("../Data.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
