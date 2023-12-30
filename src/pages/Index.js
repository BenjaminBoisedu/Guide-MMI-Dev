import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../data/cat";
import "./Css/index.css";
import "./Css/App.css";

export default function Index() {
  return (
    <div className="Body-App">
      <div className="App">
        <header className="App-header">
          <div className="Info">
            <h1>Qu'est ce que l'anti-sèche MMI</h1>
            <p className="Desc1">
              L'anti-sèche MMI est un site qui permet aux étudiants de MMI de
              trouver des anti-sèches pour les aider dans leurs études.
            </p>
            <p className="Desc2">
              Attention ! Les anti-sèches ne sont pas à utiliser pour tricher
              mais pour vous aider à comprendre.
            </p>
          </div>
          <div className="Catégories">
            {categories.map((catégorie, key) => (
              <div className="Catégorie" key={catégorie.Name}>
                <h2>{catégorie.Name}</h2>
                <p>{catégorie.Description}</p>
                {/* link */}
                <Link to={`/catégories/${catégorie.Name}`}>Voir plus</Link>
              </div>
            ))}
          </div>
        </header>
      </div>
    </div>
  );
}
