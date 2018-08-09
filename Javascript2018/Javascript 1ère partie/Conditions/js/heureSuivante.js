//https://openclassrooms.com/courses/apprenez-a-coder-avec-javascript/ajoutez-des-conditions
//exercice heure suivante

var heure = Number(prompt('veuillez entrer une heure :'));
var minute = Number(prompt('veuillez entrer une minute :'));
var seconde = Number(prompt('veuillez entrer une seconde :'));

if(0 <= seconde && seconde <= 58){
  seconde++;
}else if(seconde == 59){
  if(0 <= minute && minute <= 58){
    minute++;
    seconde = 0 ;
  }else if(minute == 59){
    if(0<= heure && heure <= 22){
      heure++;
      minute = 00 ;
      seconde = 00;
    }else if(heure == 23){
      heure = 00;
      minute = 00;
      seconde = 00;
    }else{console.log("entrez une heure valable compris entre 0 et 23");}
  }else{console.log("entrez une minute valable entre 0 et 59");}
}else{console.log("entrez une seconde valable entre 0 et 59");}

console.log("Dans une seconde, il sera " + heure + " h " + minute + " min " +  seconde + " sec ")
