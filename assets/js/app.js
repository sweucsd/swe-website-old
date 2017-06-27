var main = function() {
	$('navigation').show();

	$('.nav-toggle').click(function() {
		// $('nav').toggleClass('active');
		if($('.nav-toggle').hasClass() === 'nav-on') {
			// make toggle text less
			// $('.nav-toggle').html('less');

			// changing mouse pointer
			// $(this).addClass('nav-toggle--less').removeClass('nav-toggle--more');
			$('.navigation').hide();
			//about content changes
			// $('.about__content').addClass('about__content--on').removeClass('about__content--off');

			//making header also dark
			// $('header.masthead').addClass('nav-on');

			// left aligning text
			// $('.masthead .col--2').removeClass('align-right');

		}
		else {
			//make toggle text 'more'
			$('.navigation').show();

			// change pointers
			// $(this).addClass('nav-toggle--more').removeClass('nav-toggle--less');

			// about content toggling
			// $('.about__content').addClass('about__content--off').removeClass('about__content--on');

			// making header white again
			// $('header.masthead').removeClass('nav-on');

			// right aligning text
			// $('.masthead .col--2').addClass('align-right');
		}
	});
};

$(document).ready(main);
