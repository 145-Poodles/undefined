$(window).load(function() {
    $('#box:nth-of-type(1)>img').mouseenter(function() {
        $(this).css('opacity', '0.6');
        $('#box:nth-of-type(1)>span').fadeIn(400);
    });
    $('#box:nth-of-type(1)>img').mouseleave(function() {
        $(this).css('opacity', '1');
        $('#box:nth-of-type(1)>span').fadeOut(160);
    });
    $('#box:nth-of-type(2)>img').mouseenter(function() {
        $(this).css('opacity', '0.6');
        $('#box:nth-of-type(2)>span').fadeIn(400);
    });
    $('#box:nth-of-type(2)>img').mouseleave(function() {
        $(this).css('opacity', '1');
        $('#box:nth-of-type(2)>span').fadeOut(160);
    });
    $('#box:nth-of-type(3)>img').mouseenter(function() {
        $(this).css('opacity', '0.6');
        $('#box:nth-of-type(3)>span').fadeIn(400);
    });
    $('#box:nth-of-type(3)>img').mouseleave(function() {
        $(this).css('opacity', '1');
        $('#box:nth-of-type(3)>span').fadeOut(160);
    });
    $('#box:nth-of-type(1)>img').click(function() {
        $('#lightbox').hide('<button class="toggle2"></button>');
        $('#lightbox').append('<button class="toggle"></button>');
        $('#lightbox').append('<img class="large" src="images/iphone.png">');
        $('#lightbox').append('<div class="iphone-display-1"></div>');
        $('#darkness, #lightbox').fadeIn(400);
        $('.toggle').click(function() {
            $('#lightbox>div:last').toggleClass('iphone-display-1 iphone-display-2');
        });
        setTimeout(function() {
            $('.toggle').addClass('flick');
            setTimeout(function() {
                $('.toggle').removeClass('flick');
            }, 600)
        }, 600)
    });
    $('#box:nth-of-type(2)>img').click(function() {
        $('#lightbox').append('<img class="large" src="images/xperia-white.png">');
        $('#lightbox').append('<div class="xperia-display-1"></div>');
        $('#darkness, #lightbox').fadeIn(400);
        $('.xperia-display-1').click(function() {
            $('#lightbox>div:last').toggleClass('.xperia-display-1 xperia-display-2');
        });
        setTimeout(function() {
            $('.xperia-display-1').addClass('screen-flick');
            setTimeout(function() {
                $('.xperia-display-1').removeClass('screen-flick');
            }, 600)
        }, 600)
    });
    $('#box:nth-of-type(3)>img').click(function() {
        $('#lightbox').append('<button class="toggle2"></button>');
        $('#lightbox').append('<img class="large" src="images/galaxy.png">');
        $('#lightbox').append('<div class="galaxy-display-1"></div>');
        $('#darkness, #lightbox').fadeIn(400);
        $('.toggle2').click(function() {
            $('#lightbox>div:last').toggleClass('.galaxy-display-1 galaxy-display-2');
        });
        setTimeout(function() {
            $('.toggle2').addClass('flick');
            setTimeout(function() {
                $('.toggle2').removeClass('flick');
            }, 600)
        }, 600)
    });
    $('#darkness').click(function() {
        $('#darkness, #lightbox').fadeOut();
        $('.large').fadeOut();
        $('.iphone-display-2').fadeOut();
        $('.iphone-display-1').fadeOut();
        $('.toggle').fadeOut();
    });
});