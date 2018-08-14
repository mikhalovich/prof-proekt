$(function() {

	$('.logo-litera').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace('f', '<span>f</span>'));
	});
	$('.logo-hyphen').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace('-', '<span>-</span>'));
	});
});
