var valeurs = [11, 14, 7, 2, 9, 10];

var maximum = valeurs[0];

for(i = 1 ; i < valeurs.length ; i++){
  if(valeurs[i] > maximum){
    maximum = valeurs[i];
  }
}


console.log("le maximum des éléments vaut " + maximum);
