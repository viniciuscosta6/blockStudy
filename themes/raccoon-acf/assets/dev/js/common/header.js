//Menu
console.log('menu');
let menu = document.querySelector('.header .menu-container');
let open_menu = document.querySelector('.header .toggle-menu');
let close_menu = document.querySelector('.close-menu-mobile svg');

open_menu.addEventListener('click', () => {
	menu.classList.add('open');
});

close_menu.addEventListener('click', () => {
	menu.classList.remove('open');
});

// Header color

let header = document.querySelector('.header');

window.addEventListener('scroll', () => {
	let yPosition = document.documentElement.scrollTop;
	if (yPosition > 100) {
		header.classList.add('change');
	} else {
		header.classList.remove('change');
	}
});
