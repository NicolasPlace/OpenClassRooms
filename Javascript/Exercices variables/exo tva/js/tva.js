var PrixHT = Number(prompt("écrivez le prix hors-taxe : "));
var TauxTVA = 19.6/100;
var PrixTTC = PrixHT + PrixHT * TauxTVA;

alert("le prix TTC est de " + PrixTTC + " €");
