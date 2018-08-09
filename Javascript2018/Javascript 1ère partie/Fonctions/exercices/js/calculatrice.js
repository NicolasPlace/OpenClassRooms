//https://openclassrooms.com/courses/apprenez-a-coder-avec-javascript/modularisez-votre-code-grace-aux-fonctions
//Complétez le programme calculatrice.js ci-dessous pour que la fonction calculer()
//gère les 4 opérations mathématiques de base : addition, soustraction, multiplication et division.

// TODO : écrire la fonction calculer()

function calculer(a,b,c){
  if(b == "+"){
    return(a + c);
  }else if(b == "-"){
    return(a - c);
  }else if(b == "*"){
    return(a * c);
  }else if(b == "/"){
    return(a/c);
  }
}

console.log(calculer(4, "+", 6)); // Doit afficher 10
console.log(calculer(4, "-", 6)); // Doit afficher -2
console.log(calculer(2, "*", 0)); // Doit afficher 0
console.log(calculer(12, "/", 0)); // Doit afficher Infinity
