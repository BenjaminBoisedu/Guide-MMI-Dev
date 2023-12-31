import React from "react";
import { Link, useParams } from "react-router-dom";
import { categories } from "../data/cat";
import { com } from "../data/cat";
import { audio } from "../data/cat";
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
      <div className="aide">
        <h2>Les Chapitres de {foundCategory.Name}</h2>
        <ul className="categorie" key={foundCategory.chaps}>
          {foundCategory.chaps.map((chap) => (
            <li key={chap}>
              <Link to={`/catégories/${Name}/${chap}`}>{chap}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Link to={`/`} id="Retour">
        Retour
      </Link>
    </>
  );
}
