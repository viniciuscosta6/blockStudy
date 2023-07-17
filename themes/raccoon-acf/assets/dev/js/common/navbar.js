var elementos = document.querySelectorAll('.main-nav__item');
var bg = document.querySelectorAll('.bg')[0];
for (var i = 0; i < elementos.length; i++) {
	elementos[i].addEventListener('mouseover', function () {
		bg.classList.add('bg-active');
	});
	elementos[i].addEventListener('mouseout', function () {
		bg.classList.remove('bg-active');
	});
}

var hamburguer = document.querySelector('.hamburger-menu');
hamburguer.addEventListener('click', function () {
	bg.classList.toggle('bg-active');
});
// Função para mostrar submenu no mobile

var menuItens = document.querySelectorAll('.itemMobile');
var k = 0;
menuItens.forEach(function (menuItem) {
	var el = document.querySelectorAll('.main-nav__subMobile')[k];
	var arrow = document.querySelectorAll('.arrowMobile svg')[k];
	menuItem.addEventListener('click', function () {
		el.classList.toggle('sub__active');
		arrow.classList.toggle('arrowTransform');
	});
	k++;
});

// Abrir search desk

var search = document.querySelector('.searchBar');
var searchForm = document.querySelector('.searchBar #searchform');
var searchBtn = document.querySelector('.main-nav__search a');
var closeBtn = document.querySelector('.searchBar--close');
var search404 = document.querySelector('.search404');
var html = document.querySelector('html');
checkbox_dropdown = document.getElementById('check-box-dropdown');

searchBtn.addEventListener('click', function () {
	checkbox_dropdown.checked = false;
	search.classList.toggle('search__active');
	if (search.classList.contains('search__active')) {
		searchForm.classList.add('searchForm__active');
	}
	bg.classList.remove('bg-active');
	html.style.overflow = 'hidden';
	newsletterNav.classList.remove('show');
	if (search.classList.contains('search__active')) {
		bg.classList.add('bg-activeSearch');
	} else {
		bg.classList.remove('bg-activeSearch');
		html.style.overflow = 'initial';
	}
});

closeBtn.addEventListener('click', function () {
	search.classList.remove('search__active');
	searchForm.classList.remove('searchForm__active');
	bg.classList.remove('bg-activeSearch');
	bg.classList.remove('bg-active');
	html.style.overflow = 'unset';
});

bg.addEventListener('click', function () {
	checkbox_dropdown.checked = false;
	search.classList.remove('search__active');
	searchForm.classList.remove('searchForm__active');
	bg.classList.remove('bg-activeSearch');
	bg.classList.remove('bg-active');
	newsletterNav.classList.remove('show');
	html.style.overflow = 'unset';
});

// Função de abrir o menu no mobile pra fechar o search
checkbox_dropdown.addEventListener('click', function () {
	if (!checkbox_dropdown.checked === true) {
		bg.classList.remove('bg-activeSearch');
		bg.classList.remove('bg-active');
	}
	search.classList.remove('search__active');
	searchForm.classList.remove('searchForm__active');
});

// Abrir Newsletter

var btnNewsletter = document.querySelector('.wrap__right > .btn');
var newsletterNav = document.querySelector('.newsletterNav');
btnNewsletter.addEventListener('click', function () {
	searchForm.classList.remove('searhForm__active');
	search.classList.remove('search__active');
	bg.classList.remove('bg-active');
	newsletterNav.classList.toggle('show');
	if (newsletterNav.classList.contains('show')) {
		bg.classList.add('bg-activeSearch');
	} else {
		bg.classList.remove('bg-activeSearch');
	}
});

var closeNewsletter = document.querySelector('.newsletterNav__close');
closeNewsletter.addEventListener('click', function () {
	newsletterNav.classList.remove('show');
	bg.classList.remove('bg-activeSearch');
});

var btnNewsletterMobile = document.querySelector('.main-nav__newsletter--btn');
var newsletterNav = document.querySelector('.newsletterNav');
btnNewsletterMobile.addEventListener('click', function () {
	newsletterNav.classList.add('show');
});

var closeNewsletterNav = document.querySelector('.newsletterNav__back');
closeNewsletterNav.addEventListener('click', function () {
	newsletterNav.classList.remove('show');
});

function closeAll() {
	searchForm.classList.remove('searhForm__active');
	newsletterNav.classList.remove('show');
	bg.classList.remove('bg-activeSearch');
	search.classList.remove('search__active');
	checkbox_dropdown.checked = false;
}

//Submit newsletter

const successNav = document.getElementsByClassName('newsletterNav__title');
const newletterFormsNav = document.querySelector('.forms-newsletter');
const textNav = document.getElementsByClassName('newsletterNav__text');
const inputsNav = document.getElementsByClassName('newsletterNav__inputs');
if (newletterFormsNav != null) {
	newletterFormsNav.addEventListener('submit', function (evt) {
		evt.preventDefault();

		//ERROR VERIFICATION
		let msgNav = document.querySelector('.forms-newsletter .error-msg');
		let checkboxNav = document.querySelector('.forms-newsletter .checkboxGroup--checkboxCustom').checked;
		if (checkboxNav == false) {
			msgNav.innerText = 'É necessário concordar com o termo acima para assinar a Newsletter.';
		} else {
			msgNav.innerText = '';
			//SUCCESS MESSAGE
			successNav[0].innerHTML = 'Newsletter assinada com sucesso!<br>';
			textNav[0].innerHTML = '<br>Você receberá o conteúdo por e-mail.<br>Fique atento a sua caixa de entrada.';
			inputsNav[0].style.display = 'none';
			data = {
				event: 'formInteraction',
				action: 'formSubmitted',
				formName: 'newsletter',
			};
			push_dataLayer(data);
		}
	});
}

function push_dataLayer(data) {
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push(data);
}
