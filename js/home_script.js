$(function(){
	$(window).scroll(function() {
	  window.location.href="behaviour.html";
	});

	$('body').on('mousewheel', function (event) {
		window.location.href="behaviour.html";
	});
})