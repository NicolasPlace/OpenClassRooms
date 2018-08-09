var compte = {
  titulaire : "Alex",
  solde : 0,

  //méthode pour créditer le compte d'un certain montant
  crediter : function(montant){
    this.solde = this.solde + montant;
  },

  //méthode pour débiter le compte d'un certain montant
  debiter : function(montant){
    this.solde  = this.solde - montant;
  },

  //méthode pour décrire le compte
  decrire : function(){
    var description = "Titulaire : " + this.titulaire + ", solde : " +  this.solde + " euro(s)";
    return description;
  }
}

//afficher la description
console.log(compte.decrire());

var crediter = Number(prompt("Entrez le montant à créditer :"));//demande un montant à créditer
compte.crediter(crediter);//appel de la méthode crediter

var debiter = Number(prompt("Entrez le montant à débiter :"));//demande un montant à débiter
compte.debiter(debiter);//appel de la méthode debiter

//afficher la description après opérations
console.log(compte.decrire());
