// Get the button that opens the modal
var triggers = document.querySelectorAll('.video-trigger img');

triggers.forEach((element) => {
	element.addEventListener('click', () => {
		var id = element.getAttribute('data-id');
		var modalHtml = document.querySelector('.video-' + id);
		if (modalHtml) {
			var iframe = modalHtml.querySelector('iframe');
			modalHtml.style.display = 'flex';

			if (iframe) {
				set_iframe(iframe);
			}
		}
	});
});

var closeBtn = document.querySelectorAll('.modal__close');

for (let close of closeBtn) {
	close.onclick = function () {
		closeModals();
	};
}

async function set_iframe(iframe) {
	iframe.src = iframe.getAttribute('data-src');

	await new Promise((r) => setTimeout(r, 200));

	iframe.src = iframe.getAttribute('data-src');
}

// When the user clicks anywhere outside of the modal, close it
var modals = document.querySelectorAll('.modal-overelay');

modals.forEach((element) => {
	element.addEventListener('click', closeModals);
});

function closeModals() {
	let modals = document.querySelectorAll('.video__modal');
	modals.forEach((element) => {
		element.addEventListener('click', () => {
			element.style.display = 'none';
		});
	});
}
