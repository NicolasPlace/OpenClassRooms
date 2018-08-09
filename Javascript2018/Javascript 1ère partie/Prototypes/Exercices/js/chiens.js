//https://openclassrooms.com/courses/apprenez-a-coder-avec-javascript/trop-classe-la-poo

// TODO : ajoutez ici la définition de l'objet Chien
var Chien = {
  //initialise le chien
  init : function(nom, race, taille){
    this.nom = nom;
    this.race = race;
    this.taille = taille;
  },
  //renvoie l'aboiement du chien
  aboyer : function(){
    var aboiements = "Wouaf ! Wouaf !";
    if(this.taille < 30){
      aboiements = "Kaii ! Kaii !";
    }else if(this.taille > 60){
      aboiements = "Grrr ! Grrr !";
    }
    return aboiements;
  }
}



/******************************************************************************/
var crokdur = Object.create(Chien);

crokdur.init("Crokdur", "mâtin de Naples", 50);

console.log(crokdur.nom + " est un " + crokdur.race + " mesurant " + crokdur.taille + " cm");
console.log("Tiens, un chat ! " + crokdur.nom + " aboie : " + crokdur.aboyer());


/******************************************************************************/
var pupuce = Object.create(Chien);

pupuce.init("Pupuce", "bichon", 22);

console.log(pupuce.nom + " est un " + pupuce.race + " mesurant " + pupuce.taille + " cm");
console.log("Tiens, un chat ! " + pupuce.nom + " aboie : " + pupuce.aboyer());
