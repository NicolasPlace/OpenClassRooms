// TODO : écrire la fonction compterElements
function compterElements(element){
  var nombreElts = document.querySelectorAll(element);
  var nombre = nombreElts.length;
  return nombre;
};




console.log(compterElements("p")); // Doit afficher 4
console.log(compterElements(".adjectif")); // Doit afficher 3
console.log(compterElements("p .adjectif")); // Doit afficher 3
console.log(compterElements("p > .adjectif")); // Doit afficher 2
