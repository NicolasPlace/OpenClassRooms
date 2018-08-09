var texte = prompt("saisissez un texte !");

while(texte !== "oui" && texte !== "non"){
  console.log("réessayez !");
  var texte = prompt("saisissez un texte !");
}
console.log("vous avez perdu");
