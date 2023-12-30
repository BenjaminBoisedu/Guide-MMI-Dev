import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <div className="Global-App">
        <div className="Head">
          <h1>L'anti-sèche MMI</h1>
          <div className="Head-Text">
            <Link to="/">Accueil</Link>
            <Link to="/catégories">Catégories</Link>
          </div>
        </div>
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
