var btnNew = document.querySelector('.recent__select--new');
var btnTrend = document.querySelector('.recent__select--trend');
var fetchAdress = document.querySelector('.recent').getAttribute('url');

btnNew.addEventListener('click', () => {
	btnNew.classList.toggle('recent__select--active');
	if (btnTrend.classList.contains('recent__select--active')) {
		btnTrend.classList.remove('recent__select--active');
	}
	var type = 'new';
	loadPosts(type);
});

btnTrend.addEventListener('click', () => {
	btnTrend.classList.toggle('recent__select--active');
	if (btnNew.classList.contains('recent__select--active')) {
		btnNew.classList.remove('recent__select--active');
	}
	var type = 'trend';
	loadPosts(type);
});

let cardBox = document.querySelector('.recent .postCards');
async function loadPosts(type) {
	let data = {type: type};
	let send = await fetch(fetchAdress + '/wp-admin/admin-ajax.php?action=home', {
		method: 'POST',
		body: new URLSearchParams(data).toString(),
		headers: {'Content-type': 'application/x-www-form-urlencoded'},
	});
	let resp = await send.text();
	cardBox.innerHTML = resp;
}
