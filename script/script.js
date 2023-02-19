$(document).ready(function (){
    $('.slider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 8,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        cssEase: 'linear',
        responsive:[
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 281,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplaySpeed: 2000,
                }
            }
        ]
    });
});