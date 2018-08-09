nombre = Number(prompt("Saisissez un nombre compris entre 2 et 9 :"));

if(nombre>=2 && nombre <=9){
  console.log("voici la table de multiplication de " + nombre);
  for(i = 1 ; i<= 10 ; i++){
    console.log(nombre + " x " + i + " = " + nombre*i)
  }
}else{
  nombre = Number(prompt("Saisissez un nombre compris entre 2 et 9 :"));
}
