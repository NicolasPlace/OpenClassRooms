$(function() {
var $li_1 = $('li#firstMessage');
var $li_2 = $('li#secondMessage');
var $li_3 = $('li#thirdMessage');
var $li_4 = $('li#fourthMessage');
var $list = $("li#secondMessage, li#thirdMessage, li#fourthMessage")

// --------------Quand on clique sur le 1er message ...
  $li_1.on('click', function(){
      $li_2.slideDown();// Le message suivant apparaît avec un effet
      $('body').css({
        'background' : 'url(images/fond6.png) repeat-x center fixed',// Je change le fond du body
        'background-color' : '#F0E390'// Je change la couleur de fond
      });
      $('#conteneur').css('background' , '');// Je cache le fond d'écran ajouté lors du click sur le message 3
      $('#list_section').css('background' , '');// Je cache le fond d'écran ajouté lors du click sur le message 4
      $('audio').remove();// Je supprime le son audio ajouté quand on click sur le message 4
  });

//----------------Quand on clique sur le 2eme message...
  $li_2.on('click', function(){
      $li_3.slideDown();// Le message suivant apparaît avec un effet
      $('body').css({
        'background' : 'url(images/fond7.png) repeat-x center fixed',// Je change le fond du body
        'background-color' : '#F0E390'// Je change la couleur de fond
      });
      $('#conteneur').css('background','');// Je cache le fond d'écran ajouté lors du click sur le message 3
      $('#list_section').css('background' , '');// Je cache le fond d'écran ajouté lors du click sur le message 4
      $('audio').remove();// Je supprime le son audio ajouté quand on click sur le message 4
  });

// ---------------Quand on clique sur le 3eme message...
  $li_3.on('click', function(){
      $li_4.slideDown();// Le message suivant apparaît avec un effet
      $('body').css({
        'background' : 'url(images/fond8.gif) no-repeat left fixed',// Je change le fond du body
        'background-color' : '#B3CF84'// Je change la couleur de fond
      });
      // La div 'conteneur' a été ajoutée pour pouvoir superposer 2 fonds (et éviter d'être en conflit avec le fond de 'body')
      $('#conteneur').css({'background':'url(images/fond9.gif) no-repeat right fixed'});
      $('#list_section').css('background' , '');// Je cache le fond d'écran ajouté lors du click sur le message 4
      $('audio').remove();// Je supprime le son audio ajouté quand on click sur le message 4
  });

// ----------------Quand on clique sur le 4eme message ...
  $li_4.on('click', function(){
      // Je modifie le texte des 4 messages avec la méthode  .text()
      $li_1.text("Joyeux Anniversaire !");
      $li_2.text("Happy Birthday !");
      $li_3.text("¡Feliz Cumpleaños!");
      $li_4.text("Buon Compleanno!");
      // Je rajoute quelques effets
      $list.animate({
        'marginBottom' : '5px',
        'fontSize' : '30px',
        'width' : '25%',
      }, 1000);
      $li_2.animate({
        'marginTop' : '230px',
        'marginBottom' : '5px'
      }, 1000);
      // J'ajoute le son audio
      $('div#conteneur').append('<audio src="son/son.mp3" autoplay volume="100">Veuillez mettre à jour votre navigateur !</audio>');
      // Je modifie les fonds
      $('body').css('background','url(images/photo.jpg) no-repeat center fixed');
      $('#conteneur').css('background','url(images/pluto.png) no-repeat right fixed');
      $('#list_section').css('background','url(images/donald.jpg) no-repeat left fixed');
  });
});
