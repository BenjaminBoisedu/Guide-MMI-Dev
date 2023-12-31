import React from "react";
import "./Css/categorie.css";
import { Link, useParams } from "react-router-dom";
import { categories } from "../data/cat";

export default function Chap() {
  const { Name, chap } = useParams();
  const foundCategory = categories.find((catégorie) => catégorie.Name === Name);
  const foundChap = foundCategory.chaps.find((chapitre) => chapitre === chap);
  if (!foundCategory) {
    return <h1>Catégorie non trouvée</h1>;
  }
  if (!foundChap) {
    return <h1>Chapitre non trouvé</h1>;
  }
  return (
    <div>
      <h1>Chapitre : {chap}</h1>
      <h2>Les aides de {foundCategory.Name}</h2>
      <ul>
        {foundCategory[chap].map((chap) => (
          <li key={chap}>{chap}</li>
        ))}
      </ul>
      <h2>Les tips {foundCategory.Name}</h2>

      <p>{foundCategory.tips}</p>
      <Link to={`/catégories/${foundCategory.Name}`}>Retour</Link>
    </div>
  );
}
