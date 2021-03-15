(function($) {
    "use strict";
    $(document).ready(function() {
        /*---------------------------------------------------
            smooth scroll 
        ----------------------------------------------------*/
        var scroll = new SmoothScroll('a[href*="#"]');

        /*---------------------------------------------------
            mobile menu 
        ----------------------------------------------------*/
        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "992"
        });
        /*---------------------------------------------------
            sticky menu
        ----------------------------------------------------*/

        $(window).on("scroll", function() {
            if ($(window).scrollTop()) {
                $(".header").addClass("black");
            } else {
                $(".header").removeClass("black");
            }
        });

        /*---------------------------------------------------
            product carousel
        ----------------------------------------------------*/
        $('.product-slider').slick({
            dots: false,
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 950,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
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
            testimonial carousel
        ----------------------------------------------------*/
        $('.testimonial-slider').slick({
            dots: false,
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
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
                    breakpoint: 950,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },

                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
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
        back to top button
    ----------------------------------------------------*/
    $(".top-btn").click(function() {
        $('html,body').animate({
            "scrollTop": "0"
        }, 500)
    });

    /*---------------------------------------------------
          back to top button fade in/out
      ----------------------------------------------------*/
    $(window).scroll(function() {
        var scrollValue = $(this).scrollTop();
        if (scrollValue >= 500) {
            $(".top-btn").fadeIn();
        } else {
            $(".top-btn").fadeOut();
        }
    });

    /*---------------------------------------------------
        preloader
    ----------------------------------------------------*/
    $(window).load(function() {
        $("#loading").fadeOut(500);
    })
}(jQuery));