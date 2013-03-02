jQuery.fn.fadingLinks = function(settings) {
  return this.each(function() {
    var el = $(this);
    var originalbg = el.css('background-color');
    var original = el.css('color');
    el.hover(function() { 
      el.stop().animate({ /*backgroundColor: settings.backgroundColor, */color: settings.color }, settings.duration);
    }, function() {
      el.stop().animate({ /*backgroundColor: originalbg,*/ color: original }, settings.duration*3); 
    });
    return el;
  });
};
$(document).ready(function() {
  $('[data-hover-color]').each(function() {
    var el = $(this);
    var color = el.attr('data-hover-color');
    el.find('a').fadingLinks({
      backgroundColor: color,
      color: el.attr('data-hover-color'),//'#ffffff',
      duration: 100
    });
  });
});