//https://openclassrooms.com/courses/apprenez-a-coder-avec-javascript/repetez-des-instructions
//exo nombres pairs

var nombre = Number(prompt("Saisissez un nombre :"));

for (var i = nombre; i < nombre + 10 ; i++) {
    if (i % 2 === 0) {
        console.log(i + " est pair");
    }else{
      console.log(i + " est impair");
    }
}
