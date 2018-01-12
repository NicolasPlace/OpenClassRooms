var nombre = Number(prompt("Entrez un nombre :"));

if (nombre > 0) {

    alert(nombre + " est positif");

} else { // nombre <= 0

    if (nombre < 0) {

        alert(nombre + " est négatif");

    } else { // nombre === 0

        alert(nombre + " est nul");

    }

}
