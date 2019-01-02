var Contacts = {
    init: function (nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    },
    decrire: function () {
        return "Nom : " + this.nom + ", prénom : " + this.prenom;
    }
};
 
var carole = Object.create(Contacts);
carole.init("Lévisse", "Carole");
var melodie = Object.create(Contacts);
melodie.init("Nelsonne", "Mélodie");
 
var contacts = [];
contacts.push(carole);
contacts.push(melodie);
 
console.log("Bienvenue dans le gestionnaire des contacts !");
var choix;
while (choix !== "0") {
    console.log("1 : Lister les contacts");
    console.log("2 : Ajouter un contact");
    console.log("0 : Quitter");
    var choix = prompt("Choisissez une option :");
 
    switch (choix) {
    case "1":
        console.log("Voici la liste de tous vos contacts :");
        for (var i = 0; i < contacts.length; i++) {
            console.log(contacts[i].decrire());
        }
        break;
    case "2":
        var nom = prompt("Entrez le nom du nouveau contact :");
        var prenom = prompt("Entrez le prénom du nouveau contact :");
        var contact = Object.create(Contacts);
        contact.init(nom, prenom);
        contacts.push(contact);
        console.log("Le nouveau contact a été ajouté");
        break;
    }
    console.log();
}
console.log("Au revoir !");