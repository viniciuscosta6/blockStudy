window.document.onload = function (e) {
	var filterItems = document.querySelectorAll('.filter__category--item');
	var nposts = 4;
	var title = document.querySelector('.filter__category--title');
	var filter = document.querySelector('.filter__category');
	var link = document.querySelector('.filter').getAttribute('url');
	var special_btnLess = document.querySelector('.less__special');
	var special_btnMore = document.querySelector('.more__special');

	filterItems.forEach(function (filterItem) {
		filterItem.addEventListener('click', function get_term() {
			var term_id = filterItem.getAttribute('special-type');
			var term_text = filterItem.getAttribute('value');
			if (term_id === null) {
				term_id = 'all';
			}
			console.log(term_text);
			console.log(term_id);
			filter.removeAttribute('open');
			title.innerText = term_text;
			nposts = checkCards();
			loadPosts(term_id, nposts);
			btns(term_id);
		});
	});
	// função pra verificar a quantidade de posts
	function checkCards() {
		const cards = document.querySelectorAll('.postCards__card');
		var qtd_posts = cards.length;
		return qtd_posts;
	}

	if (special_btnMore) {
		special_btnMore.addEventListener('click', () => {
			nposts = checkCards();
			nposts = nposts + 6;
			term_id = 'all';
			loadPosts(nposts, term_id);
			btns();
		});
	}

	let cardBox3 = document.querySelector('.postCards');
	async function loadPosts(term_id, nposts) {
		let data = {
			term_id: term_id,
			nposts: nposts,
		};
		let send = await fetch(link + '/wp-admin/admin-ajax.php?action=loadTaxonomy', {
			mode: 'no-cors',
			method: 'POST',
			body: new URLSearchParams(data).toString(),
			headers: {
				'Content-type': 'application/x-www-form-urlencoded',
			},
		});
		let resp = await send.text();
		cardBox3.innerHTML = resp;
	}

	function btnMore_Special() {
		nposts = checkCards();
		if (nposts <= 6) {
			nposts = 6;
		}
		nposts = nposts + 6;
		loadPosts(term_id, nposts);
	}

	function btnLess_Special() {
		nposts = checkCards();
		if (nposts <= 6) {
			nposts = 6;
		} else {
			nposts = nposts - 6;
		}
		loadPosts(term_id, nposts);
	}
};
