var tableauxElt = document.getElementById("tableaux");

var legendeTabElt = document.createElement("tr");
var nomElt = document.createElement("th");
var anneeElt = document.createElement("th");
var auteurElt = document.createElement("th");
nomElt.style.paddingRight = "40px";
anneeElt.style.paddingRight = "40px";
auteurElt.style.paddingRight = "40px";
nomElt.textContent = "Nom" ;
anneeElt.textContent = "Année";
auteurElt.textContent = "Auteur";
legendeTabElt.appendChild(nomElt);
legendeTabElt.appendChild(anneeElt);
legendeTabElt.appendChild(auteurElt);
tableauxElt.appendChild(legendeTabElt);
legendeTabElt.style.border = "1px solid black";

ajaxGet("http://localhost/javascript-web-srv/data/tableaux.json", function (reponse) {
  var tableauxElt = document.getElementById("tableaux");
    // Séparation du texte pour obtenir un tableau contenant les langages
    var tableaux = JSON.parse(reponse);
    // Ajout de chaque langage dans la liste
    tableaux.forEach(function (tableau) {
        var informationsElt = document.createElement("tr");
        var nomTableau = document.createElement("td");
        var anneeTableau = document.createElement("td");
        var auteurTableau = document.createElement("td");
        informationsElt.style.border = "1px solid black";
        nomTableau.textContent = tableau.nom;
        anneeTableau.textContent = tableau.annee;
        auteurTableau.textContent = tableau.auteur;
        informationsElt.appendChild(nomTableau);
        informationsElt.appendChild(anneeTableau);
        informationsElt.appendChild(auteurTableau);
        tableauxElt.appendChild(informationsElt);
    });
});

tableauxElt.style.borderCollapse = "collapse";


//ou//
ajaxGet("http://localhost/javascript-web-srv/data/tableaux.json", function (reponse) {
    var tableaux = JSON.parse(reponse);
    var tableauxElt = document.getElementById("tableaux");
    tableaux.forEach(function (tableau) {
        // Crée une ligne de tableau HTML pour chaque tableau
        var ligneElt = document.createElement("tr");
        ligneElt.innerHTML = "<td>" + tableau.nom + "</td>" + "<td>" + tableau.annee + "</td>" +
            "<td>" + tableau.auteur + "</td>";
        tableauxElt.appendChild(ligneElt);
    });
});
