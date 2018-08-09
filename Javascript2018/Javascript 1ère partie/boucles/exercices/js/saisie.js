var nombre = 0 ;
nombre = Number(prompt("Saisissez un nombre inférieur à 100 :"));

while(nombre > 100){
  console.log("faux !");
   nombre = Number(prompt("Saisissez un nombre inférieur à 100 :"));
}
  console.log("nombre bien inférieur à 100");


  var nb = 0 ;
  nb = Number(prompt("Saisissez un nombre compris entre 50 et 100 :"));

  while(nb < 50 || nb >100){
    console.log("faux !");
     nb = Number(prompt("Saisissez un nombre compris entre 50 et 100 :"));
  }
    console.log("nombre bien compris entre 50 et 100");
