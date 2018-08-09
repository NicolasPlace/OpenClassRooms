var boutonDemarrerElt = document.getElementById("demarrer");
var boutonArreterElt = document.getElementById("arreter");
var ballonElt = document.getElementById("ballon");//je récupère l'élément ballon
var cadreElt = document.getElementById("cadre");//je récupère l'élément cadre
var vitesse = 4; // Valeur du déplacement en pixels
// Conversion en nombre du diamètre du bloc (valeur de la forme "XXpx")
var largeurBallon = parseFloat(getComputedStyle(ballonElt).width);
var animationId = null; // Identifiant de l'animation
var xMin = 0; // Position gauche minimale (bord gauche)
var direction = 1 ; //ballon va de gauche à droite

function deplacerBallon() {
    // Conversion en nombre de la position gauche du bloc (valeur de la forme "XXpx")
    var xBallon = parseFloat(getComputedStyle(ballonElt).left);
    // Conversion en nombre de la largeur du cadre (valeur de la forme "XXpx")
    var xMax = parseFloat(getComputedStyle(cadreElt).width);
    // Si le ballon arrive à un bord du cadre...(quand on dépasse)
    if ((xBallon + largeurBallon  > xMax) || (xBallon < xMin)) {
      // On inverse le sens de déplacement du ballon
       direction *= -1;
    }
    // Déplacement du bloc
    ballonElt.style.left = (xBallon + vitesse * direction) + "px";
    // Demande au navigateur d'appeler deplacerBloc dès que possible
    animationId = requestAnimationFrame(deplacerBallon);
};


boutonDemarrerElt.addEventListener("click", function(){
    boutonDemarrerElt.disabled = true;
    boutonArreterElt.disabled = false;
    requestAnimationFrame(deplacerBallon);
});

boutonArreterElt.addEventListener("click", function(){
  boutonDemarrerElt.disabled = false;
  boutonArreterElt.disabled = true;
  cancelAnimationFrame(animationId);
});
