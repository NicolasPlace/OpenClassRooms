var boutonElt = document.querySelector("button");

boutonElt.addEventListener("click", function(){
   var dessert = prompt("Quel dessert avez-vous choisis ?");
   var liElt = document.createElement("li");//création de la balise <li>
   var ulElt = document.getElementById("desserts");
   liElt.textContent = dessert;
   liElt.addEventListener("click", function (e) {//je crée un gestionnaire d'évènement quand on clique sur un <li>
       var nouveauNom = prompt("Modifiez le nom du dessert :", e.target.textContent);
       e.target.textContent = nouveauNom;
   });
   ulElt.appendChild(liElt);
});
