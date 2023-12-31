import React from "react";
import "./Css/categorie.css";
import { Link, useParams } from "react-router-dom";
import { categories } from "../data/cat";

export default function Chap() {
  const { Name, chap } = useParams();
  const foundCategory = categories.find((catégorie) => catégorie.Name === Name);
  if (!foundCategory) {
    return <h1>Catégorie non trouvée</h1>;
  }
  const foundChap = { chap };
  return (
    <div>
      <h1>Chapitre : {chap}</h1>
      <h2>Les aides de {foundCategory.Name}</h2>
      <p>{foundCategory.chaps[foundCategory.chaps.indexOf(foundChap.chap)]}</p>
      <Link to={`/catégories/${foundCategory.Name}`}>Retour</Link>
    </div>
  );
}
