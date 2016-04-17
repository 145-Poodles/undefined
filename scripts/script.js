$(window).load(function() {
    var bodyHeight = document.getElementById("body");
    var height = bodyHeight.clientHeight;

    $(window).scroll(function() {
        if ($(this).scrollTop() >= height + 150) {
            console.log(height);
            $('.class-third').fadeIn(1000);
        }
        if ($(this).scrollTop() >= height + 472) {
            console.log(height);
            $('.class-fourth, .logo').fadeIn(1000);
        }
    });
    setTimeout(function() {
        $('.team>div:nth-child(1)').fadeIn(1000);
        $('.team>div:nth-child(2)').fadeIn(1000);
        $('.team>div:nth-child(3)').fadeIn(1000);
        $('.team>div:nth-child(4)').fadeIn(1000);
        $('.team>div:nth-child(5)').fadeIn(1000);
        $('.team>div:nth-child(1)>img').animate({
            top: "+=100"
        }, 1150);
        $('.team>div:nth-child(2)>img').animate({
            top: "-=100"
        }, 1150);
        $('.team>div:nth-child(3)>img').animate({
            top: "+=100"
        }, 1150);
        $('.team>div:nth-child(4)>img').animate({
            top: "-=100"
        }, 1150);
        $('.team>div:nth-child(5)>img').animate({
            top: "+=100"
        }, 1150);
        $('.class-first, .class-second').fadeIn(1000);
        $('#loading-screen').fadeOut();
    }, 400);
    // $('.class-first').fadeIn(600).css('visibility', 'visible');
    // $('.class-second').fadeIn(600).css('visibility', 'visible');
    $('body').fadeIn();

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

    // ARCHIVES IMAGES


    $('.archives-wallpapers>div').click(function() {
        $('#lightbox').empty();
        $('#darkness, #lightbox').fadeIn(400);
    });
    $('.archives-wallpapers>div:nth-of-type(1)').click(function() {
        $('#lightbox').append('<img class="children" src="images/img-1.jpg" />');
    });
    $('.archives-wallpapers>div:nth-of-type(2)').click(function() {
        $('#lightbox').append('<img class="children" src="images/img-2.jpg" />');
    });
    $('.archives-wallpapers>div:nth-of-type(3)').click(function() {
        $('#lightbox').append('<img class="children"  src="images/img-3.jpg" />');
    });
    $('.archives-wallpapers>div:nth-of-type(4)').click(function() {
        $('#lightbox').append('<img class="children"  src="images/img-4.jpg" />');
    });
    $('.archives-wallpapers>div:nth-of-type(5)').click(function() {
        $('#lightbox').append('<img class="children"  src="images/img-5.jpg" />');
    });
    $('.archives-wallpapers>div:nth-of-type(6)').click(function() {
        $('#lightbox').append('<img class="children"  src="images/img-6.jpg" />');
    });
    $('.archives-wallpapers>div:nth-of-type(7)').click(function() {
        $('#lightbox').append('<img class="children"  src="images/img-17.jpg" />');
    });
    $('.archives-wallpapers>div:nth-of-type(8)').click(function() {
        $('#lightbox').append('<img class="children"  src="images/img-8.jpg" />');
    });
    $('.archives-wallpapers>div:nth-of-type(9)').click(function() {
        $('#lightbox').append('<img class="children"  src="images/img-9.jpg" />');
    });
    $('.archives-wallpapers>div:nth-of-type(10)').click(function() {
        $('#lightbox').append('<img class="children"  src="images/img-10.jpg" />');
    });
    $('.archives-wallpapers>div:nth-of-type(11)').click(function() {
        $('#lightbox').append('<img class="children"  src="images/img-11.jpg" />');
    });
    $('.archives-wallpapers>div:nth-of-type(12)').click(function() {
        $('#lightbox').append('<img class="children"  src="images/img-12.jpg" />');
    });
    $('.archives-wallpapers>div:nth-of-type(13)').click(function() {
        $('#lightbox').append('<img class="children"  src="images/img-13.jpg" />');
    });
    $('.archives-wallpapers>div:nth-of-type(14)').click(function() {
        $('#lightbox').append('<img class="children"  src="images/img-14.jpg" />');
    });
    $('.archives-wallpapers>div:nth-of-type(15)').click(function() {
        $('#lightbox').append('<img class="children"  src="images/img-15.jpg" />');
    });
});

