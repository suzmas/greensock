!function(e) {
  var a = e("img"),
    i = e("h2");
  TweenLite.from(a, 1, {x: -200}),
  TweenLite.from(i, 1, {
    autoAlpha: 0,
    delay: 1
  })
}(jQuery);

console.log("yeah")
