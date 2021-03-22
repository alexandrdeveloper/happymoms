$(function() {

	let burger = $('.b-burger');

	burger.on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('b-burger_active');
	});

});
