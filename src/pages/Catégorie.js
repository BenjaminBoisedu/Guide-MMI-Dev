import React from "react";
import { Link, useParams } from "react-router-dom";
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
      <div className="aide">
        <h2>Les aides de {foundCategory.Name}</h2>
        <ul className="categorie">
          {foundCategory.chap.map((aide) => (
            <Link to={`/catégories/${foundCategory.Name}/${aide}`}>
              <li>{aide}</li>
            </Link>
          ))}
        </ul>
        {/* <h2>Les bases de {foundCategory.Name}</h2>
        <ul className="Base">
          {foundCategory.base.map((base) => (
            <li>{base}</li>
          ))}
        </ul> */}
      </div>
      <div className="tips">
        <h2>Les tips {foundCategory.Name}</h2>
        <p>{foundCategory.tips}</p>
      </div>
    </>
  );
}
