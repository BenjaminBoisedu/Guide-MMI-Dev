import React from "react";
import { useParams } from "react-router-dom";
import { categories } from "../data/cat";
import "./Css/categorie.css";

export default function Chap() {
  const { Name } = useParams();
  return (
    <div>
      <h1>Chap</h1>
    </div>
  );
}
