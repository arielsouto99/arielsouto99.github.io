$(document).ready(function(){

// .each (a cada uno de los enlaces se le va a aplica una función anonima)
    $('.menu a').each(function(index,elemento){
        $(this).css({
            'top': '-200px'
        });

// El INDEX seria el arreglo que empieza en 0, en este caso el acerca de seria el 0, menu el 1 y etc.
// A los 2000seg aparece el primer arreglo( 0 = acerca de), luego se hace 2000 + (1 * 500) que serían 2500seg y caeria el arreglo (1 = menu), luego 2000 + ( 2* 500) que serian 3000seg y caeria el arreglo (2 = galeria) y asi sucesivamente
        $(this).animate({
            top:'0'
        },1500 + (index * 500) );
    });


// Efecto en HEADER
    if( $(window).width() > 800){
        $('header .textos').css({
            opacity: 0,
            marginTop: 0
        });

        $('header .textos').animate({
            opacity: 1,
            marginTop: '-82'
        }, 1500);
    }

//Scroll elementos menu

    var acercaDe = $('#acerca-de').offset().top,
        menu= $('#platillos').offset().top,
        galeria= $('#galeria').offset().top,
        ubicacion= $('#ubicacion').offset().top;
    
    $('#btn-acerca-de').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 550 //acercaDe
        },500);
    });

    $('#btn-menu').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu //acercaDe
        },500);
    });

    $('#btn-galeria').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria //acercaDe
        },500);
    });

    $('#btn-ubicacion').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ubicacion //acercaDe
        },500);
    });
});