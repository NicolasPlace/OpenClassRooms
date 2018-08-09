document.addEventListener("keypress", function (e) {
    var touche =  String.fromCharCode(e.charCode);
    var couleur = "";
    switch (touche.toLowerCase()) {
    case "r":
        couleur = "red";
        break;
    case "j":
        couleur = "yellow";
        break;
    case "v":
        couleur = "green";
        break;
    case "b":
        couleur = "white";
        break;
    default:
        console.log("Cette touche ne correspond à rien !");
    }

    var divElts = document.getElementsByTagName("div");
    for(var i = 0 ; i< divElts.length ; i++){
      divElts[i].style.backgroundColor = couleur;
    };
});
