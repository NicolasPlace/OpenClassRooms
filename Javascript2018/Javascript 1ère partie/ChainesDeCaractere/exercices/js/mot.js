//https://openclassrooms.com/courses/apprenez-a-coder-avec-javascript/manipulez-les-chaines-de-caracteres

//Créez un programme mot.js qui fait saisir un mot à l'utilisateur, puis affiche quelques
//informations sur le mot saisi, comme dans l'exemple ci-dessous.


//Complétez le programme mot.js en y ajoutant une fonction compterNbVoyelles()
//qui prend un mot en paramètre et renvoie son nombre de voyelles.
// Utilisez cette fonction pour afficher le nombre de voyelles et de consonnes du mot.
function compterNbVoyelles(motChoisi){
  var nombreVoyelles = 0;
  for(var i = 0 ; i < motChoisi.length ; i++){
    if(motChoisi[i] === "a" || motChoisi[i] === "A" || motChoisi[i] === "e" ||
       motChoisi[i] === "E" || motChoisi[i] === "i" || motChoisi[i] === "I" ||
       motChoisi[i] === "o" || motChoisi[i] === "O" || motChoisi[i] === "u" ||
       motChoisi[i] === "U" || motChoisi[i] === "y" || motChoisi[i] === "Y" ){
         nombreVoyelles++;
       }
  }
  return nombreVoyelles;
}

//Complétez le programme mot.js avec une fonction inverser() qui prend en paramètre un mot
// et renvoie ce mot écrit à l'envers. Utilisez cette fonction pour afficher le mot inversé.
function inverser(motChoisi){
  var motInverse = "";
  for(i = motChoisi.length - 1 ; i >= 0 ; i--){
    motInverse += motChoisi[i];
  }
  return motInverse;
}

//fonction palindrome
function palindrome(motChoisi){
  if(inverser(motChoisi).toLowerCase() === motChoisi.toLowerCase()){
    return "Ce mot est un palindrome";
  }else{
    return "Ce mot n'est pas un palindrome";
  }
}

//Complétez le programme mot.js avec une fonction convertirEnLeetSpeak() qui prend en
//paramètre un mot et renvoie son équivalent leet. Utilisez cette fonction pour afficher le mot converti.

//Afin d'alléger le code de la fonction convertirEnLeetSpeak(), créez une
//autre fonction trouverLettreLeet() qui prend en paramètre une lettre et
//renvoie son équivalent leet. Cette fonction sera appelée pour chaque lettre du mot initial.
function trouverLettreLeet(lettre){
  switch(lettre.toLowerCase()){
    case "a":
      return "4";
      break;
    case "b":
      return "8";
      break;
    case "e":
      return "3";
      break;
    case "l":
      return "1";
      break;
    case "o":
      return "0";
      break;
    case "s":
      return "5";
      break;
    default:
      return lettre;
  }
}

function convertirEnLeetSpeak(motChoisi){
  var motLeet = "";
  for(i=0 ; i < motChoisi.length ; i++){
    motLeet += trouverLettreLeet(motChoisi[i]);
  }
  return motLeet;
}


//je demande un mot à l'utilisateur
var mot = prompt("veuillez entrer un mot :");
var longueurMot = mot.length;
var nombreVoyelles = compterNbVoyelles(mot);
var motInverse = inverser(mot);
var palindrome = palindrome(mot);
var motLeet = convertirEnLeetSpeak(mot);


console.log("Ce mot contient " + longueurMot + " caractères");
console.log("Il s'écrit en minuscules " + mot.toLowerCase());
console.log("Il s'écrit en majuscules " + mot.toUpperCase());
console.log("Il contient " + nombreVoyelles + " voyelles et " +
            (longueurMot - nombreVoyelles) + " consonnes" );
console.log("Il s'écrit à l'envers " + motInverse);
console.log(palindrome);
console.log("Il s'écrit en leet speak " + motLeet);
