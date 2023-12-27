import "./Css/App.css";
const Cat = [
  {
    Name: "Php",
    Description: "Le guide complet du développeur MMI",
  },
  {
    Name: "Javascript",
    Description: "Le guide complet du développeur MMI",
  },
  {
    Name: "Html",
    Description: "Le guide complet du développeur MMI",
  },
  {
    Name: "Css",
    Description: "Le guide complet du développeur MMI",
  },
  {
    Name: "Mysql",
    Description: "Le guide complet du développeur MMI",
  },
];

function Catégorie() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Catégories</h1>
        <ul>
          {Cat.map((cat) => (
            <li>
              <h2>{cat.Name}</h2>
              <p>{cat.Description}</p>
              <a href="/catégorie">Voir les articles</a>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default Catégorie;
