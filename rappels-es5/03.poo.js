var Personne = function (prenom, nom, pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function () {
        return nom + ' ' + prenom + ' ' + pseudo;
    }
}

var jules = new Personne('Jules', 'LEMAIRE', 'jules77');
var paul = new Personne('Paul', 'LEMAIRE', 'paul44');

function afficherPersonne(perso) {
    console.log(perso.nom);
    console.log(perso.prenom);
    console.log(perso.pseudo);
    console.log(perso.getNomComplet());
}


afficherPersonne(paul);

jules.pseudo = 'jules44';

afficherPersonne(jules);
console.log(jules.age);

Personne.prototype.age = 'NON RENSEIGNE';
console.log(jules.age);

jules.age = 30;
console.log(jules.age);

Personne.prototype.getInitiales = function () {
    return this.prenom.charAt(0) + this.nom.charAt(0);
};

console.log(jules.getInitiales());

var robert = {
    prenom: "Robert",
    nom: "LEPREFET",
    pseudo: "robert77",
    getNomComplet: function () {
        return this.nom + " " + this.prenom + " " + this.pseudo;
    }
};

afficherPersonne(robert);

var Client = function (nom, prenom, pseudo, numeroClient) {
    Personne.call(this, nom, prenom, pseudo);
    this.numeroClient = numeroClient;
    this.getInfos = function () {
        return this.nom + " " + this.prenom + " " + this.pseudo + " " + this.numeroClient;
    }
};

var steve = new Client("LUCAS", "Steve", "steve44", "A01");
afficherPersonne(steve);
console.log(steve.numeroClient);
console.log(steve.getInfos());