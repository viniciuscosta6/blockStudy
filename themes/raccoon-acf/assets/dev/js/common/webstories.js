let carousel = tns({
	container: '.webstories__container',
	items: 2,
	fixedWidth: 110,
	gutter: 20,
	center: true,
	controls: false,
	nav: false,
	loop: true,
	swipeAngle: false,
	navPosition: 'bottom',
	mouseDrag: true,
	speed: 400,
	responsive: {
		768: {
			gutter: 40,
			fixedWidth: 150,
		},
	},
});
