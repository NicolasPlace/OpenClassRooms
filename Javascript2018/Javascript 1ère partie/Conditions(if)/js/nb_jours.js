var mois = Number(prompt("entrez le numéro d'un mois"));

switch(mois){
  case 1:
      console.log("ce mois comporte 31 jours");
      break;
  case 2:
      console.log("ce mois comporte 28 jours");
      break;
  case "3":
      console.log("ce mois comporte 30 jours");
      break;
  case "4":
      console.log("ce mois comporte 31 jours");
      break;
  case "5":
      console.log("ce mois comporte 30 jours");
      break;
  case "6":
      console.log("ce mois comporte 31 jours");
      break;
  default:
      console.log("Je n'ai pas compris !");
    }
