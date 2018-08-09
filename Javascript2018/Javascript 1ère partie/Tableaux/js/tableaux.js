//https://openclassrooms.com/courses/apprenez-a-coder-avec-javascript/stockez-vos-donnees-dans-des-tableaux

//tableau de films
var films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];

//obtenir la longueur
console.log(films.length); // Affiche 3

// accéder à un élément du tableau
console.log(films[0]); // Affiche "Le loup de Wall Street"
console.log(films[1]); // Affiche "Vice-Versa"
console.log(films[2]); // Affiche "Babysitting"

//parcourir un tableau
//méthode 1
var films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];

for (var i = 0; i < films.length; i++) {
    console.log(films[i]);
}

//méthode 2
films.forEach(function (film) {
    console.log(film);
});

//ajouter un élément au tableau
films.push("Les Bronzés");

console.log(films[3]); // Affiche "Les Bronzés"
