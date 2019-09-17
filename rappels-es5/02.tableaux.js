var villes = ['nantes', 'paris', 'saint-nazare', 'angers', 'le mans'];

villes.forEach(element => {
    console.log("element :", element)

});


var lettreADansToutesLesVilles = villes.every(
    function (val) {
        return val.indexOf("a") !== -1
    });
console.log(lettreADansToutesLesVilles);

var auMoinsUneVilleAvecUnTiret = villes.some(
    function (val) {
        return val.indexOf("-") !== -1
    });
console.log(auMoinsUneVilleAvecUnTiret);

var villesSansTiretSansEspace = villes.filter(
    function (val) {
        return val.indexOf("-") === -1 && val.indexOf(" ") === -1
    });
console.log(villesSansTiretSansEspace);

var villesMajusculeSeTerminantParS = villes.filter(
    function (val) {
        return val.lastIndexOf("s") === val.length - 1
    }).map(function (val) {
        return val.toUpperCase()
    });
console.log(villesMajusculeSeTerminantParS);