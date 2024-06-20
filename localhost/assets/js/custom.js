jQuery(document).ready(function ($) {


    "use strict";



    $(function () {
        $("#tabs").tabs();
    });


    // Page loading animation

    $("#preloader").animate({
        'opacity': '0'
    }, 600, function () {
        setTimeout(function () {
            $("#preloader").css("visibility", "hidden").fadeOut();
        }, 300);
    });


    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var box = $('.header-text').height();
        var header = $('header').height();

        if (scroll >= box - header) {
            $("header").addClass("background-header");
        } else {
            $("header").removeClass("background-header");
        }
    });

    if ($('.owl-banner').length) {
        $('.owl-banner').owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            margin: 0,
            autoplay: false,
            smartSpeed: 700,
            autoplayTimeout: 6000,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                460: {
                    items: 1,
                    margin: 0
                },
                576: {
                    items: 1,
                    margin: 20
                },
                992: {
                    items: 1,
                    margin: 30
                }
            }
        });
    }

    $(".Modern-Slider").slick({
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        dots: true,
        pauseOnDotsHover: true,
        cssEase: 'linear',
        // fade:true,
        draggable: false,
        prevArrow: '<button class="PrevArrow"></button>',
        nextArrow: '<button class="NextArrow"></button>',
    });




    $('.accordion > li:eq(0) a').addClass('active').next().slideDown();


    // Обработчик события клика на ссылки товаров
    $('.product-item a').on('click', function(e) {
        e.preventDefault(); // Предотвращаем действие по умолчанию (переход по ссылке)

        // Получаем ссылку на страницу товара, на которую кликнули
        var productPageLink = $(this).attr('href');

        // Загружаем информацию о товаре с сервера
        $.ajax({
            url: productPageLink,
            method: 'GET',
            success: function(data) {
                // Обновляем содержимое блока с информацией о товаре
                $('#productDetails').html(data);
            },
            error: function(xhr, status, error) {
                console.error('Ошибка при загрузке информации о товаре:', error);
            }
        });
    });




});








