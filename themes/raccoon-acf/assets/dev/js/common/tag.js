var tag_btnLess = document.querySelector('.less__tag');
var tag_btnMore = document.querySelector('.more__tag');
let tagBox = document.querySelector('.tag__cards');
var link = document.querySelector('.tag-url').getAttribute('url');
var tag_name = document.querySelector('.tag-url').getAttribute('tag');

// função pra verificar a quantidade de posts

function checkCards() {
	const cards = document.querySelectorAll('.tag__card');
	var qtd_posts = cards.length;
	return qtd_posts;
}

if (tag_btnMore) {
	tag_btnMore.addEventListener('click', () => {
		nposts = checkCards();
		nposts = nposts + 6;
		loadPosts(nposts, tag_name);
	});
}

// ====== Requisição Ajax =======

async function loadPosts(nposts, tag_name) {
	let data = {
		posts_page: nposts,
		tag_name: tag_name,
	};
	let send = await fetch(link + '/wp-admin/admin-ajax.php?action=loadTags', {
		mode: 'no-cors',
		method: 'POST',
		body: new URLSearchParams(data).toString(),
		headers: {
			'Content-type': 'application/x-www-form-urlencoded',
		},
	});
	let resp = await send.text();
	tagBox.innerHTML = resp;
}

// função pra checar os botões de carregar mais/menos depois da requisição

function loadMoreBtn_tag() {
	nposts = checkCards();
	nposts = nposts + 6;
	loadPosts(nposts, tag_name);
}

function loadLessBtn_tag() {
	nposts = checkCards();
	if (nposts <= 6) {
		nposts = nposts - 3;
	} else {
		nposts = nposts - 6;
	}
	loadPosts(nposts, tag_name);
}
