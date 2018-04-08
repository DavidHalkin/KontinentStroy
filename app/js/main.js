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
$('.go_top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 400);
    return false;
});