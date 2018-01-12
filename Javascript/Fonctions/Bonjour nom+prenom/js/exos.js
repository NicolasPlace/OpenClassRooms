// Renvoie un message de bienvenue
function direBonjour(prenom, nom) {
    var message = "Bonjour, " + prenom + " " + nom + " !";
    return message;
}

// TODO : faire saisir le prénom et le nom de l'utilisateur
var p = prompt("entrez votre prenom")
var n = prompt("entrez votre nom")
// TODO : appeler direBonjour() avec les bons arguments et afficher son résultat
console.log(direBonjour(p,n));
