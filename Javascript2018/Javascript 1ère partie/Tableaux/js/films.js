//https://openclassrooms.com/courses/apprenez-a-coder-avec-javascript/stockez-vos-donnees-dans-des-tableaux

//Liste de films avec réalisateurs

var Film = {
  init : function(titre, annee, realisateur){
    this.titre = titre ;
    this.annee = annee ;
    this.realisateur = realisateur ;
  },

  decrire : function(){
    var description = this.titre + " (" + this.annee + ", " + this.realisateur + " )";
    return description;
  }
};

var film1 = Object.create(Film);
film1.init("Le loup de Wall Street", "2013", "Martin Scorsese" );

var film2 = Object.create(Film);
film2.init("Vive-Versa", "2015", "Pete Docter" );

var film3 = Object.create(Film);
film3.init("Babysitting", "2013", "Philippe Lacheau et Nicolas Benamou" );

var films = [];
films.push(film1);
films.push(film2);
films.push(film3);

films.forEach(function(film){
  console.log(film.decrire());
})
