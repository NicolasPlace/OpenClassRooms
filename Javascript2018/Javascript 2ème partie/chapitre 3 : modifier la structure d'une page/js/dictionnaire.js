// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

// TODO : créer le dictionnaire sur la page web, dans la div "contenu"
/*console.log(mots[0].terme);
console.log(mots[0].definition);
console.log(mots[1].terme);
console.log(mots[1].definition);
console.log(mots[2].terme);
console.log(mots[2].definition);

for(var i = 0 ; i < mots.length ; i++){
  var dlElt = document.createElement("dl");
  document.getElementById("contenu").appendChild(dtElt);
  var dtElt = document.createElement("dt");
  document.getElementById("contenu").appendChild(dtElt);
  var ddElt = document.createElement("dd");
  document.getElementById("contenu").appendChild(ddElt);
  var strongElt = document.createElement("strong");
  document.getElementById("dt").appendChild(strongElt);
  strongElt(appendChild(document.createTextNode(mots[i].terme)));
  ddElt(appendChild(document.createTextNode(mots[i].definition)));
}*/
var dlElt = document.createElement("dl"); // Création de la liste

// Pour chaque mot, on construit une balise <dt> avec le terme et une balise <dd> avec sa définition
mots.forEach(function (mot) {
    var dtElt = document.createElement("dt");
    var strongElt = document.createElement("strong");
    strongElt.textContent = mot.terme;
    var ddElt = document.createElement("dd");
    ddElt.textContent = mot.definition;

    dtElt.appendChild(strongElt);
    dlElt.appendChild(dtElt);
    dlElt.appendChild(ddElt);
});

document.getElementById("contenu").appendChild(dlElt); // Ajout de la liste à la page
