$(document).ready(function(){

// Cada vez que hay un cambio en la poscicion del scroll
    $(window).scroll(function(){
        var windowWidth = $(window).width();

        if(windowWidth > 800){
            var scroll = $(window).scrollTop();

            $('header .textos').css({
                'transform': 'translate(0px,' + scroll / 2 + '%)'
            });

            $('.acerca-de article').css({
                'transform': 'translate(0px, -' + scroll / 4 + '%)'
            });
        }
    });

// Cada vez que hay un cambio de tamaño en la pantalla
    $(window).resize(function(){
        var windowWidth = $(window).width();

        if (windowWidth < 800)
        $('.acerca-de article').css({
            'transform': 'translate(0px, opx)'
        });
    });

});