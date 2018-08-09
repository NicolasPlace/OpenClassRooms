//https://openclassrooms.com/courses/apprenez-a-coder-avec-javascript/ajoutez-des-conditions

var moyenne = Number(prompt("Quelle est votre moyenne ?"));

if(moyenne <10){
  console.log("Vous êtes recalé !");
}else if(moyenne>=10 && moyenne<12){
  console.log("Vous êtes reçu !");
}else if(moyenne>=12){
  console.log("Vous êtes reçu avec mention");
}
