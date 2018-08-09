var prixHT = Number(prompt("Entrez votre prix :"));
var Taux = 19.6/100;

var prixTTC = prixHT + Taux * prixHT;
console.log("Le prix TTC est de " + prixTTC + "€");
