const success = document.getElementsByClassName('newsletter__title');
const newletterForms = document.querySelector('.forms-newsletter-section');
const text = document.getElementsByClassName('newsletter__text');
const inputs = document.getElementsByClassName('newsletter__inputs');

if (newletterForms != null) {
	newletterForms.addEventListener('submit', function (evt) {
		evt.preventDefault();

		//ERROR VERIFICATION
		let msg = document.querySelector('.forms-newsletter-section .error-msg');
		let checkbox = document.querySelector('.forms-newsletter-section .checkboxGroup--checkboxCustom').checked;
		if (checkbox == false) {
			msg.innerText = 'É necessário concordar com o termo acima para assinar a Newsletter.';
		} else {
			msg.innerText = '';
			//SUCCESS MESSAGE
			success[0].innerHTML = 'Newsletter assinada com sucesso!<br>';
			text[0].innerHTML = '<br>Você receberá o conteúdo por e-mail.<br>Fique atento a sua caixa de entrada.';
			inputs[0].style.display = 'none';
			data = {
				event: 'formInteraction',
				action: 'formSubmitted',
				formName: 'newsletter',
			};
			push_dataLayer(data);
		}
	});
}
