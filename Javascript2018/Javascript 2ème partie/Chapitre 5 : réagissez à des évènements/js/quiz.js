// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [
    {
        enonce: "Combien font 2+2 ?",
        reponse: "2+2 = 4"
    },
    {
        enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
        reponse: "1492"
    },
    {
        enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
    }
];

var i = 1;
questions.forEach(function(question){
  // Création d'un <p> qui contiendra la question + la réponse
  var divQuestionElt = document.createElement("p");

  // Création d'une <div> qui contiendra seulement la question
  var enonceQuestionElt = document.createElement("div");
  var numeroQuestionElt = document.createElement("strong");
  var questionElt = document.createElement("i");
  numeroQuestionElt.textContent = "Question " + i + " : ";
  questionElt.textContent = question.enonce;
  enonceQuestionElt.appendChild(numeroQuestionElt);
  enonceQuestionElt.appendChild(questionElt);

  // Création d'une <div> qui contiendra l'ensemble réponse (bouton + réponse)
  var zoneReponseElt = document.createElement("div");
  var boutonElt = document.createElement("button");
  boutonElt.textContent = "Afficher la réponse";
  zoneReponseElt.appendChild(boutonElt);

  //Ajout d'un gestionnaire d'évènement pour le bouton
  boutonElt.addEventListener("click", function(){
    var reponseElt = document.createElement("div");
    reponseElt.textContent = question.reponse;
    zoneReponseElt.innerHTML = "";
    zoneReponseElt.appendChild(reponseElt);
  });

  // Ajout de la question et du bouton , dans la '<div> question'
  divQuestionElt.appendChild(enonceQuestionElt);
  divQuestionElt.appendChild(zoneReponseElt);

  // Ajout de la '<div> question' dans la '<div> contenu'
  document.getElementById("contenu").appendChild(divQuestionElt);
  i++;//numéro de question +1
});
