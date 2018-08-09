//je récupère l'élément bouton
var buttonElt = document.getElementById("startStopAnimation");
//je récupère l'élément span d'id "seconde"
var secondeElt = document.getElementById("seconde");
var intervalId = null;

// fonction permettant d'incrémenter le compteur de 1
function augmenterCompteur(){
  secondeElt.textContent = Number(secondeElt.textContent) + 1 ;
}

//ajout d'un gestionnaire d'événements sur le bouton
buttonElt.addEventListener("click",function(){
  if(buttonElt.textContent === "Démarrer"){// si le bouton est "démarrer"
    intervalId = setInterval(augmenterCompteur, 1000);// appel augmenterCompteur tous les secondes
    buttonElt.textContent = "Arrêter";// Modification du texte
  }else if(buttonElt.textContent === "Arrêter"){// si le bouton est "arrêter"
    clearInterval(intervalId);// j'arrête l'animation
    buttonElt.textContent = "Démarrer";//Modification du texte
  }
});
