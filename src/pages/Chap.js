import React from "react";
import "./Css/categorie.css";
import { Link, useParams } from "react-router-dom";
import { categories } from "../data/cat";

export default function Chap() {
  const { Name, aide } = useParams();
  const foundCategory = categories.find((catégorie) => catégorie.Name === Name);
  if (!foundCategory) {
    return <h1>Catégorie non trouvée</h1>;
  }

  return (
    <div>
      <h1>Chapitre : {aide}</h1>
      <p>{foundCategory.text}</p>
      <Link to={`/catégories/${foundCategory.Name}`}>Retour</Link>
    </div>
  );
}
