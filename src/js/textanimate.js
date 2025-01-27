var sections = $('section')
$(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop();
    sections.each(function() {
        var top = $(this).offset().top,
            bottom = top + $(this).outerHeight();
        if (cur_pos >= top && cur_pos <= bottom) {
            //nav.find('a').removeClass('active');
            // sections.removeClass('active');
            $(this).addClass('activetitle');
        }
    });
});