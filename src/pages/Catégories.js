import "./Css/App.css";
import { Link } from "react-router-dom";
import { categories } from "../data/cat";
import { com } from "../data/cat";
import { audio } from "../data/cat";
function Catégories() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Les catégories</h1>
        <div className="Catégorie">
          {categories.map((catégorie) => (
            <div className="Catégorie" key={catégorie.Name}>
              <h2>{catégorie.Name}</h2>
              <p>{catégorie.Description}</p>
              {/* link */}
              <Link to={`/catégories/${catégorie.Name}`}>Voir plus</Link>
            </div>
          ))}
        </div>
        <div className="Catégorie">
          {com.map((catégorie) => (
            <div className="Catégorie" key={catégorie.Name}>
              <h2>{catégorie.Name}</h2>
              <p>{catégorie.Description}</p>
              {/* link */}
              <Link to={`/catégories/${catégorie.Name}`}>Voir plus</Link>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default Catégories;
