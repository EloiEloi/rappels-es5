console.log("01 - Fonctions");

var nombre1 = 10;
var nombre2 = 20;

function additionner(nb1, nb2) {
    return nb1 + nb2;
}

var resultat1 = additionner;


console.log('resultat1 = ', resultat1(nombre1, nombre2))

var somme = additionner;

var resultat2 = somme(nombre1, nombre2);
console.log("resultat2", resultat2);

var multiplication = function (nb1, nb2) {
    return nb1 * nb2;
}

var resultat3 = multiplication(nombre1, nombre2);
console.log("resultat3", resultat3)

var afficherOperation = function (nomOperation, operation, nb1, nb2) {
    console.log(nomOperation, '(', nb1, ',', nb2, ')', ' = ', operation);
}

afficherOperation('somme', somme(20, 40), 20, 40);
afficherOperation('multiplication', multiplication(10, 20), 10, 20);
afficherOperation('soustraction', 15 - 5, 15, 5);