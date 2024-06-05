document.addEventListener('DOMContentLoaded', function () {
    "use strict";

    /*--------------------- Main Slider ---------------------- */
    var GiMainSlider = new Swiper('.gi-slider.swiper-container', {
        loop: true,
        centeredSlides: true,
        speed: 2000,
        effect: 'slide',
        parallax: true,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    /*--------------------- Language and Currency Click to Active ---------------------- */
    document.querySelectorAll(".header-top-lan li").forEach(function (item) {
        item.addEventListener("click", function () {
            document.querySelectorAll(".header-top-lan li").forEach(function (el) {
                el.classList.remove('active');
            });
            item.classList.add('active');
        });
    });

    document.querySelectorAll(".header-top-curr li").forEach(function (item) {
        item.addEventListener("click", function () {
            document.querySelectorAll(".header-top-curr li").forEach(function (el) {
                el.classList.remove('active');
            });
            item.classList.add('active');
        });
    });

    /*--------------------- Day of the deal Slider (offer section) ---------------------- */
    $('.deal-slick-carousel').slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1367,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 421,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    /*--------------------- Trending, Top Rated Start Slider ----------------------- */
    $('.gi-trending-slider, .gi-rated-slider').slick({
        rows: 3,
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    rows: 2,
                    slidesToScroll: 1,
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 540,
                settings: {
                    rows: 2,
                    slidesToScroll: 1,
                    slidesToShow: 1,
                }
            }
        ]
    });

    /*--------------------- Blog slider (Home Page) ---------------------- */
    $('.gi-blog-carousel').owlCarousel({
        margin: 24,
        loop: true,
        dots: false,
        nav: false,
        smartSpeed: 1000,
        autoplay: false,
        items: 3,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            },
            1400: {
                items: 5
            }
        }
    });

    /*--------------------- Newsletter popup Homepage ---------------------- */
    setTimeout(function () {
        document.getElementById("gi-popnews-bg").style.display = "block";
        document.getElementById("gi-popnews-box").style.display = "block";
    }, 5000);

    document.getElementById("gi-popnews-close").addEventListener("click", function () {
        document.getElementById("gi-popnews-bg").style.display = "none";
        document.getElementById("gi-popnews-box").style.display = "none";
    });

    document.getElementById("gi-popnews-bg").addEventListener("click", function () {
        document.getElementById("gi-popnews-bg").style.display = "none";
        document.getElementById("gi-popnews-box").style.display = "none";
    });
});
