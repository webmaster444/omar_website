$('.menu-toggle').click(function() {
  $('ul').toggleClass('opening');
  $(this).toggleClass('open');
})

$(document).ready(function(){    
    var s = Math.random()*20;
        s = s % 4;
        sv = Math.floor(s);
        console.log(sv);
        if(sv==0){
          $('#freq1').show();
          $('#freq3').hide();
          $("#home_advance").trigger("click");            
        }else{
          $('#freq3').show();
          $('#freq1').hide();
          $("#home_advance1").trigger("click");            
        }
    
})