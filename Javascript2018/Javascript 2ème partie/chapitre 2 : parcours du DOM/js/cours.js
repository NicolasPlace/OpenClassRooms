//on souhaite sélectionner le titre "Merveilles du monde antique"
console.log(document.body.childNodes[5].childNodes[1]);

var titresElts = document.getElementsByTagName("h2"); // Tous les titres h2, renvoie une liste
console.log(titresElts[0]); // Affiche le premier titre h2
console.log(titresElts.length); // Affiche 3
console.log(document.querySelector("h2"));//affiche le 1er h2

// Tous les éléments ayant la classe "merveilles"
var merveillesElts = document.getElementsByClassName("merveilles");//renvoie une liste
for (var i = 0; i < merveillesElts.length; i++) {
    console.log(merveillesElts[i]);
}

// Tous les éléments fils de l'élément d'identifiant "antiques" ayant la classe "existe"
console.log(document.getElementById("antiques").getElementsByClassName("existe").length); // Affiche 1

// Elément portant l'identifiant "nouvelles"
console.log(document.getElementById("nouvelles"));

// Tous les paragraphes
console.log(document.querySelectorAll("p").length); // Affiche 3
console.log(document.getElementsByTagName("p").length);//affiche 3 aussi

// Tous les paragraphes à l'intérieur de l'élément identifié par "contenu"
console.log(document.querySelectorAll("#contenu p").length); // Affiche 2
console.log(document.getElementById("contenu").getElementsByTagName("p").length);//affiche 2 aussi

// Tous les éléments ayant la classe "existe"
console.log(document.querySelectorAll(".existe").length); // Affiche 8
console.log(document.getElementsByClassName("existe").length);//affiche 8 aussi

// Tous les éléments fils de l'élément identifié par "antiques" ayant la classe "existe"
console.log(document.querySelectorAll("#antiques > .existe").length); // Affiche 1

// Le premier paragraphe
console.log(document.querySelector("p"));//querySelector affiche le 1er

// Le contenu HTML de l'élément identifié par "contenu"
console.log(document.getElementById("contenu").innerHTML);

// Le contenu textuel de l'élément identifié par "contenu"
console.log(document.getElementById("contenu").textContent);

// L'attribut href du premier lien
console.log(document.querySelector("a").getAttribute("href"));
console.log(document.querySelector("a").href);

// L'identifiant de la première liste
console.log(document.querySelector("ul").id);

// L'attribut href du premier lien
console.log(document.querySelector("a").href);

//hasAttribute pour vérifier si un attribut existe sur le premier lien
if (document.querySelector("a").hasAttribute("target")) {
    console.log("Le premier lien possède l'attribut target");
} else {
    console.log("Le premier lien ne possède pas l'attribut target");
}

console.log(document.querySelector("a").hasAttribute("target"));

// Liste des classes de l'élément identifié par "antiques"
var classes = document.getElementById("antiques").classList;//renvoie une liste
console.log(classes.length); // Affiche 1 : l'élément possède une seule classe
console.log(classes[0]); // Affiche "merveilles"
console.log(classes[1]);//renvoie undefined
