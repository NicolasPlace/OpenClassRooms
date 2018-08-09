var Chien = {
    // initialise le chien
    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    // Renvoie l'aboiement du chien
    aboyer: function () {
        var aboiement = "Whoua ! Whoua !";
        if (this.taille < 25) {
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = "Grrr ! Grrr !";
        }
        return aboiement;
    },

    decrire: function() {
      var description = this.nom + " est un " + this.race + " mesurant " + this.taille + " cm. Il aboie : ";
      return description;
    }
};

//Utilisez cet objet dans un programme chenil.js qui ajoute trois chiens
//dans un tableau, puis affiche des informations sur le chenil et chacun de ses chiens.
crokdur = Object.create(Chien);
crokdur.init("Crokdur", "mâtin de Naples", 75);

pupuce = Object.create(Chien);
pupuce.init("Pupuce", "bichon", 22);

medor = Object.create(Chien);
medor.init("Médor", "labrador", 58);

chiens = [crokdur , pupuce , medor ];

console.log("Le chenil héberge " + chiens.length + " chiens : ");

chiens.forEach(function(chien){
  console.log(chien.decrire() + chien.aboyer());
})
