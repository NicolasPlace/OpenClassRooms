//https://openclassrooms.com/courses/apprenez-a-coder-avec-javascript/ajoutez-des-conditions
//Ecrivez un programme qui fait saisir un nom de jour à l'utilisateur,
//puis affiche le nom du jour suivant. Les erreurs de saisie (jour incorrect) doivent être gérées.

//Jour suivant
var jour = prompt("Quel jour sommes-nous aujourd'hui ?")

/*
switch(jour){
  case "lundi":
      console.log("Demain, nous serons mardi");
      break;
  case "mardi":
      console.log("Demain, nous serons mercredi");
      break;
  case "mercredi":
      console.log("Demain, nous serons jeudi");
      break;
  case "jeudi":
      console.log("Demain, nous serons vendredi");
      break;
  case "vendredi":
      console.log("Demain, nous serons samedi");
      break;
  case "samedi":
      console.log("Demain, nous serons dimanche");
      break;
  case "dimanche":
      console.log("Demain, nous serons lundi");
      break;
  default:
      console.log("Je n'ai pas compris !");
    }
*/

var lendemain;

if (jour === "lundi"){
  lendemain = "mardi";
  console.log("Demain, nous serons " + lendemain);
}else if(jour === "mardi"){
  lendemain = "mercredi";
  console.log("Demain, nous serons " + lendemain);
}else if(jour === "mercredi"){
  lendemain = "jeudi";
  console.log("Demain, nous serons " + lendemain);
}else if(jour === "jeudi"){
  lendemain = "vendredi";
  console.log("Demain, nous serons " + lendemain);
}else if(jour === "vendredi"){
  lendemain = "samedi";
  console.log("Demain, nous serons " + lendemain);
}else if(jour === "samedi"){
  lendemain = "dimanche";
  console.log("Demain, nous serons " + lendemain);
}else if(jour === "dimanche"){
  lendemain = "lundi";
  console.log("Demain, nous serons " + lendemain);
}else {
  console.log("Je n'ai pas compris")
}
