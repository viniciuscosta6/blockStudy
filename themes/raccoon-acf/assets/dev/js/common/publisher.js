// ================ Slider Seleção do editor ================

let selection = tns({
	container: '.selection__content',
	items: 2,
	gutter: 0,
	fixedWidth: 229,
	autoHeight: true,
	center: true,
	nav: false,
	loop: true,
	control: true,
	swipeAngle: false,
	mouseDrag: true,
	controlsPosition: 'bottom',
	controlsText: [
		'<svg xmlns="http://www.w3.org/2000/svg" width="13.329" height="15.848" viewBox="0 0 13.329 15.848"><g id="Grupo_3796" data-name="Grupo 3796" transform="translate(0 15.201) rotate(-90)"><path id="Caminho_818" data-name="Caminho 818" d="M1.119,13.329,0,12.21,5.545,6.665,0,1.119,1.119,0,7.784,6.665Z" transform="translate(7.417)" fill="#141414"/><path id="Caminho_819" data-name="Caminho 819" d="M0,1.583H0V0H0Z" transform="translate(0 5.873)" fill="#141414"/><path id="Caminho_819-2" data-name="Caminho 819" d="M-3523.212,3964.756H-3537.8v-1.583h14.586Z" transform="translate(3537.151 -3957.3)" fill="#141414"/></g></svg>',
		'<svg xmlns="http://www.w3.org/2000/svg" width="13.329" height="15.848" viewBox="0 0 13.329 15.848"><g id="Grupo_3796" data-name="Grupo 3796" transform="translate(0 15.201) rotate(-90)"><path id="Caminho_818" data-name="Caminho 818" d="M1.119,13.329,0,12.21,5.545,6.665,0,1.119,1.119,0,7.784,6.665Z" transform="translate(7.417)" fill="#141414"/><path id="Caminho_819" data-name="Caminho 819" d="M0,1.583H0V0H0Z" transform="translate(0 5.873)" fill="#141414"/><path id="Caminho_819-2" data-name="Caminho 819" d="M-3523.212,3964.756H-3537.8v-1.583h14.586Z" transform="translate(3537.151 -3957.3)" fill="#141414"/></g></svg>',
	],
	speed: 400,
	responsive: {
		768: {
			fixedWidth: 390,
			mouseDrag: false,
		},
	},
});

const post = document.querySelector('.selection__content');
const post_img = document.querySelectorAll('.selection__item--thumb');
const title_item = document.querySelectorAll('.selection__item--title');

post_img.forEach((item) => {
	item.style.transform = 'scale(0.7)';
	item.style.transition = 'transform 0.1s linear';
});
title_item.forEach((title_item) => {
	title_item.style.opacity = '0';
	title_item.style.transition = 'transform 0.1s linear';
});

post.addEventListener('transitionend', () => {
	addTransition();
	async function addTransition() {
		await sleep(50);

		post_img.forEach((item) => {
			item.style.transform = 'scale(0.7)';
			item.style.marginTop = '0px';
			item.style.transition = 'all 0.1s linear';
		});
		title_item.forEach((title_item) => {
			title_item.style.opacity = '0';
			title_item.style.transition = 'all 0.1s linear';
		});
		post_img[selection.getInfo().index].style.transform = 'scale(1)';
		title_item[selection.getInfo().index].style.opacity = '1';
		title_item[selection.getInfo().index].style.transition = 'all 0.2s linear 0s';
		post_img[selection.getInfo().index].style.transition = 'all 0.1s linear 0s';
	}
});

// Função "surpreenda-me"

let btnRandom = document.querySelector('.selection__random');
let cont = 0;

function checkSlides() {
	const cards = document.querySelectorAll('.tns-slide-active');
	var qtd_cards = cards.length;
	return qtd_cards;
}

random = () => {
	cont = checkSlides();
	let indexRandom = Math.floor(cont * Math.random());
	indexRandom = Math.round(indexRandom);
	info = selection.getInfo();
	indexCurrent = info.index;
	if (indexRandom == indexCurrent) {
		indexRandom = indexRandom + 3;
	}
	selection.goTo(indexRandom);
};

btnRandom.addEventListener('click', () => {
	random();
});

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

pubCar();

async function pubCar() {
	await sleep(200);

	let next = document.querySelector('.selection .tns-controls [data-controls="next"]');
	if (next) next.addEventListener('click', change_active);
	var sl = 5;
	var i = sl + 4;
	var j = 0;
	async function change_active() {
		var slide = document.querySelectorAll('.selection__content .selected__padding');
		slide.forEach((element) => {
			element.removeAttribute('select-on');
		});
		await sleep(100);
		var active = document.querySelectorAll('.selection__content .selected__padding.tns-item');
		j++;
		if (active) active[i].setAttribute('select-on', 'on');
		i++;
		if (j == sl + 1) {
			j = 1;
			i = sl + 3;
		}
	}
}
