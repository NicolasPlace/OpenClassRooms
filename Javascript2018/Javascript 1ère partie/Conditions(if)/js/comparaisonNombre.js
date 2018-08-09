//https://openclassrooms.com/courses/apprenez-a-coder-avec-javascript/ajoutez-des-conditions

//Ecrivez un programme qui fait saisir deux nombres puis compare leurs valeurs et affiche un message approprié
var nombre1 = Number(prompt("entrez un premier nombre :"));
var nombre2 = Number(prompt("entrez un second nombre :"));

if(nombre1 < nombre2){
  console.log(nombre1 + " est plus petit que " + nombre2);
}else if(nombre1 === nombre2){
  console.log(nombre1 + " est égal à " + nombre2);
}else{
  console.log(nombre1 + " est plus grand que " + nombre2);
}
