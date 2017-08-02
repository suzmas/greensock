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
    .from(listItem, 1, {opacity:1, delay:1, ease:Strong.easeIn});

    //create a timeline that calls myFunction() when it completes
    var tl = new TimelineLite({onComplete:logThat});

    //now we'll use chaining, but break each step onto a different line for readability...
    tl.fromTo(h1, 1, {left:0}, {left:-100})    //tween element's left from 0 to -100
      .to(h1, 1, {top:50}, "-=0.25")        //then tween element's top to 50, starting it 0.25 seconds before the previous tween ends
      .set(h1, {opacity:0})            //then set element.opacity to 0.5 immediately
      .call(logThis)            //then call otherFunction()
      .staggerTo([h2, intro, listItem], 1.5, {rotation:45}, 0.25); //finally tween the rotation of element1, element2, and element3 to 45 and stagger the start times by 0.25

    function logThat() { console.log("that") }
    function logThis() { console.log("this") }

})(jQuery);
