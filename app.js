$(document).ready(function(){
    
    // $('.text1').hide();

    $('#submit').click(function(){
        $('.text1').fadeOut(3000 ,function(){
            $('#submit').text('Its GOME');
        });
    })

    $('#submit3').click(function(){
        $('.text1').fadeIn(3000 ,function(){
            $('#submit3').text('Its CAME');
        });
    })

    $('#submit2').on('click',function(){

        $('ul').append('<li>HUnterman Team</li>');

    })

    $('#submit4').on('click',function(){

        $('.text1').css('color','red');

    })

    $('#submit5').on('click',function(){

        $('.text1').css('font-size','20px');

    })

    $('#submit5').on('click',function(){
      
        $('.html').html('<h3>Lorem ipsum dolor sit amet </h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>');

    });

    $('#submit7').click(function(){
        $('.text2').slideUp(3000);
    })
   

    $('#submit6').click(function(){
        $('.text2').slideDown(3000);
    })
   


  });