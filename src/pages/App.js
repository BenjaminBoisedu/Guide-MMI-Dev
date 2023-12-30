import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <div className="Global-App">
        <div className="Head">
          <div className="Head-Text">
            <Link to="/">
              <h1>L'anti-sèche MMI</h1>
            </Link>
          </div>
        </div>
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
