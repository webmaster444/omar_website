$(function(){
    $('#imgs_wrapper').css('height',$('#imgs_wrapper img:first').css('height'));
    $('#imgs_wrapper').css('opacity',0);
    var angle = 0;
    $('#picBtn').change(function() {
        var clicked = $(this).is(":checked");
        if(!clicked){
            $('#imgs_wrapper').css('opacity',0);
        }else{
            $('#imgs_wrapper').css('opacity',1);
        }
    });

    $('#linesBtn').change(function() {
        var clicked = $(this).is(":checked");
        if(!clicked){
            $('#line_img').css('opacity',0);
        }else{
            $('#line_img').css('opacity',1);
        }
    });

    $('#redBtn').change(function() {
        var clicked = $(this).is(":checked");
        if(!clicked){
            $('#red_img').css('opacity',0);
        }else{
            $('#red_img').css('opacity',1);
        }
    });

    $('#blueBtn').change(function() {
        var clicked = $(this).is(":checked");
        if(!clicked){
            $('#blue_img').css('opacity',0);
        }else{
            $('#blue_img').css('opacity',1);
        }
    });        
    $('#blackBtn').change(function() {
        var clicked = $(this).is(":checked");
        if(!clicked){
            $('#black_img').css('opacity',0);
        }else{
            $('#black_img').css('opacity',1);
        }
    }); 

    $('#yellowBtn').change(function() {
        var clicked = $(this).is(":checked");
        if(!clicked){
            $('#yellow_img').css('opacity',0);
        }else{
            $('#yellow_img').css('opacity',1);
        }
    }); 

    $('#rotateLeft').click(function(){
        angle +=90;
        $("#imgs_wrapper").rotate(angle);
    });

    $('#rotateRight').click(function(){
        angle -=90;
        $("#imgs_wrapper").rotate(angle);
    });


    $('input[type="checkbox"]').change(function() {        
        $(this).parent('label').toggleClass('checked');        
    });
})