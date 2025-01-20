document.addEventListener('DOMContentLoaded', function() {
    // Tu código aquí
    console.log('DOM está completamente cargado');


//variables
let flip = document.querySelector('.flip');
let letter = document.querySelector('.letter');
let btnOpen = document.querySelector('.open');
let btnClose = document.querySelector('.close');

//EventListner
btnOpen.addEventListener('click', open);
btnClose.addEventListener('click', close);

//open
function open(){
	flip.classList.add('open');
	flip.classList.remove('close');
	setTimeout(function(){
	letter.classList.add('letterOpen');
	letter.classList.remove('letterClose');
	letter.style.zIndex = '7';
	},400);
}

//close
function close(){
	letter.classList.remove('letterOpen');
	letter.classList.add('letterClose');
	setTimeout(function(){
		flip.classList.remove('open');
		flip.classList.add('close');
		letter.style.zIndex = '5';
	},300);
}

});