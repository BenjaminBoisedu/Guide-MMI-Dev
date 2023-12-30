import React from "react";
import { useParams } from "react-router-dom";
import { categories } from "../data/cat";

export default function Catégorie() {
  const { Name } = useParams();
  const foundCategory = categories.find((catégorie) => catégorie.Name === Name);
  if (!foundCategory) {
    return <h1>Catégorie non trouvée</h1>;
  }
  return (
    <>
      <p>
        {Name}
        {foundCategory.text}
      </p>
      <img src={foundCategory.img} alt={foundCategory.Name} width="500px" />
      <img src={foundCategory.img2} alt={foundCategory.Name} width="500px" />
    </>
  );
}
