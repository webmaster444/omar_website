$('.menu-toggle').click(function() {

  $('ul').toggleClass('opening');
  $(this).toggleClass('open');

})

$(document).ready(function(){    
    $("#home_advance").trigger("click");            
})