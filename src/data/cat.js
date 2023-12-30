export const categories = [
  {
    Name: "Php",
    Description: "Le guide complet du développeur MMI",
    text: "PHP est un langage de programmation libre, principalement utilisé pour produire des pages Web dynamiques via un serveur HTTP, mais pouvant également fonctionner comme n'importe quel langage interprété de façon locale. PHP est un langage impératif orienté objet.",
    img: "https://www.php.net/images/logos/new-php-logo.svg",
    img2: "https://www.php.net/images/logos/php-logo.svg",
    base: [
      "Créer une variable : $nom_de_la_variable = valeur;",
      "Afficher une variable : echo $nom_de_la_variable;",
      "Afficher une variable avec du texte : echo 'texte'.$nom_de_la_variable.'texte';",
      "Creer une fonction : function nom_de_la_fonction() { }",
      "Afficher une fonction : nom_de_la_fonction();",
      "Afficher une fonction avec un paramètre : nom_de_la_fonction($parametre);",
      "Creer un tableau : $nom_du_tableau = array() || $nom_du_tableau = [];",
      "Creer un tableau avec des valeurs : $nom_du_tableau = array(valeur1, valeur2) || $nom_du_tableau = [valeur1, valeur2];",
      "Afficher un tableau : echo $nom_du_tableau[0];",
      "Afficher un tableau avec une boucle : foreach ($nom_du_tableau as $valeur) { echo $valeur; }",
      "Afficher un tableau avec une boucle et sa clé : foreach ($nom_du_tableau as $cle => $valeur) { echo $cle.' : '.$valeur; }",
      "Boucle for : for ($i = 0; $i < 10; $i++) { echo $i; }",
      "Boucle while : while ($i < 10) { echo $i; $i++; }",
      "Boucle do while : do { echo $i; $i++; } while ($i < 10);",
      "Condition if : if (condition) { }",
      "Condition if else : if (condition) { } else { }",
      "Condition if else if : if (condition) { } else if (condition) { }",
      "Condition switch case : switch ($variable) { case 'valeur': break; default: break; }",
      "Pour supprimer une variable : unset($nom_de_la_variable);",
    ],
    tips: ["Empty"],
  },
  {
    Name: "Javascript",
    Description: "Le guide complet du développeur MMI",
    text: "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs avec l'utilisation (par exemple) de Node.js. C'est un langage orienté objet à prototype, c'est-à-dire que les bases du langage et ses principales interfaces sont fournies par des objets qui ne sont pas des instances de classes, mais qui sont chacun équipés de constructeurs permettant de créer leurs propriétés, et notamment une propriété de prototypage qui permet d'en créer des objets héritiers personnalisés. En outre, les fonctions sont des objets de première classe. Le langage supporte le paradigme objet, impératif et fonctionnel.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png",
    img2: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
    base: [
      "Créer une variable : let nom_de_la_variable = valeur;",
      "Afficher une variable : console.log(nom_de_la_variable);",
      "Afficher une variable avec du texte : console.log(`texte ${nom_de_la_variable} texte`);",
      "Creer une fonction : function nom_de_la_fonction() { }",
      "Afficher une fonction : nom_de_la_fonction();",
      "Afficher une fonction avec un paramètre : nom_de_la_fonction(parametre);",
      "Creer un tableau : let nom_du_tableau = [];",
      "Creer un tableau avec des valeurs : let nom_du_tableau = [valeur1, valeur2];",
      "Afficher un tableau : console.log(nom_du_tableau[0]);",
      "Afficher un tableau avec une boucle : nom_du_tableau.forEach((valeur) => { console.log(valeur); });",
      "Afficher un tableau avec une boucle et sa clé : nom_du_tableau.forEach((cle, valeur) => { console.log(cle+' : '+valeur); });",
      "Boucle for : for (let i = 0; i < 10; i++) { console.log(i); }",
      "Boucle while : let i = 0; while (i < 10) { console.log(i); i++; }",
      "Boucle do while : let i = 0; do { console.log(i); i++; } while (i < 10);",
      "Condition if : if (condition) { }",
      "Condition if else : if (condition) { } else { }",
      "Condition if else if : if (condition) { } else if (condition) { }",
      "Condition switch case : switch (variable) { case 'valeur': break; default: break; }",
      "Pour supprimer une variable : delete nom_de_la_variable;",
    ],
    tips: ["Empty"],
  },
  {
    Name: "Html",
    Description: "Le guide complet du développeur MMI",
    text: "HTML (HyperText Markup Language) est un format de données conçu pour représenter les pages web. C’est un langage de balisage permettant d’écrire de l’hypertexte, d’où son nom. HTML permet également de structurer sémantiquement et logiquement et de mettre en forme le contenu des pages, d’inclure des ressources multimédias dont des images, des formulaires de saisie, et des programmes informatiques. Il permet de créer des documents interopérables avec des équipements très variés de manière conforme aux exigences de l’accessibilité du web. Il est souvent utilisé conjointement avec le langage de programmation JavaScript et des feuilles de style en cascade (CSS).",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/480px-HTML5_logo_and_wordmark.svg.png",
    img2: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/480px-CSS3_logo_and_wordmark.svg.png",
  },
  {
    Name: "Css",
    Description: "Le guide complet du développeur MMI",
    text: "CSS (Cascading Style Sheets, en français feuilles de style en cascade) est un langage informatique utilisé pour la mise en forme des pages web. CSS fut créé par le W3C pour remplacer les anciennes méthodes de mise en forme des pages web codées en HTML, c'est-à-dire en utilisant des balises spécifiques (comme <font>, <i>, <center>, etc.).",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/480px-HTML5_logo_and_wordmark.svg.png",
    img2: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/480px-CSS3_logo_and_wordmark.svg.png",
  },
  {
    Name: "Mysql",
    Description: "Le guide complet du développeur MMI",
    text: "MySQL est un système de gestion de bases de données relationnelles (SGBDR). Il est distribué sous une double licence GPL et propriétaire. Il fait partie des logiciels de gestion de base de données les plus utilisés au monde, autant par le grand public (applications web principalement) que par des professionnels, en concurrence avec Oracle, Informix et Microsoft SQL Server.",
    img: "https://upload.wikimedia.org/wikipedia/fr/thumb/6/62/MySQL.svg/langfr-220px-MySQL.svg.png",
    img2: "https://upload.wikimedia.org/wikipedia/fr/thumb/6/62/MySQL.svg/langfr-220px-MySQL.svg.png",
    base: [
      "Créer une base de données : CREATE DATABASE nom_de_la_base;",
      "Utiliser une base de données : USE nom_de_la_base;",
      "Afficher les bases de données : SHOW DATABASES;",
      "Afficher les tables d'une base de données : SHOW TABLES;",
      "Afficher les colonnes d'une table : SHOW COLUMNS FROM nom_de_la_table;",
      "Afficher les données d'une table : SELECT * FROM nom_de_la_table;",
      "Afficher les données d'une table avec une condition : SELECT * FROM nom_de_la_table WHERE condition;",
      "Afficher les données d'une table avec un tri : SELECT * FROM nom_de_la_table ORDER BY colonne;",
      "Afficher les données d'une table avec un tri descendant : SELECT * FROM nom_de_la_table ORDER BY colonne DESC;",
      "Afficher les données d'une table avec une limite : SELECT * FROM nom_de_la_table LIMIT nombre;",
      "Pour supprimer une base de données : DROP DATABASE nom_de_la_base;",
      "Pour supprimer une table : DROP TABLE nom_de_la_table;",
      "Pour supprimer une colonne : ALTER TABLE nom_de_la_table DROP COLUMN nom_de_la_colonne;",
      "Pour supprimer une ligne : DELETE FROM nom_de_la_table WHERE condition;",
    ],
    tips: ["Empty"],
  },
  {
    Name: "Git",
    Description: "Le guide complet du développeur MMI",
    text: "Git est un logiciel de gestion de versions décentralisé. C'est un logiciel libre créé par Linus Torvalds, auteur du noyau Linux, et distribué selon les termes de la licence publique générale GNU version 2. En 2016, il s'agit du logiciel de gestion de versions le plus populaire qui est utilisé par plus de douze millions de personnes.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/langfr-220px-Git-logo.svg.png",
    img2: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/langfr-220px-Git-logo.svg.png",
  },
];
