$(document).ready(function() {

	$(function() {
	    $('.toggler').click(function() {
	        $(this).find('div').slideToggle();
	    });
	});

	$(function() {
		$('.nav a').smoothScroll();
	});

});