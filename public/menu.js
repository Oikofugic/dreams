var openMenuButton = document.getElementById('menu-open-button');
var closeMenuButton = document.getElementById('menu-close-button');
var menu = document.getElementById('new-menu');


$('#menu-open-button').click(function() {
  $(this).hide();
  $('#new-menu').show();
});

$('#menu-close-button').click(function() {
  $('#new-menu').hide();
  $('#menu-open-button').show();
});
