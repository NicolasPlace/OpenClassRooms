$(function() {
$('#julia').addClass('vert grand');
});

$(function() {
$('#eric').removeClass('vert').addClass('rouge');
});


$(function() {
  $('#paul').removeClass('vert').addClass('rouge').removeClass('grand').addClass('petit');
});


$(function() {
  $('#pierre').removeClass('vert grand').addClass('rouge petit');
});
/*simplifié : .removeClass('vert').addClass('rouge').removeClass('grand').addClass('petit');*/

$(function() {
  $('#eric').toggleClass('vert').toggleClass('rouge').toggleClass('grand').toggleClass('petit');
});

$(function(){
if ($('#jean').hasClass('yellow'))
  alert('le span #jean est de classe rouge');
else
  alert('le span #jean n\'est pas de classe rouge');
});

/*toggleClass enlève ou ajoute une classe
commee eric  a déjà une classe vert, toggleclass(vert) lui enlève, et comme la classe rouge n'existe pas,
la classe rouge est ajoutée/
classe petit exite donc supprimée ; et la classe grand est ajoutée car n'existe pas*/
