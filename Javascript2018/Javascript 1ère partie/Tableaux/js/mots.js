//https://openclassrooms.com/courses/apprenez-a-coder-avec-javascript/stockez-vos-donnees-dans-des-tableaux

var mots = [];

while(mot != "stop"){
  var mot = prompt("Entrez un mot ou tapez stop pour arrêter :");
  if (mot !== "stop") {
       mots.push(mot);
   }
}
for(i=0 ; i<mots.length ; i++){
  console.log(mots[i]);
}
