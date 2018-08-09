//https://openclassrooms.com/courses/apprenez-a-coder-avec-javascript/repetez-des-instructions
//exercice tournez manège

//moi
var tours = Number(prompt("combien de tours veut-tu faire ?"));
for(var i =1; i<=tours ; i++){
  console.log("C'est le tour numéro " + i);
}

//correction
var nbTours = Number(prompt("Combien de tours veux-tu faire, mon petit ?"));

for (var tour = 1; tour <= nbTours; tour++) {
    console.log("C'est le tour numéro " + tour);
}

//moi
var tour = Number(prompt("combien de tours veut-tu faire ?"));
var i =1;
while(i<=tour){
  console.log("C'est le tour numéro " + i);
  i++;
}


//correction
var nbTours = Number(prompt("Combien de tours veux-tu faire, mon petit ?"));

var tour = 1;
while (tour <= nbTours) {
    console.log("C'est le tour numéro " + tour);
    tour++;
}
