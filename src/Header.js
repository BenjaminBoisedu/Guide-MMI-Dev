import React from "react";
import ReactDOM from "react-dom/client";

export default function Header() {
  return (
    <div>
      <h1>L'anti-sèche MMI</h1>
      <nav>
        <a href="/">Accueil</a>
        <a href="/catégorie">Catégorie</a>
      </nav>
    </div>
  );
}
