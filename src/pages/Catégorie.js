import React from "react";
import { useParams } from "react-router-dom";
import { categories } from "../data/cat";
import "./Css/categorie.css";

export default function Catégorie() {
  const { Name } = useParams();
  const foundCategory = categories.find((catégorie) => catégorie.Name === Name);
  if (!foundCategory) {
    return <h1>Catégorie non trouvée</h1>;
  }
  return (
    <>
      <div className="info">
        <div className="text">
          <h1 className="tilte">{Name}</h1>
          <p className="info">{foundCategory.text}</p>
        </div>
      </div>
      <div className="tips">
        <h2>Les bases de {foundCategory.Name}</h2>
        <p>{foundCategory.base}</p>
      </div>
      <div className="tips">
        <h2>Les tips {foundCategory.Name}</h2>
        <p>{foundCategory.tips}</p>
      </div>
    </>
  );
}
