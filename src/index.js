import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouteProvider,
  Route,
  RouterProvider,
} from "react-router-dom";
import CompanyProfilePage from "./pages/CompanyProfilePage";
import ServicesPage from "./pages/ServicesPage";
import JoinTeamPage from "./pages/JoinTeamPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import AvailableJobsPage from "./pages/AvailableJobsPage";
import JobInformationPage from "./pages/JobInformationPage";
import ApplicationFormPage from "./pages/ApplicationFormPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/company-profile",
    element: <CompanyProfilePage />,
  },
  {
    path: "/services",
    element: <ServicesPage />,
  },
  {
    path: "/join-team",
    element: <JoinTeamPage />,
  },
  {
    path: "/confirmation",
    element: <ConfirmationPage />,
  },
  {
    path: "/available-jobs/:deptid",
    element: <AvailableJobsPage />,
  },
  {
    path: "/job-information/:jobid",
    element: <JobInformationPage />,
  },
  {
    path: "/application-form",
    element: <ApplicationFormPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
