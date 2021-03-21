$(function() {
    $('.menu__btn').on('click', function () {
        $('.menu__list').slideToggle();
    })

    $(".program-slider").slick({
        arrows: true,
        dots: true,
        dotsClass: "program-dots",
        responsive: [
            {
                breakpoint: 516,
                settings: {
                    arrows: false
                }
            }   
        ]
    })

    $(".photo-slider__up").slick({
        arrows: false,
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1501,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1
                }
            }   
        ]
    })

    $(".photo-slider__down").slick({
        arrows: false,
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1501,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1
                }
            }   
        ]
    })

})