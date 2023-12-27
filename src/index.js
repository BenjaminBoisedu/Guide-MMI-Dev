import React from "react";
import ReactDOM from "react-dom/client";
import Catégories from "./pages/Catégories";
import Footer from "./pages/Footer";
import Catégorie from "./pages/Catégorie";
import App from "./pages/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <h1>Les catégories</h1> },
      { path: "/home", element: <h1>Home page</h1> },
      { path: "/catégories", element: <Catégories /> },
      { path: "/catégories/:Name", element: <Catégorie /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
