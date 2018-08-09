//Périmètre et aire d'un cercle (résultat à obtenir)

//Ecrivez un programme cercle.js qui contient deux fonctionsvperimetre() et aire()
//qui calculent respectivement le périmètre et l'aire d'un cercle à partir de son rayon.
//Testez vos fonctions avec un rayon saisi par l'utilisateur.

//La valeur du nombre π (Pi) peut s'obtenir en JavaScript en écrivantMath.PI
var rayonCercle = Number(prompt("Choisissez un rayon :"));


function perimetre(rayon){
  return (2 * Math.PI * rayon);
}

console.log(perimetre(rayonCercle));

function aire(rayon){
  return (Math.PI * rayon * rayon);
}


console.log(aire(rayonCercle));
