$(function(){
	$(window).scroll(function() {
	  window.location.href="behaviour.html";
	});

	$('body').on('mousewheel', function (event) {
		window.location.href="behaviour.html";
	});

	var mousewheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
 
	if (document.attachEvent) //if IE (and Opera depending on user setting)
	    document.attachEvent("on"+mousewheelevt, function(e){window.location.href="behaviour.html";})
	else if (document.addEventListener) //WC3 browsers
	    document.addEventListener(mousewheelevt, function(e){window.location.href="behaviour.html";}, false)
})