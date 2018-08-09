var form = document.querySelector("form");
// Gestion de la soumission du formulaire

form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Récupération des champs du formulaire dans l'objet FormData
    //var data = new FormData(form);
    var temoignage = {
      pseudo: e.target.elements.pseudo.value,
      evaluation: e.target.elements.choix.value,
      message: e.target.elements.message.value
    };
    // Envoi des données du formulaire au serveur
    // La fonction callback est ici vide
    ajaxPost("https://oc-jswebsrv.herokuapp.com/api/temoignage", temoignage, function (reponse) {
      var validationElt = document.getElementById("resultat");
      validationElt.textContent = "Témoignage ajouté";
    },
    true
  );
});
