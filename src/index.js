import React from "react";
import ReactDOM from "react-dom/client";
import Catégorie from "./Catégorie";
import Header from "./Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Catégorie />
  </React.StrictMode>
);
