!function(n) {
  function o() {
    console.log("animation started")
  }
  function e() {
    i.text(c++)
  }
  function t() {
    console.log("animation completed")
  }
  var a = n("img"),
    i = n("h2"),
    c = 0;
  TweenLite.from(a, 1, {
    x: -200,
    ease: Power1.easeInOut,
    onStart: o,
    onUpdate: e,
    onComplete: t
  })
}(jQuery);
