//premier exemple "variable"
var a = 3.14;
a += 1;
a ++;
console.log(a);


//second exemple "Expression"
// c est une expression dont la valeur est le nombre 3
var c = 3;
// d est une expression dont la valeur est celle de c (ici 3)
var d = c;
// (d + 1) est une expression
// Sa valeur est celle de d augmentée de 1 (ici 4)
d = d + 1; // d contient la valeur 4
console.log(d); // Affiche 4


//troisième exemple  "conversion de type"
var f = 100;
console.log("La variable f contient la valeur " + f);

var g = "cinq" * 2;
console.log(g); // Affiche NaN

var h = "5";
console.log(h + 1); // Concaténation : affiche la chaîne "51"
h = Number("5");
console.log(h + 1); // Addition numérique : affiche le nombre 6
