$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        $('#menu-section').addClass('fixed');
        $('.wrapper section').each(function(i) {
            if ($(this).position().top <= windscroll + 20) {
                $('#navigation li.active').removeClass('active');
                $('#navigation li').eq(i).addClass('active');
            }
        });

    } else {

        $('#navigation li.active').removeClass('active');
        $('#navigation li:first').addClass('active');
    }

}).scroll();
