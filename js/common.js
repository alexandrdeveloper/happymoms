$(function() {

	let burger = $('.b-burger');
	let menu = $('.b-menu');

	burger.on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('b-burger_active');
		menu.toggleClass('b-menu_visible');
		$('.b-logo_home').fadeToggle(300);

	});

	let sidebar = $('.b-sidebar');
	let sbToggle = $(".b-sidebar__toggle");
	let sbClose = $('.b-sidebar__close');
	let body = $('body');

	sbToggle.on('click', function(e) {
		e.preventDefault();		
		sidebar.addClass('b-sidebar_opened');
		body.addClass('b-page_shadow');

	});

	sbClose.on('click', function(e) {
		e.preventDefault();		
		sidebar.removeClass('b-sidebar_opened');
		body.removeClass('b-page_shadow');

	});

	$(document).mouseup(function (e){ 
		if (!sidebar.is(e.target) && sidebar.has(e.target).length === 0 ) { 
			sidebar.removeClass('b-sidebar_opened');
			body.removeClass('b-page_shadow');
		}
	});

	let postCarousel = $('.post-more__row'); 
	let postCarouselItem = $('.post-more__item');
	let windowW = $(window).innerWidth();

	const slider = postCarousel.slick({
		slidesToShow: 1, 
		centerMode: true,
		centerPadding: '20px',
		arrows: false
	});

	$(document).ready(function() {
		if (windowW < 768) {
			bootstrapOff(postCarousel, postCarouselItem);
			slider.slick('init');
		} else {
			slider.slick('unslick');
		}	
	} );
	$(window).resize(function() {
		let windowW = $(window).innerWidth();
		console.log(windowW);
		if (windowW < 768) {
			bootstrapOff(postCarousel, postCarouselItem); 
			slider.slick('init');
			slider.slick('refresh');

		} else {
			bootstrapOn(postCarousel, postCarouselItem); 
			slider.slick('unslick');
		}
	});

	

	function bootstrapOff (a, b) {
		a.removeClass('row');
		b.removeClass('col-lg-4, col-sm-6');
		
	} 
	function bootstrapOn (a, b) {
		a.addClass('row');
		b.addClass('col-lg-4, col-sm-6');
	}


});
