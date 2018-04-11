$(document).ready(function(){
    $(".tabs_js li a").click(function(){
        $(this).parent().toggleClass("active");
        $(this).parent().siblings("li").removeClass("active");
        return false;
    });
    $(".btn_menu_js").click(function(){
        $(this).toggleClass("active");
        $(".drop_bar_js").toggleClass("active");
    });

    // go to  about 
        $(".go_next").on("click", function(e){
	        var anchor = $(this);
	        $('html, body').stop().animate({
	            scrollTop: $(anchor.attr('href')).offset().top
	        }, 777);
	        e.preventDefault();
	        return false;
	    });
	// go to top 
	$('.go_top').click(function () {
	    $('body,html').animate({
	        scrollTop: 0
	    }, 400);
	    return false;
	});
	// animate numbers
	    var show = true;
	    var countbox = ".company_block";
	    $(window).on("scroll load resize", function () {
	        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
	        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
	        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
	        var w_height = $(window).height(); // Высота окна браузера
	        var d_height = $(document).height(); // Высота всего документа
	        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
	        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
	            $('.company_block .number').css('opacity', '1');
	            $('.company_block .number').spincrement({
	                thousandSeparator: "",
	                duration: 1200
	            });

	            show = false;
	        }
	    });
});
$('.owl_carousel_js').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots: false,
    navText : ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
    items:1
})
// etc products
$('.owl_carousel_js_2').owlCarousel({
    loop:true,
    margin:30,
    responsiveClass:true,
    dots: true,
    responsive:{
    	0:{
            items:1
        },
        1000:{
            items:2
        }
    }
})
// slider portdolio
$('.owl_carousel_js_3').owlCarousel({
    loop:true,
    margin:30,
    responsiveClass:true,
    nav:true,
    dots: false,
    navText : ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
    responsive:{
    	0:{
            items:1
        },
        500:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
// review portdolio
$('.owl_carousel_js_4').owlCarousel({
    loop:true,
    margin:30,
    responsiveClass:true,
    nav:true,
    dots: false,
    navText : ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
    responsive:{
    	0:{
            items:1
        },
        400:{
            items:2
        },
        1000:{
            items:3
        },
        1200:{
            items:4
        }
    }
})
// clients portdolio
$('.owl_carousel_js_5').owlCarousel({
    loop:true,
    margin:30,
    responsiveClass:true,
    nav:true,
    dots: false,
    // autoWidth:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    navText : ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
    responsive:{
    	0:{
            items:1
        },
        400:{
            items:3
        },
        1000:{
            items:4
        },
        1200:{
            items:5
        }
    }
})
