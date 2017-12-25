$(document).ready(function(){

	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scroll').fadeIn();
		} else {
			$('.scroll').fadeOut();
		}
	});

	//Click event to scroll to top
	$('.scroll').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

});


$('.slider').flickity({
			autoPlay: true,
			cellAlign: 'left',
			contain: true,
			pageDots: false
		});
$('.gallerywrapper').slick({
			autoplay: true,
			dots: false,
			speed: 500,
			slidesToShow: 3,
			centerMode: true,
			variableWidth: true,
			prevArrow: $('.slidechanger .fa-angle-left'),
			nextArrow: $('.slidechanger .fa-angle-right'),
 });
 $('.portfolio_items').slick({
			 autoplay: true,
			 dots: false,
			 speed: 500,
			 slidesToShow: 4,
			 slidesToScroll: 1,
			 prevArrow: $('.slidechanger1 .fa-angle-left'),
			 nextArrow: $('.slidechanger1 .fa-angle-right'),
	});
	new WOW().init();


















$(document).ready(function() {
  $('p').click(function(){
  $color = $(this).parent('').attr('class');
  $color= '.'+ $color+ ' '+'.slideshow';
  $($color).stop().slideToggle('slow');
});
});
