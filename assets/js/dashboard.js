
$(document).ready(function(){

	inicializarMaterial();

});

function inicializarMaterial(){
	$(".button-collapse").sideNav();
	$('.collapsible').collapsible();
	$('.modal-trigger').leanModal();
	$('select').material_select();
}
