$(window).load(function() {
    // $('ul>li>a').mouseover(function() {
    //     $(this).css('color', 'black');
    // });
    // $('ul>li>a').mouseleave(function() {
    //     $(this).css('color', '#902634');
    // });
    $('.show').click(function() {
        $('header, main').animate({
            marginLeft: "+=300px"
        }, 600);
        $('aside').animate({
            left: "+=300px"
        }, 600);
        $('.show').hide();
        setTimeout(function() {
            $('.hide').show();
        }, 600)
    });
    $('.hide').click(function() {
        $('header, main').animate({
            marginLeft: "0"
        }, 600);
        $('aside').animate({
            left: "-=300px"
        }, 600);
        console.log('works');
        $('.hide').hide();
        setTimeout(function() {
            $('.show').show();
        }, 600)
    });
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
    $('#box>img').click(function() {
        $('#lightbox').append('<button class="toggle"></button>');
        $('#lightbox').append('<img class="large" src="images/iphoneLarge.png">');
        $('#lightbox').append('<div class="iphone-display-2"></div>');
        $('#darkness, #lightbox').fadeIn(400);
        $('.toggle').click(function() {
            $('#lightbox>div:last').toggleClass('iphone-display-2 iphone-display-1');
        });
    });
    $('#darkness').click(function() {
    	$('#darkness, #lightbox').fadeOut();
        $('.large').fadeOut();
        $('.iphone-display-2').fadeOut();
        $('.iphone-display-1').fadeOut();
        $('.toggle').fadeOut();
    });
});