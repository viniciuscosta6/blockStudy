let hover1 = document.getElementById('hover1');
let hover2 = document.getElementById('hover2');
let hover3 = document.getElementById('hover3');
let banner1 = document.getElementById('banner1');
let banner2 = document.getElementById('banner2');
let banner3 = document.getElementById('banner3');

hover1.addEventListener(
	'mouseover',
	function (event) {
		hover1.style.color = '#1C1C1C';
		hover2.style.color = '#68686866';
		hover3.style.color = '#68686866';
		banner1.style.display = 'block';
		banner2.style.display = 'none';
		banner3.style.display = 'none';
	},
	false
);

hover2.addEventListener(
	'mouseover',
	function (event) {
		hover1.style.color = '#68686866';
		hover2.style.color = '#1C1C1C';
		hover3.style.color = '#68686866';
		banner1.style.display = 'none';
		banner2.style.display = 'block';
		banner3.style.display = 'none';
	},
	false
);

hover3.addEventListener(
	'mouseover',
	function (event) {
		hover1.style.color = '#68686866';
		hover2.style.color = '#68686866';
		hover3.style.color = '#1C1C1C';
		banner1.style.display = 'none';
		banner2.style.display = 'none';
		banner3.style.display = 'block';
	},
	false
);

let slider = tns({
	container: '.home-slider',
	slideBy: 'page',
	controls: false,
	autoplayButtonOutput: false,
	autoplayButton: false,
	autoplay: true,
	controlsPosition: 'bottom',
	navPosition: 'bottom',
	mouseDrag: true,
	playButton: false,
	navAsThumbnails: true,
	gutter: 50,
});
