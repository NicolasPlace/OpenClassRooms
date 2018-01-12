//demander à l'utilisateur de saisir un mot
var a = prompt("Saisissez un mot")

//fonction qui compte le nombre de voyelles
function compterNbVoyelles(mot) {
    var nbVoyelles = 0;
    for (var i = 0; i < mot.length; i++) {
        var lettre = mot[i].toLowerCase();
        if ((lettre === 'a') || (lettre === 'e') || (lettre === 'i') ||
            (lettre === 'o') || (lettre === 'u') || (lettre === 'y')) {
            nbVoyelles++;
        }
    }
    return nbVoyelles;
}


function inverser(mot) {
    var motInverse = "";
    // Solution 1 : ajouter chaque lettre au début du mot inversé
    for (var i = 0; i < mot.length; i++) {
        motInverse = mot[i] + motInverse;
    }
    // Solution 2 : parcourir le mot de la fin vers le début
    /*for (var i = mot.length - 1; i >= 0; i--) {
        motInverse = motInverse + mot[i];
    }*/
    return motInverse;
}


var Voyelles = compterNbVoyelles(a)
console.log("Le mot " + a + " contient " + a.length + " caractère(s)")
console.log("Il s'écrit en minuscules " + a.toLowerCase() )
console.log("Il s'écrit en majuscules " + a.toUpperCase() )
console.log( "Il contient " + Voyelles + " voyelles et " + (a.length - Voyelles) + " consonnes" );

var motInverse = inverser(a);
console.log("Il s'écrit à l'envers " + motInverse);


if (inverser(a).toLowerCase() === a.toLowerCase()) {
    console.log("C'est un palindrome");
} else {
    console.log("Ce n'est pas un palindrome");
}
