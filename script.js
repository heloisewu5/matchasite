AOS.init();

/* First we get references to the elements on the page we want to interact with or manipulate */

var menuButtonElement = document.getElementById("menuButton");
var menuElement = document.getElementById("menu");
var menuSectionElement = document.getElementById("menuSection");

/* Then we "listen" for a click on the menuButton and toggle CSS classes to reveal the menu and invert the colors of the button+text */

menuButtonElement.addEventListener('click', function(){
	menuElement.classList.toggle('showMenu');
	menuSection.classList.toggle('invertText');
	menuButtonElement.classList.toggle('invertBG');
});

