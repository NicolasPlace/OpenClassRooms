/*
Activité : gestion des contacts
*/
// TODO : complétez le programme

//---création de l'objet Contact---//
var Contact = {
    //---initialisation du contact, contient le nom et le prénom---//
    init: function(nom, prenom){
      this.nom = nom ;
      this.prenom = prenom ;
    },
    //---fonction/méthode  permettant d'afficher le nom et prénom du contact---//
    lister: function(){
      var liste = "Nom : " + this.nom + ", prénom : " + this.prenom ;
      return liste;
    }
  };

//---Les objets contact1 et contact2 sont créés avec 'Contact' comme prototype pour bénéficier de ses propriétés---//
var contact1 = Object.create(Contact);
contact1.init("Lévisse","Carole");

var contact2 = Object.create(Contact);
contact2.init("Nelsonne","Mélodie");

//---création d'un tableau contenant les objets 'contact1', 'contact2' ... 'contactN' ---//
var contacts = [contact1, contact2];

//---création d'une fonction permettant d'afficher une liste de choix entre 0, 1 ou 2 --//
function choisir(){
  console.log("1 : Lister les contacts");
  console.log("2 : Ajouter un contact");
  console.log("0 : Quitter");
};

//---création d'une fonction qui sera exécutée  lorsque l'option 1 sera choisie---//
function choixOption1(){
  console.log("Voici la liste de tous vos contacts");
  contacts.forEach(function (contact) {//boucle forEach qui parcours le tableau 'contacts'
      console.log(contact.lister());//appel de la méthode lister() sur chaque objet du tableau des contacts qui va afficher le nom et le prénom du contact
  });
  console.log("");//saut d'une ligne (je ne sais pas comment faire autrement)
  choisir();//appel de la fonction choisir() pour faire apparaître les 3 options
};

//---création d'une fonction qui sera exécutée  lorsque l'option 2 sera choisie---//
function choixOption2(){
  var ajoutNom = prompt("Entrez le nom du nouveau contact");//on enregistre le nom que l'utilisateur a entré, dans la variable 'ajoutNom'
  var ajoutPrenom = prompt("Entrez le prénom du nouveau contact");//on enregistre le prénom que l'utilisateur a entré, dans la variable 'ajoutPrenom'
  var creationContact = Object.create(Contact);//on transforme le nouveau contact en objet à partir du prototype 'Contact'
  creationContact.init(ajoutNom,ajoutPrenom);//le paramètre nom est la variable 'ajoutNom', le paramètre prénom est la variable 'ajoutPrenom'
  contacts.push(creationContact);//on ajoute le nouveau contact au tableau 'contacts' déjà créé précédemment
  console.log("Le nouveau contact a bien été enregistré");//message de validation
  console.log("");//saut d'une ligne (je ne sais pas comment faire autrement)
  choisir();//appel de la fonction choisir() pour faire apparaître les 3 options
};

/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
//---affichage de la phrase de bienvenue---//
console.log("Bienvenue dans le gestionnaire de contact !");
choisir();//---appel de la fonction choisir() pour faire apparaître les 3 options ---//

while(choixOption != 0){//Tant que l'option choisie est différente de 0  (donc 1 ou 2) on entre dans la boucle
  var choixOption = Number(prompt("Choisissez une option :"));//je demande de choisir une option, que j'enregistre dans la variable choixOption;
  if(choixOption === 1){//si le choix est l'option 1, alors j'appelle la fonction créée précédemment choixOption1();
    choixOption1();//exécution de la fonction  choixOption1() créée précédemment
  }else if(choixOption === 2){//si le choix est l'option 2, alors j'appelle la fonction créée précédemment choixOption2();
    choixOption2();//exécution de la fonction  choixOption2() créée précédemment
  }
}
console.log("");//saut d'une ligne (je ne sais pas comment faire autrement)
console.log("Au revoir !");//message qui s'affiche lorsqu'on sort de la boucle 'While', c'est-à-dire quand on choisit l'option 0
