$(function() {
  const hero = $('.hero img');
  const thumbs = $('.thumbnails');
  thumbs.on('click', 'img', function(event) {
    let image = this.src;
    hero.attr('src', image).attr('alt', this.alt);
  });
  thumbs.on('keydown', 'a', function(event) {
    console.log('event.keyCode', event.keyCode);
    if(event.keyCode === 13) {
      console.log($(this).children());
      let image = $(this).children();
      hero.attr('src', image[0].src).attr('alt', image[0].alt);
    }
  });
});
