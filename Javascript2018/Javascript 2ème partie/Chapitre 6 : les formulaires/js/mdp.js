var form = document.querySelector("form");

form.addEventListener("submit",function(e){
  var mdp1 = form.elements.mdp1.value;
  var mdp2 = form.elements.mdp2.value;
  var infoMdpElt = document.querySelector("p#infoMdp");
  var regexMdp = /[0-9]/;
  if(mdp1 !== mdp2){
    infoMdpElt.textContent = "Erreur : les mots de passe saisis sont différents";
  }else if(mdp1.length < 6){
        infoMdpElt.textContent = "Erreur : la longueur minimale du mot de passe est de 6 caractères";
    }else if(!regexMdp.test(mdp1)){
        infoMdpElt.textContent = "Erreur : le mot de passe ne contient aucun chiffre";
      }else{
        infoMdpElt.textContent = "les 2 mots de passes sont identiques";
      }
  e.preventDefault();
});

//solution 2
var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    var mdp1 = form.elements.mdp1.value;
    var mdp2 = form.elements.mdp2.value;
    var message = "Mots de passe OK";
    if (mdp1 === mdp2) {
        if (mdp1.length >= 6) {
            var regexMdp = /\d+/;
            if (!regexMdp.test(mdp1)) {
                message = "Erreur : le mot de passe ne contient aucun chiffre";
            }
        } else {
            message = "Erreur : la longueur minimale du mot de passe est de 6 caractères";
        }
    } else {
        message = "Erreur : les mots de passe saisis sont différents";
    }
    document.getElementById("infoMdp").textContent = message;
    e.preventDefault();
});
