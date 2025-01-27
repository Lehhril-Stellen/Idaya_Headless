$(window).on("load resize scroll", function() {
    $(".home").each(function() {
        $(this).find(".content-inside").addClass('active');
    });
});

$(window).on("scroll", function() {
    $(".home").each(function() {
        var windowTop = $(window).scrollTop();
        var elementTop = $(this).offset().top;
        var leftPosition = windowTop - elementTop;
        var rightPosition = windowTop - elementTop;
        $(this).find(".image1 img").css({
            transform: 'translateX(-' + leftPosition / 16 + 'px)'
        });
     
        $(this).find(".image2 img").css({
            transform: 'translateX(' + rightPosition / 16 + 'px)'
        });
    });
});

$(window).on("scroll", function() {
    $(".page-section.active").each(function() {
        var windowTop = $(window).scrollTop();
        var elementTop = $(this).offset().top;
        var elementTopMountain = $(this).offset().top;
        var topPosition = windowTop - elementTop;
        var bottomPosition = windowTop - elementTop;
        var movePosition = windowTop - elementTopMountain;
        $(this).find(".vscrolling").css({
            transform: 'translateY(-' + topPosition / 13 + 'px)',
        });
   
        $(this).find(".vscrolling2").css({
            transform: 'translateY(' + bottomPosition / 13 + 'px)'
        });
        $(this).find(".mountain").css({
            transform: 'translateY(-' + movePosition / 8 + 'px)'
        });
    });


    $(".mountain-section.active").each(function() {
        var windowTop = $(window).scrollTop();
        var elementTop = $(this).offset().top - 200;
     
        var mountainTopPosition = windowTop - elementTop;
        var mountainBottomPosition = windowTop - elementTop;

        $(this).find(".moutain_vscrolling").css({
            transform: 'translateY(-' + mountainTopPosition / 13 + 'px)',
        });
     
        $(this).find(".moutain_vscrolling2").css({
            transform: 'translateY(' + mountainBottomPosition / 13 + 'px)'
        });

    });
});

$(window).on("scroll", function() {
    $(".roots-banner").each(function() {
        var windowTop = $(window).scrollTop();
        var elementTop = $(this).offset().top;
        var btmPosition = windowTop - elementTop;
        var botomPosition = windowTop - elementTop;
        $(this).find(".anim1").css({
            transform: 'translateY(' + btmPosition / 2 + 'px)'
        });
     
        $(this).find(".anim2").css({
            transform: 'translateY(' + botomPosition / 3 + 'px)'
        });
    });
});

$(document).ready(function() {

    $(".age_btn").click(function(event) {
        event.preventDefault()
        $('.overlay').addClass('disappear');
        $('html,body').addClass('headerActive');
        $(".content-inside").addClass('disappear');
    })

    var clouds = $('.clound-image'),
        timeline = [];
    for (var clIndex = 0; clIndex < clouds.length; ++clIndex) {
     
        var mesure = clouds.length - 1,
            delay = -(mesure + 2 - clIndex),
            start = 1 * clIndex,
            end = +100 - 100 * (mesure - clIndex)

        timeline[clIndex] = TweenMax.fromTo($('#cl' + clIndex, ), 50, { transform: 'translateX(+' + start + 'vw)' }, { transform: 'translateX(' + end + 'vw)', ease: Linear.easeNone, repeat: -1 },
            delay
        );

    };

    var cloudOne = $('.clound-image'),
        timeline = [];
    for (var cloudIndex = 0; cloudIndex < cloudOne.length; ++cloudIndex) {
   
        var mesure = cloudOne.length - 1,
            delay = -(mesure + 2 - cloudIndex),
            start = 1 * cloudIndex,
            end = +100 - 100 * (mesure - cloudIndex)

        timeline[cloudIndex] = TweenMax.fromTo($('#cloud' + cloudIndex, ), 50, { transform: 'translateX(+' + start + 'vw)' }, { transform: 'translateX(' + end + 'vw)', ease: Linear.easeNone, repeat: -1 },
            delay
        );

    };




    var cloud = $('.clound-image2'),
        timeline = [];
    for (var cloudIndex = 0; cloudIndex < cloud.length; ++cloudIndex) {
   
        var mesure = cloud.length - 1,
            delay = -(mesure + 2 - cloudIndex),
            start = 1 * cloudIndex,
            end = -100 - 100 * (mesure - cloudIndex)

        timeline[cloudIndex] = TweenMax.fromTo($('#ml' + cloudIndex), 50, { transform: 'translateX(+' + start + 'vw)' }, { transform: 'translateX(' + end + 'vw)', ease: Linear.easeNone, repeat: -1 },
            delay
        );
    };

    $('ul.cards-split').on('click', function() {
        $(this).addClass('transition');
    });

})



$(window).scroll(function() {
    var scroll = $(window).scrollTop() - 100;
    $(".compass").css({
        transform: 'translateY(-' + (scroll / 100 * 100) + 'px) scale(' + (0 + scroll / 25) / 100 + ')'
    });
});


$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop() + 100;
    // Assign active class to nav links while scolling
    $('.page-section').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
            $('.page-section.active').removeClass('active');
            $('.page-section').eq(i).addClass('active');
        }
    });
})

$(window).scroll(function() {
    var scrollDistanceTop = $(window).scrollTop() + 100;
    // Assign active class to nav links while scolling
    $('.mountain-section').each(function(i) {
        if ($(this).position().top <= scrollDistanceTop) {
            $('.mountain-section.active').removeClass('active');
            $('.mountain-section').eq(i).addClass('active');
        }
    });
})



$(document).ready(function() {
    var Emblem = {
        init: function(el, str) {
            var element = document.querySelector(el);
            //var text = str ? str : element.innerHTML;
            element.innerHTML = '';
            for (var i = 0; i < text.length; i++) {
                var letter = text[i];
                var span = document.createElement('span');
                var node = document.createTextNode(letter);
                var r = (360 / text.length) * (i);
                var x = (Math.PI / text.length).toFixed(0) * (i);
                var y = (Math.PI / text.length).toFixed(0) * (i);
                span.appendChild(node);
                span.style.webkitTransform = 'rotateZ(' + r + 'deg) translate3d(' + x + 'px,' + y + 'px,0)';
                span.style.transform = 'rotateZ(' + r + 'deg) translate3d(' + x + 'px,' + y + 'px,0)';
                element.appendChild(span);
            }
        }
    };

    //Emblem.init('.emblem');
});


$(document).ready(function() {
    var layer = $('#discovery');

    layer.mousemove(function(e) {
        var ivalueX = (e.pageX * -1 / 20);
        var ivalueY = (e.pageY * -1 / 100);
        console.log('ok');
        $('.dic-item .move_image').css('transform', 'translate(' + ivalueX + 'px,' + ivalueY + 'px)');
     
    });

})


var sections = $('section'),
    nav = $('nav'),
    nav_height = nav.outerHeight();

$(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop();

    sections.each(function() {
        var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('active');
            sections.removeClass('active');

            $(this).addClass('active');
            nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
        }
    });
});

nav.find('a').on('click', function() {
    var $el = $(this),
        id = $el.attr('href');

    $('html, body').animate({
        scrollTop: $(id).offset().top - nav_height
    }, 500);

    return false;
});

