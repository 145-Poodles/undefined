$(window).load(function() {
    $('.team>div:nth-child(1)').fadeIn(500);
    $('.team>div:nth-child(2)').fadeIn(1000);
    $('.team>div:nth-child(3)').fadeIn(1500);
    $('.team>div:nth-child(4)').fadeIn(2000);
    $('.team>div:nth-child(5)').fadeIn(2500);
    $('body').fadeIn();
    $('#loading-screen').fadeOut();

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
        $('.toggle2').hide();
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
        $('.toggle2').hide();
        $('#lightbox').append('<img class="large" src="images/xperia-white.png">');
        $('#lightbox').append('<div class="xperia-display-1"></div>');
        $('#darkness, #lightbox').fadeIn(400);
        $('.xperia-display-1').click(function() {
            $('#lightbox>div:last').toggleClass('.xperia-display-1 xperia-display-2');
        });
        // setTimeout(function() {
        //     $('.xperia-display-1').addClass('screen-flick');
        //     setTimeout(function() {
        //         $('.xperia-display-1').removeClass('screen-flick');
        //     }, 600)
        // }, 600)
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
    $('.wallpapers>div:nth-of-type(1)').click(function() {
        $('#lightbox').append('<img src="images/child-display-1.jpg" />');
        $('#darkness, #lightbox').fadeIn(400);
    });
    $('.wallpapers>div:nth-of-type(2)').click(function() {
        $('#lightbox').append('<img src="images/child-display-2.jpg" />');
        $('#darkness, #lightbox').fadeIn(400);
    });
    $('.wallpapers>div:nth-of-type(3)').click(function() {
        $('#lightbox').append('<img src="images/child-display-3.jpg" />');
        $('#darkness, #lightbox').fadeIn(400);
    });
        $('.wallpapers>div').click(function() {
            $('#lightbox').empty();
            $('#darkness, #lightbox').fadeIn(400);
        });
        $('.wallpapers>div:nth-of-type(1)').click(function() {
            $('#lightbox').append('<img class="children" src="images/child-display-1.jpg" />');
        });
        $('.wallpapers>div:nth-of-type(2)').click(function() {
            $('#lightbox').append('<img class="children" src="images/child-display-2.jpg" />');
        });
        $('.wallpapers>div:nth-of-type(3)').click(function() {
            $('#lightbox').append('<img class="children"  src="images/child-display-3.jpg" />');
        });
        $('.wallpapers>div:nth-of-type(4)').click(function() {
            $('#lightbox').append('<img class="children"  src="images/child-display-4.jpg" />');
        });
        $('.wallpapers>div:nth-of-type(5)').click(function() {
            $('#lightbox').append('<img class="children"  src="images/child-display-5.jpg" />');
        });
        $('.wallpapers>div:nth-of-type(6)').click(function() {
            $('#lightbox').append('<img class="children"  src="images/child-display-6.jpg" />');
        });
        $('.wallpapers>div:nth-of-type(7)').click(function() {
            $('#lightbox').append('<img class="children"  src="images/child-display-7.jpg" />');
        });
        $('.wallpapers>div:nth-of-type(8)').click(function() {
            $('#lightbox').append('<img class="children"  src="images/child-display-8.jpg" />');
        });
        $('.wallpapers>div:nth-of-type(9)').click(function() {
            $('#lightbox').append('<img class="children"  src="images/child-display-9.jpg" />');
        });
        $('.wallpapers>div:nth-of-type(10)').click(function() {
            $('#lightbox').append('<img class="children"  src="images/child-display-10.jpg" />');
        });
});