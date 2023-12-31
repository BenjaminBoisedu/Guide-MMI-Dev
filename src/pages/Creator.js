import React from "react";
import { Link } from "react-router-dom";
import { creator } from "../data/creator.js";

export default function Creator() {
  return (
    <div>
      <div className="Creator">
        <div className="Creator-Text">
          <h1>{creator.name}</h1>
          <h2>{creator.job}</h2>
          <h3>{creator.etude}</h3>
          <h3>{creator.school}</h3>
          <h3>{creator.age} ans</h3>
          <a href={creator.Linkedin}>
            <img src="https://img.icons8.com/fluent/48/000000/linkedin.png" />
          </a>
          <a href={creator.Github}>
            <img src="https://img.icons8.com/fluent/48/000000/github.png" />
          </a>
          <a href={creator.Instagram}>
            <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" />
          </a>
          <Link to="/">
            <h4>Retour</h4>
          </Link>
        </div>
        <div className="Creator-Img">
          <img src={creator.img} alt="creator" />
        </div>
      </div>
    </div>
  );
}
