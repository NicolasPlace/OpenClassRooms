function ajouteCompteur(){
    var compteurElt = document.getElementById("compteurClics");
    compteurElt.textContent = compteur;
    compteur++;
};

var compteur = 0;

var boutonElt = document.getElementById("clic");
boutonElt.addEventListener("click",ajouteCompteur);


var desactiveElt = document.getElementById("desactiver");
desactiveElt.addEventListener("click",function(){
  boutonElt.removeEventListener("click",ajouteCompteur);
});
