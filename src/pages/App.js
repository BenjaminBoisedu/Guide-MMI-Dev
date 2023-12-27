import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function App() {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/catégories">Catégorie</Link>
      <Outlet />
      <Footer />
    </div>
  );
}
