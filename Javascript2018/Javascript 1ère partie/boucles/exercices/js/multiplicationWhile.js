nb = Number(prompt("Saisissez un nombre compris entre 2 et 9 :"));


while(nb<2 || nb>9){
  nb = Number(prompt("Saisissez un nombre compris entre 2 et 9 :"));
}

console.log("voici la table de multiplication de " + nb);
var i=1;
while(i<= 10){
  console.log(nb + " x " + i + " = " + nb*i);
  i++;
}
