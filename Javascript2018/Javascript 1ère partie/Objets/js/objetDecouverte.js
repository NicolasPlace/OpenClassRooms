var stylo = {
    type: "bille",
    couleur: "bleu",
    marque: "Bic"
};


console.log(stylo.type); // Affiche "bille"
console.log(stylo.couleur); // Affiche "bleu"
console.log(stylo.marque); // Affiche "Bic"

console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur);

//Une fois un objet créé, on peut modifier les valeurs de ses propriétés avec la syntaxe
stylo.couleur = "rouge"; // Modifie la couleur de l'encre du stylo


console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur);

//ajout d'une propriété
stylo.prix = 2.5; // Ajout de la propriété prix à l'objet stylo

console.log("Il coûte " + stylo.prix + " euros");
