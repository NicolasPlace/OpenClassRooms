var Film = {
    // Initialise le film avec ses données
    init: function (titre, annee) {
        this.titre = titre;
        this.annee = annee;
    },
    // Renvoie la description du film
    decrire: function () {
        var description = this.titre + " (" + this.annee + ")";
        return description;
    }
};

//Les objets film1, film2 et film3 sont créés avec Film comme prototype pour bénéficier de ses propriétés.
var film1 = Object.create(Film);
film1.init("Le loup de Wall Street", 2013);

var film2 = Object.create(Film);
film2.init("Vice-Versa", 2015);

var film3 = Object.create(Film);
film3.init("Babysitting", 2013);

var films = [];
films.push(film1);
films.push(film2);
films.push(film3);

//la fonction associée à la méthode forEach() affiche le résultat de l'appel à
//la méthode decrire() sur chaque objet du tableau des films.
films.forEach(function (film) {
    console.log(film.decrire());
});
