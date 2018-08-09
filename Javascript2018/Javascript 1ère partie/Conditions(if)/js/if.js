var nombre = Number(prompt("Entrez un nombre :"));

if (nombre > 0) {
    console.log(nombre + " est positif");
}else {
    console.log(nombre + " est négatif ou nul");
}

//ET
if ((nombre >= 0) && (nombre <= 100)) {
    console.log(nombre + " est compris entre 0 et 100");
}

//OU
if ((nombre < 0) || (nombre > 100)) {
    console.log(nombre + " est en dehors de l'intervalle [0, 100]");
}

//NON
if (!(nombre > 100)) {
    console.log(nombre + " est inférieur ou égal à 100");
}
