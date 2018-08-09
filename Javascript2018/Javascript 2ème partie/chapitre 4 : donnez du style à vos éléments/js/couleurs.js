var couleurTexte = prompt("Indiquez une couleur de texte :");
var couleurFond = prompt("Indiquez une couleur de fond :");

var divElts = document.getElementsByTagName("div");//renvoie une liste

for(var i = 0 ; i < divElts.length ; i++){
  divElts[i].style.color = couleurTexte;
  divElts[i].style.backgroundColor = couleurFond;

}
