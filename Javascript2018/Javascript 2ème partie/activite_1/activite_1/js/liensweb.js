/*
Activité 1
*/
// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [{
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];
// Fonction permettant de créer un 'bloc'(div) contenant le Titre, l'Url et l'Auteur, du lien mis en paramètre
function creerElementLien(lien) {
    // Création d'une <div> qui contiendra les données du lien
    var divElt = document.createElement("div");
    divElt.setAttribute("class", "lien");

    // Création du Titre bleu
    var aElt = document.createElement("a");
    aElt.href = lien.url; //on définit la valeur de l'attribut href du lien <a>
    aElt.textContent = lien.titre; //on définit le texte que le lien <a> affichera
    aElt.style.color = "#428bca";
    aElt.style.textDecoration = "none";
    aElt.style.display = "inline";
    aElt.style.fontWeight = "bold";

    // Création de l'Url
    var urlElt = document.createElement("span");
    urlElt.textContent = lien.url; //on définit le contenu du <span>
    urlElt.style.display = "inline";
    urlElt.style.marginLeft = "5px";

    // Création de la première ligne de description AVEC ajout du Titre et de l'Url
    var premiereLigneElt = document.createElement("p");
    premiereLigneElt.style.margin = "0";
    premiereLigneElt.appendChild(aElt); //on ajoute le titre
    premiereLigneElt.appendChild(urlElt); //on ajoute l'url qui sera dernier enfant

    // Création de la deuxième ligne de description AVEC  ajout de l'Auteur
    var deuxiemeLigneElt = document.createElement("span");
    deuxiemeLigneElt.textContent = "Ajouté par " + lien.auteur; //on définit le contenu du <span>
    deuxiemeLigneElt.style.margin = "0";

    // Ajout de la première ligne à la <div> principale du lien
    divElt.appendChild(premiereLigneElt);
    // Ajout de la deuxième ligne à la <div> principale du lien. Cette 2eme ligne sera dernier enfant de divElt
    divElt.appendChild(deuxiemeLigneElt);

    return divElt;
};

var divContenuElt = document.getElementById("contenu");
// Pour chaque lien présent dans l'objet 'listeLiens', on exécute les différentes actions présentes dans la boucle forEach()
listeLiens.forEach(function(lien) {
    // Création du bloc contenant les données du lien (grâce à la précédente fonction)
    var elementLien = creerElementLien(lien);
    // Ajout du bloc créé, en tant que dernier enfant, à la <div> ayant pour identifiant "contenu"
    divContenuElt.appendChild(elementLien);
});

//----------------------------ACTIVITE 2 -------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------------//

// Création d'une <div> qui contiendra le bouton ET le formulaire permettant d'ajouter un lien
var divAjouterLien = document.createElement("div");
divAjouterLien.style.marginBottom = "20px"; //ajout d'une marge en dessous du bouton

// Positionnement de la <div> du formulaire  avant la <div>  ayant pour id  "contenu"
document.body.insertBefore(divAjouterLien, divContenuElt);

// Création du bouton "ajouter un lien"
var boutonAjouterLienElt = document.createElement("button");
boutonAjouterLienElt.textContent = "Ajouter un lien"; //ajout du texte
divAjouterLien.appendChild(boutonAjouterLienElt); //le bouton devient enfant de la <div> contenant bouton + formulaire

// Fonction permettant de générer les différents input du formulaire
function inputFormulaire(placeholder, id) {
    var inputElt = document.createElement("input");
    inputElt.setAttribute("type", "text");
    inputElt.setAttribute("required", "required");
    inputElt.setAttribute("placeholder", placeholder);
    inputElt.setAttribute("id", id);
    inputElt.setAttribute("name", id);
    inputElt.style.marginRight = "5px";
    return inputElt;
};

// Ajout d'un gestionnaire d'évènement sur le bouton "ajouter un lien"
boutonAjouterLienElt.addEventListener("click", function() {
    // Création du formulaire
    var formAjoutLienElt = document.createElement("form");

    // Création des 3 champs (auteur, titre, url) --> utilisation de la fonction qui génère les input
    var inputAuteur = inputFormulaire("Entrer le nom de l'auteur", "auteur");
    var inputTitre = inputFormulaire("Entrer le titre du lien", "titre");
    var inputUrl = inputFormulaire("Entrer l'url du lien", "url");

    // Création du bouton "ajouter" du formulaire
    var boutonValiderLienElt = document.createElement("input");
    boutonValiderLienElt.setAttribute("type", "submit");
    boutonValiderLienElt.setAttribute("value", "Ajouter");

    // Ajout des éléments <input> et de l'élément 'bouton' au formulaire
    formAjoutLienElt.appendChild(inputAuteur);
    formAjoutLienElt.appendChild(inputTitre);
    formAjoutLienElt.appendChild(inputUrl);
    formAjoutLienElt.appendChild(boutonValiderLienElt);

    // Je fais apparaître ce formulaire (à la place du bouton initial)
    divAjouterLien.replaceChild(formAjoutLienElt, boutonAjouterLienElt);

    // Ajout d'un gestionnaire d'évènement sur la validation du formulaire
    // On applique la méthode 'addEventListener' sur le formulaire  'formAjoutLienElt'
    formAjoutLienElt.addEventListener("submit", function(e) {
        // On vérifie si l'url renseignée contient http:// ou https://
        var urlSaisie = formAjoutLienElt.elements.url.value;
        var urlValide = "";
        var regex = /\b(http|https)\:\/\//;
        if (!regex.test(urlSaisie)) {
            urlValide = "http://" + urlSaisie;
        } else {
            urlValide = urlSaisie;
        };

        // Je récupère les valeurs des 3 <input> du formulaire
        var lienElt = {
            titre: formAjoutLienElt.elements.titre.value,
            url: urlValide,
            auteur: formAjoutLienElt.elements.auteur.value
        };

        // Création du nouveau lien et positionnement au dessus de la liste
        var nouveauLien = creerElementLien(lienElt);
        divContenuElt.insertBefore(nouveauLien, divContenuElt.firstChild);

        // Disparition du formulaire et réapparation du bouton "ajouter un lien"
        divAjouterLien.replaceChild(boutonAjouterLienElt, formAjoutLienElt);

        //Création du message de validation qui apparait pendant 2 secondes
        var messageConfirmationElt = document.createElement("p");
        messageConfirmationElt.textContent = 'Le lien "' + lienElt.titre + '" a bien été ajouté';
        messageConfirmationElt.style.color = "#095873";
        messageConfirmationElt.style.backgroundColor = "#C8E9F7";
        messageConfirmationElt.style.fontSize = "20px";
        messageConfirmationElt.style.padding = "22px";
        messageConfirmationElt.style.borderRadius = "5px";
        document.body.insertBefore(messageConfirmationElt, divAjouterLien);

        setTimeout(function() {
            document.body.removeChild(messageConfirmationElt);
        }, 2000);

        e.preventDefault();
    });
});
