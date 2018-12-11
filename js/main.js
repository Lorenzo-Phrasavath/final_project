$(document).ready(function() {

    function resetAll () {
        $('.text').hide();
        $('.shape').animate({width: '50px'}, 200);
        $('.shape').animate({height: '400px'}, 200);
        $('.shape').css('background-color', '#FFF');
        $('audio').each(function() {
          this.pause();
          this.currentTime = 0;
        });
        $('.audio').hide();
        $('.hide').hide();
        $('.piano-keys').delay(400).show();
    };

    function hideMusic() {
        $('#original_dixieland-audio').hide();
        $('#louis_armstrong-audio').hide();
        $('#benny_goodman-audio').hide();
        $('#glenn_miller-audio').hide();
        $('#dizzy_gillespie-audio').hide();
        $('#art_blakey-audio').hide();
        $('#miles_davis-audio').hide();
        $('#chet_baker-audio').hide();
        $('#john_coltrane-audio').hide();
        $('#charles_mingus-audio').hide();
        $('#miles_davis2-audio').hide();
        $('#weather_report-audio').hide();
        $('#mario_bauza-audio').hide();
        $('#stan_getz-audio').hide();
        $('#grover_washington-audio').hide();
        $('#kenny_g-audio').hide();
        $('#jamiroquai-audio').hide();
        $('#us3-audio').hide();
    };

    function pause () {
      $('audio').each(function() {
        this.pause();
        this.currentTime = 0;
      $('.icon').attr('src', 'images/play.png');
      });
    };

    $('#dixieland-key').click(function(){
        resetAll();
        $('#dixieland-key').hide();
        $('#dixieland').css('background-color', '#F5B041');
        $('#hide1').show();
        $('#dixieland').animate({height: '510px'}, 400);
        $('#dixieland').animate({width: '400px'}, 400);
        $('#dixieland-text').delay(1100).slideDown();
    });
    $('#swing-key').click(function(){
        resetAll();
        $('#swing-key').hide();
        $('#swing').css('background-color', '#F4D03F');
        $('#hide2').show();
        $('#swing').animate({height: '510px'}, 400);
        $('#swing').animate({width: '400px'}, 400);
        $('#swing-text').delay(1100).slideDown();
    });
    $('#bebop-key').click(function(){
        resetAll();
        $('#bebop-key').hide();
        $('#bebop').css('background-color', '#EC7063');
        $('#hide3').show();
        $('#bebop').animate({height: '510px'}, 400);
        $('#bebop').animate({width: '400px'}, 400);
        $('#bebop-text').delay(1100).slideDown();
    });
    $('#cool-key').click(function(){
        resetAll();
        $('#cool-key').hide();
        $('#cool').css('background-color', '#5DADE2');
        $('#hide4').show();
        $('#cool').animate({height: '510px'}, 400);
        $('#cool').animate({width: '400px'}, 400);
        $('#cool-text').delay(1100).slideDown();
    });
    $('#free-key').click(function(){
        resetAll();
        $('#free-key').hide();
        $('#free').css('background-color', '#45B39D');
        $('#hide5').show();
        $('#free').animate({height: '510px'}, 400);
        $('#free').animate({width: '400px'}, 400);
        $('#free-text').delay(1100).slideDown();
    });
    $('#fusion-key').click(function(){
        resetAll();
        $('#fusion-key').hide();
        $('#fusion').css('background-color', '#DC7633');
        $('#hide6').show();
        $('#fusion').animate({height: '510px'}, 400);
        $('#fusion').animate({width: '400px'}, 400);
        $('#fusion-text').delay(1100).slideDown();
    });
    $('#latin-key').click(function(){
        resetAll();
        $('#latin-key').hide();
        $('#latin').css('background-color', '#58D68D');
        $('#hide7').show();
        $('#latin').animate({height: '510px'}, 400);
        $('#latin').animate({width: '400px'}, 400);
        $('#latin-text').delay(1100).slideDown();
    });
    $('#smooth-key').click(function(){
        resetAll();
        $('#smooth-key').hide();
        $('#smooth').css('background-color', '#FADBD8');
        $('#hide8').show();
        $('#smooth').animate({height: '510px'}, 400);
        $('#smooth').animate({width: '400px'}, 400);
        $('#smooth-text').delay(1100).slideDown();
    });
    $('#acid-key').click(function(){
        resetAll();
        $('#acid-key').hide();
        $('#acid').css('background-color', '#C39BD3');
        $('#hide9').show();
        $('#acid').animate({height: '510px'}, 400);
        $('#acid').animate({width: '400px'}, 400);
        $('#acid-text').delay(1100).slideDown();
    });

    $('.album-cover').click(function() {

        hideMusic();

        switch ($(this).attr("id")) {
          case "original_dixieland-cover":
            pause();
            $('#original_dixieland-audio').show();
            break;
          case "louis_armstrong-cover":
            pause();
            $('#louis_armstrong-audio').show();
            break;
          case "benny_goodman-cover":
            pause();
            $('#benny_goodman-audio').show();
            break;
          case "glenn_miller-cover":
            pause();
            $('#glenn_miller-audio').show();
            break;
          case "dizzy_gillespie-cover":
            pause();
            $('#dizzy_gillespie-audio').show();
            break;
          case "art_blakey-cover":
            pause();
            $('#art_blakey-audio').show();
            break;
          case "miles_davis-cover":
            pause();
            $('#miles_davis-audio').show();
            break;
          case "chet_baker-cover":
            pause();
            $('#chet_baker-audio').show();
            break;
          case "john_coltrane-cover":
            pause();
            $('#john_coltrane-audio').show();
            break;
          case "charles_mingus-cover":
            pause();
            $('#charles_mingus-audio').show();
            break;
          case "miles_davis2-cover":
            pause();
            $('#miles_davis2-audio').show();
            break;
          case "weather_report-cover":
            pause();
            $('#weather_report-audio').show();
            break;
          case "mario_bauza-cover":
            pause();
            $('#mario_bauza-audio').show();
            break;
          case "stan_getz-cover":
            pause();
            $('#stan_getz-audio').show();
            break;
          case "grover_washington-cover":
            pause();
            $('#grover_washington-audio').show();
            break;
          case "kenny_g-cover":
            pause();
            $('#kenny_g-audio').show();
            break;
          case "jamiroquai-cover":
            pause();
            $('#jamiroquai-audio').show();
            break;
          case "us3-cover":
            pause();
            $('#us3-audio').show();
            break;
          }
      });


    $('.hide').click(function(){
      resetAll();
    });

  $(window).resize(function() {
      location.reload();
    });


});
