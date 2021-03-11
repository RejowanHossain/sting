(function($) {
    "use strict";
    $(document).ready(function() {
        /*---------------------------------------------------
            product carousel
        ----------------------------------------------------*/
        $('.product-slider').slick({
            dots: false,
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            // prevArrow: '<i class="fas fa-long-arrow-alt-left"></i>',
            // nextArrow: '<i class="fas fa-long-arrow-alt-right"></i>',
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
        /*---------------------------------------------------
            slider carousel
        ----------------------------------------------------*/
        // $('.slider').owlCarousel({
        //     loop: true,
        //     navText: ['<i class="icofont-simple-left"></i>', '<i class="icofont-simple-right"></i>'],
        //     nav: true,
        //     autoplay: true,
        //     autoplayTimeout: 5000,
        //     smartSpeed: 450,
        //     responsive: {
        //         0: {
        //             items: 1
        //         },
        //         768: {
        //             items: 1
        //         },
        //         991: {
        //             items: 1
        //         },
        //         1200: {
        //             items: 1
        //         },
        //         1920: {
        //             items: 1
        //         }
        //     }
        // });
        /*---------------------------------------------------
            testimonial carousel
        ----------------------------------------------------*/
        $('.testimonial-slider').slick({
            dots: false,
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            // prevArrow: '<i class="fas fa-long-arrow-alt-left"></i>',
            // nextArrow: '<i class="fas fa-long-arrow-alt-right"></i>',
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
        /*---------------------------------------------------
            testimonial carousel two
        ----------------------------------------------------*/
        // $('.testi-carousel-two').owlCarousel({
        //     loop: true,
        //     nav: false,
        //     autoplay: true,
        //     autoplayTimeout: 5000,
        //     animateOut: 'fadeOut',
        //     animateIn: 'fadeIn',
        //     smartSpeed: 450,
        //     margin: 30,
        //     responsive: {
        //         0: {
        //             items: 1
        //         },
        //         768: {
        //             items: 2
        //         },
        //         991: {
        //             items: 2
        //         },
        //         1200: {
        //             items: 2
        //         },
        //         1920: {
        //             items: 2
        //         }
        //     }
        // });
        /*---------------------------------------------------
            testimonial carousel three
        ----------------------------------------------------*/
        // $('.testi-carousel-three').owlCarousel({
        //     loop: true,
        //     nav: false,
        //     autoplay: true,
        //     autoplayTimeout: 5000,
        //     animateOut: 'fadeOut',
        //     animateIn: 'fadeIn',
        //     smartSpeed: 450,
        //     margin: 30,
        //     responsive: {
        //         0: {
        //             items: 1
        //         },
        //         768: {
        //             items: 2
        //         },
        //         991: {
        //             items: 2
        //         },
        //         1200: {
        //             items: 2
        //         },
        //         1920: {
        //             items: 2
        //         }
        //     }
        // });
        /*---------------------------------------------------
                magnific popUp
        ----------------------------------------------------*/
        $('.popup-video').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
            disableOn: 300
        });
        /*---------------------------------------------------
            scrollIt plugin activation
        ----------------------------------------------------*/
        $.scrollIt();
    });
    /*---------------------------------------------------
        sticky header
    ----------------------------------------------------*/
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".mainmenu").removeClass("sticky");
        } else {
            $(".mainmenu").addClass("sticky");
        }
    });
    /*---------------------------------------------------
        accordian
    ----------------------------------------------------*/
    $('.collapse').on('shown.bs.collapse', function() {
        $(this).prev().addClass('active');
    });
    $('.collapse').on('hidden.bs.collapse', function() {
        $(this).prev().removeClass('active');
    });
    /*---------------------------------------------------
        preloader
    ----------------------------------------------------*/
    $(window).on('load', function() {
        $('.preloader').fadeOut(500);
    });
}(jQuery));