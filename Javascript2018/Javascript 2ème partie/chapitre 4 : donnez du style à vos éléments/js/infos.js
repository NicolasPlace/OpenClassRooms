
var styleElement = getComputedStyle(document.getElementById("contenu"));//renvoie un objet représentant le style de "contenu"
var listeElt = document.createElement("ul");//crée la liste ul
var longueurElt = document.createElement("li");//crée un élément li
var hauteurElt = document.createElement("li");//crée un 2eme élément li
longueurElt.textContent = "Longueur : " + styleElement.width;//ajoute la longueur à longueurElt
hauteurElt.textContent = "Hauteur : " + styleElement.height;//ajoute la hauteur à hauteurElt
listeElt.appendChild(hauteurElt);//ajoute le li hauteur, à la liste ul
listeElt.appendChild(longueurElt);//ajoute le li longueur, à la liste ul (dernier enfant)
document.getElementById("infos").appendChild(document.createTextNode("Informations sur l'élément"));//ajoute le texte...
document.getElementById("infos").appendChild(listeElt);//...puis la liste
