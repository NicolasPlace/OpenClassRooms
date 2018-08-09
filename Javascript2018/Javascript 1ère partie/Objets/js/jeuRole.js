var perso = {//objet
    nom: "Aurora",//propriété composée du nom et de la valeur de cette propriété
    sante: 150,
    force: 25,
    xp : 0,
    // Renvoie la description du personnage
    decrire: function () {
        var description = this.nom + " a " + this.sante + " points de vie et " +  this.force + " en force et "
                          + this.xp + " points d'expérience";
            return description;
          }//Une propriété dont la valeur est une fonction est appelée une méthode
};
//this est défini automatiquement par JavaScript à l'intérieur
//d'une méthode et représente l'objet sur lequel la méthode a été appelée.


var perso2 = {
    nom: "Glacius",
    sante: 130,
    force: 30,
    xp: 0,
    // Renvoie la description du personnage
    decrire: function () {
        var description = this.nom + " a " + this.sante + " points de vie, " +
            this.force + " en force et " + this.xp + " points d'expérience";
        return description;
    }
};

console.log(perso.decrire());

// Aurora est blessée par une flèche
perso.sante = perso.sante - 20;

// Aurora trouve un bracelet de force
perso.force = perso.force + 10;

// Aurora apprend une nouvelle compétence
perso.xp = perso.xp + 15;

console.log(perso.decrire());//appel de la méthode 'decrire' sur l'objet 'perso'.
