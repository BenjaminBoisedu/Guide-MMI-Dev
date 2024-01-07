import React from "react";
import { Link } from "react-router-dom";
import { creator } from "../data/creator.js";
import "../pages/Css/Creator.css";

export default function Creator() {
  return (
    <div className="About-Creator">
      <div className="Creator">
        <div className="Creator-Info">
          <h1>{creator.name}</h1>
          <img src={creator.img} alt="creator" className="img" />
          <ul className="Creator-Info-job">
            {creator.job.map((job) => (
              <li key={job}>{job}</li>
            ))}
          </ul>
          <div className="Creator-Info-etudes">
            <h3 className="etudes">{creator.etude}</h3>
            <h3 className="school">{creator.school}</h3>
          </div>
          <h3 className="age">{creator.age}</h3>
          <h4 className="equipe">@ L'anti-sèche MMI</h4>
          <div className="Creator-Info-Links">
            <div className="Creator-Info-Links-social">
              <a href={creator.Linkedin}>
                <img src="https://img.icons8.com/fluent/48/000000/linkedin.png" />
              </a>
              <a href={creator.Github}>
                <img src="https://img.icons8.com/fluent/48/000000/github.png" />
              </a>
              <a href={creator.Instagram}>
                <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" />
              </a>
            </div>
            <div className="Creator-Info-Links-back">
              <Link to="/">
                <h4>Retour</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
