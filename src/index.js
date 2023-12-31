import React from "react";
import ReactDOM from "react-dom/client";
import Catégories from "./pages/Catégories";
import Catégorie from "./pages/Catégorie";
import Chap from "./pages/Chap";
import App from "./pages/App";
import Index from "./pages/Index";
import Creator from "./pages/Creator";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/catégories", element: <Catégories /> },
      { path: "/catégories/:Name", element: <Catégorie /> },
      { path: "/catégories/:Name/:chap", element: <Chap /> },
      { path: "/about", element: <Creator /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
