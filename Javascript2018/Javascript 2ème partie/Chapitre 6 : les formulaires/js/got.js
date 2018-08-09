// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom
var maisons = [
    {
        code: "ST",
        nom: "Stark"
    },
    {
        code: "LA",
        nom: "Lannister"
    },
    {
        code: "BA",
        nom: "Baratheon"
    },
    {
        code: "TA",
        nom: "Targaryen"
    }
];

// Renvoie un tableau contenant quelques personnages d'une maison
function getPersonnages(codeMaison) {
    switch (codeMaison) {
    case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
        return ["Robert", "Stannis", "Renly"];
    case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
    default:
        return [];
    }
}

//étape 1 : mettre les maison dans la liste déroulante
maisons.forEach(function(maison){
  var optionElt = document.createElement("option");
  var selectElt = document.querySelector("select");
  optionElt.textContent = maison.nom;
  optionElt.value = maison.code;
  selectElt.appendChild(optionElt);
});

//je déclare ma variable ici pour pour m'en servir ensuite 
var ulElt = document.querySelector("ul#persos");

//étape 2 : création des <li>
function creer(personnage){
  var liElt = document.createElement("li");
  liElt.textContent = personnage;
  ulElt.appendChild(liElt);
}

//étape 3 : ajout d'un gestionnaire d'évènement au changement de select
var maisonElt = document.getElementById("maison");

maisonElt.addEventListener("change", function(e) {
    ulElt.innerHTML = "";
    var listePersonnages = getPersonnages(e.target.value);
    for(var i = 0 ; i<listePersonnages.length ; i++){
      creer(listePersonnages[i]);
    };
});
