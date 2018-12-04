$(document).ready(function() {

    function resetAll () {
        $('.text').hide();
        $('.info').animate({width: '50px'}, "fast");
        $('.info').animate({height: '400px'}, "fast");
        $('.info').css('background-color', 'grey');
        $('.hide').hide();
        $('.show').show();
    };

    $('#show1').click(function(){
        resetAll();
        $('#div1').css('background-color', '#EC7063');
        $('#show1').hide();
        $('#hide1').show();
        $('#div1').animate({height: '500px'}, 400);
        $('#div1').animate({width: '400px'}, 400);
        $('#text1').delay(1100).slideDown();
    });

    $('#show2').click(function(){
        resetAll();
        $('#div2').css('background-color', '#58D68D');
        $('#show2').hide();
        $('#hide2').show();
        $('#div2').animate({height: '500px'}, 400);
        $('#div2').animate({width: '400px'}, 400);
        $('#text2').delay(1100).slideDown();
    });

    $('#show3').click(function(){
        resetAll();
        $('#div3').css('background-color', '#5DADE2');
        $('#show3').hide();
        $('#hide3').show();
        $('#div3').animate({height: '500px'}, 400);
        $('#div3').animate({width: '400px'}, 400);
        $('#text3').delay(1100).slideDown();
    });

    $('#show4').click(function(){
        resetAll();
        $('#div4').css('background-color', '#F4D03F');
        $('#show4').hide();
        $('#hide4').show();
        $('#div4').animate({height: '500px'}, 400);
        $('#div4').animate({width: '400px'}, 400);
        $('#text4').delay(1100).slideDown();
    });

    $('.hide').click(function(){
      resetAll();
    });


});
