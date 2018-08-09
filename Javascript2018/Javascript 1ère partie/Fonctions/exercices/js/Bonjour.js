//https://openclassrooms.com/courses/apprenez-a-coder-avec-javascript/modularisez-votre-code-grace-aux-fonctions

// Renvoie un message de bienvenue
function direBonjour(prenom, nom) {
    var message = "Bonjour, " + prenom + " " + nom + " !";
    return message;
}

//faire saisir le prénom et le nom de l'utilisateur
//appeler direBonjour() avec les bons arguments et afficher son résultat
var p = prompt("Quel est votre prénom ?");
var n = prompt("Quel est votre nom ?");

console.log(direBonjour(p, n));
