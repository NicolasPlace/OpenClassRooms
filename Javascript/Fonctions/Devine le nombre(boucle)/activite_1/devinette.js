/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
console.log("");
// Boucle de 1 à 6
for (var compteur = 1; compteur <= 6; compteur++) {
	// Fonction pour récupérer la saisie
	var nombreTappe = Number(prompt("Entrez un nombre :"));
	// Test si le nombre est correct
	if (solution === nombreTappe) {
		console.log("Bravo ! La solution était " + solution);
		console.log("Vous avez trouvé en " + compteur + " essai(s)");
		// Sortir de la boucle for
		break;
	// Test si trop grand ou trop petit
	} else if (solution > nombreTappe){
		console.log(nombreTappe + " est trop petit");
	} else {
		console.log(nombreTappe + " est trop grand");
	}
}
// Si on est sortie de la boucle sans la bonne solution on as perdu
if (solution !== nombreTappe) {
	console.log("Perdu... La solution était " + solution);
}
