
new WOW().init();
$('.scroll').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
  return false;
});
$('.clientslider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
  dots: false,
  prevArrow: $('.commentleft'),
  nextArrow: $('.commentright'),
});

$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  dots: true,
});
