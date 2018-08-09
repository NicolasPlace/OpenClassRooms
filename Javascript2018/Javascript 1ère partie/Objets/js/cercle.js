//Complétez le programme cercle.js ci-dessous pour ajouter
// la définition de l'objet cercle. La valeur de son rayon est saisie par l'utilisateur.

var r = Number(prompt("Entrez le rayon d'un cercle :"));


// TODO : ajoutez ici la définition de l'objet cercle
var cercle = {
  rayon : r,
  perimetre :function(){
    var perimetreCercle = 2 * this.rayon * Math.PI ;
    return perimetreCercle;
  },
  aire : function(){
    var aireCercle = Math.PI * this.rayon * this.rayon;
    return aireCercle;
  }
}

console.log("Son périmètre vaut " + cercle.perimetre());

console.log("Son aire vaut " + cercle.aire());
