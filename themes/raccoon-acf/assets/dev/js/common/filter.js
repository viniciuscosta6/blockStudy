var filterItems = document.querySelectorAll('.filter__category--item');
var categoryId = document.querySelector('.filter').getAttribute('id-category');
var title = document.querySelector('.filter__category--title');
var filter = document.querySelector('.filter__category');
var link = document.querySelector('.hero').getAttribute('url');
var archive_btnMore = document.querySelector('.loadMore--btn');

filterItems.forEach(function (filterItem) {
	filterItem.addEventListener('click', function () {
		var post_type = filterItem.getAttribute('post-type');
		filter.setAttribute('type', post_type);
		var hide_item = document.querySelector('.filter__category--item.hide');
		if (hide_item) {
			hide_item.classList.remove('hide');
		}
		filterItem.classList.add('hide');

		filter.removeAttribute('open');
		var titleC = post_type.charAt(0).toUpperCase() + post_type.slice(1);
		if (post_type == 'post') {
			titleC = 'Artigo';
		} else if (post_type == 'conteudos-especiais') {
			titleC = 'Conteúdos Especiais';
		}
		title.innerHTML = titleC;

		loadPosts(categoryId, post_type, 18);
	});
});

function checkCards() {
	const cards = document.querySelectorAll('.postCards__card');
	var qtd_posts = cards.length;
	return qtd_posts;
}

if (archive_btnMore) {
	archive_btnMore.addEventListener('click', () => {
		var number_posts = checkCards();
		var post_type_btn = filter.getAttribute('type');
		number_posts = number_posts + 6;
		loadPosts(categoryId, post_type_btn, number_posts);
	});
}

let cardBox2 = document.querySelector('.postCards');
async function loadPosts(categoryId, post_type, nposts) {
	let data = {
		category: categoryId,
		post_type: post_type,
		posts_page: nposts,
	};
	let send = await fetch(link + '/wp-admin/admin-ajax.php?action=filter', {
		mode: 'no-cors',
		method: 'POST',
		body: new URLSearchParams(data).toString(),
		headers: {'Content-type': 'application/x-www-form-urlencoded'},
	});
	let resp = await send.text();
	cardBox2.innerHTML = resp;
}

function btnMore_Ajax() {
	var number_posts = checkCards();
	var post_type_btn = filter.getAttribute('type');
	number_posts = number_posts + 6;
	loadPosts(categoryId, post_type_btn, number_posts);
}

function btnLessAjax() {
	var number_posts = checkCards();
	if (number_posts > 18) {
		number_posts = number_posts - 6;
	}
	var post_type_btn = filter.getAttribute('type');
	loadPosts(categoryId, post_type_btn, number_posts);
}
