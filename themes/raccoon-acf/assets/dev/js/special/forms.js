// Função para abrir modal em mobile
const btn_download = document.getElementById('specialForms__button');
const form = document.getElementsByClassName('specialForms')[0];
const close_btn = document.getElementById('close__special');

btn_download.addEventListener('click', function () {
	form.style.top = '0';
});

close_btn.addEventListener('click', function () {
	form.style.top = '-200vh';
});

// Máscara telefone
function mascara(o, f) {
	v_obj = o;
	v_fun = f;
	setTimeout('execmascara()', 1);
}

function execmascara() {
	v_obj.value = v_fun(v_obj.value);
}

function mtel(v) {
	v = v.replace(/\D/g, ''); //Remove tudo o que não é dígito
	v = v.replace(/^(\d{2})(\d)/g, '($1) $2'); //Coloca parênteses em volta dos dois primeiros dígitos
	v = v.replace(/(\d)(\d{4})$/, '$1-$2'); //Coloca hífen entre o quarto e o quinto dígitos
	return v;
}

function id(el) {
	return document.getElementById(el);
}
window.onload = function () {
	id('formsNumer').onkeyup = function () {
		mascara(this, mtel);
	};
};

const specialForms = document.querySelector('.form');
specialForms.addEventListener('submit', function (evt) {
	evt.preventDefault();
	let v1 = false;
	let v2 = false;
	let v3 = false;
	let fname = document.querySelector('#formsName').value;
	let femail = document.querySelector('#formsEmail').value;
	let msg = document.querySelector('.error-msg');
	let checkbox = document.querySelector('.specialForms__content__checkboxGroup--checkboxCustom').checked;

	function validateEmail(email) {
		var re = /\S+@\S+\.\S+/;
		return re.test(email);
	}

	while (v1 !== true && v2 !== true && v3 !== true) {
		if (fname !== '') {
			v1 = true;
		}
		if (femail !== '') {
			v2 = true;
		}
		if (checkbox == true) {
			v3 = true;
		} else {
			msg.innerText = 'É necessário concordar com o termo acima';
		}
	}

	if (v1 === true && v2 === true && v3 === true) {
		if (window.screen.width >= 1024) {
			document.querySelector('.specialForms__content').style.overflow = 'hidden';
			setTimeout(() => {
				document.querySelector('.specialForms__content').style.maxHeight = '0';
			}, 300);
			document.querySelector('.specialForms__content').style.opacity = '0';
			document.querySelector('.specialForms__content').style.transition =
				'opacity 0.3s, max-height 0.3s ease-in-out';
			document.querySelector('.specialForms__downloaded').style.transition =
				'opacity 0.5s, max-height 0.1s ease-in-out';
			document.querySelector('.specialForms__downloaded').style.maxHeight = '596px';
			setTimeout(() => {
				document.querySelector('.specialForms__downloaded').style.opacity = '1';
			}, 750);
		} else {
			document.querySelector('.specialForms__content').style.display = 'none';
			document.querySelector('.specialForms__downloaded').style.display = 'flex';
			setTimeout(() => {
				document.querySelector('.specialForms__downloaded').style.opacity = '1';
			}, 500);
		}
	}
});
