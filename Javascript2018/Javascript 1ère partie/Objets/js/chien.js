//https://openclassrooms.com/courses/apprenez-a-coder-avec-javascript/creez-vos-premiers-objets


// TODO : ajoutez ici la définition de l'objet chien
var chien = {
  nom : "Crokdur",
  race : "mâtin",
  taille : 75,
  cri : "Grrr ! ",
  aboyer: function(){
      var resultat = this.cri + this.cri;
        return resultat;
  }
};

console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");

console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());
