(function($) {

	var img = $('img'),
		h2 = $('h2'),
		h1 = $('h1'),
		intro = $('.intro'),
		listItem = $('ul li'),
		tl = new TimelineLite();

	// Adding Tweens To A Timeline
	tl
		.from(h1, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
		.add('intro')
		.from(intro, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
		.from(img, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, 'intro+=1')
		.from(h2, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, 'intro+=2')
		.from(listItem, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, 'intro+=3')
    .from(listItem, 1, {opacity:1, delay:1, ease:Strong.easeIn})

})(jQuery);
