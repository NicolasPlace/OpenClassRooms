//créez une fonction infosLiens qui doit afficher :
//le nombre total de liens dans la page web ;
//la cible du premier et du dernier lien.
function infosLiens(){
  var liensElts = document.getElementsByTagName("a");//renvoie une liste
  var nombreLiens = liensElts.length;
  console.log(nombreLiens);

  if (nombreLiens > 0) {
        console.log(liensElts[0].href);
        console.log(liensElts[nombreLiens - 1].href);
   }
};

infosLiens();

//Écrivez la fonction possede qui vérifie qu'un élément possède une classe.
function possede(id,classe){
  var instrument = document.getElementById(id);
  if( instrument !== null){
      console.log(instrument.classList.contains(classe));//classList donne la liste des classes//contains vérifie si cette liste contient la classe passée en paramètres
  }else{
    console.log("aucun élément ne possède l'identifiant " + id);
  }
};

possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur
