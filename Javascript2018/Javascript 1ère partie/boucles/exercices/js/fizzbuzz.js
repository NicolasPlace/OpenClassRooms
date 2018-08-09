//Ecrivez un programme fizzbuzz.js qui affiche tous les nombres
//entre 1 et 100 avec les exceptions suivantes :
//Il affiche "Fizz" à la place du nombre si celui-ci est divisible par 3.
//Il affiche "Buzz" à la place du nombre si celui-ci est divisible par 5 et non par 3.
//Ensuite, améliorez votre programme pour qu'il affiche "FizzBuzz"
// à la place des nombres divisibles à la fois par 3 et par 5.

for(nombre=1 ; nombre<=100 ; nombre++){
  if((nombre % 3 === 0) && (nombre % 5 === 0)){
    console.log("FizzBuzz");
  }else if(nombre % 3 === 0){
    console.log("Fizz");
  }else if(nombre % 5 === 0){
    console.log("Buzz");
  }else{
    console.log(nombre);
  }
  }


  // Solution construisant le message à afficher par concaténation
  for (var nombre = 1; nombre <= 100; nombre++) {
      var message = ""; // Message à afficher, initialement vide
      if (nombre % 3 === 0) {
          // Nombre divisible par 3 : on ajoute "Fizz" au message
          message += 'Fizz';
      }
      if (nombre % 5 === 0) {
          // Nombre divisible par 5 : on ajoute "Buzz" au message
          message += 'Buzz';
      }
      if (message === "") {
          // Si message est vide, le nombre n'est divisible ni par 3, ni par 5 :
          // le message affiché sera le nombre
          message = nombre;
      }
      console.log(message);
  }
