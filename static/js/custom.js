(function ($) {
  "use strict";
  $(document).ready(function () {

      /*
       Jquery Mobile Menu
       ============================*/
      $("#main-menu").meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-nav-menu",
      });

    /*
     Portfolio Slider JS Home One
     ============================*/
    $(".custom-slider-wrapper").slick({
      slidesToShow: 3,
      infinite: false,
      autoplay: true,
      draggable: true,
      arrows: true,
      slidesToScroll: 1,
      loop: true,
      dots: true,
      speed: 300,
      swipeToSlide: true,
      prevArrow:
        "<button type='button' class='post-gallery-btn prev-btn'><i class='fa fa-arrow-left'></i></button>",
      nextArrow:
        "<button type='button' class='post-gallery-btn next-btn'><i class='fa fa-arrow-right'></i></button>",
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            autoplay: true,
            infinite: false,
          },
        },
      ],
    });

    /*
     Portfolio Slider JS Home Two
     ============================*/
    $(".portfolio-slider").slick({
      slidesToShow: 4,
      infinite: false,
      autoplay: false,
      draggable: true,
      arrows: true,
      slidesToScroll: 1,
      loop: true,
      dots: true,
      speed: 300,
      swipeToSlide: true,
      prevArrow:
        "<button type='button' class='post-gallery-btn prev-btn'><i class='fa fa-arrow-left'></i></button>",
      nextArrow:
        "<button type='button' class='post-gallery-btn next-btn'><i class='fa fa-arrow-right'></i></button>",
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            autoplay: true,
            infinite: false,
          },
        },
      ],
    });

    /*
     Portfolio Slider JS
     ============================*/
    $(".post-gallery").slick({
      slidesToShow: 1,
      infinite: false,
      autoplay: false,
      draggable: true,
      arrows: true,
      slidesToScroll: 1,
      loop: true,
      dots: false,
      speed: 300,
      swipeToSlide: true,
      prevArrow:
        "<button type='button' class='post-gallery-btn prev-btn'><i class='fa fa-arrow-left'></i></button>",
      nextArrow:
        "<button type='button' class='post-gallery-btn next-btn'><i class='fa fa-arrow-right'></i></button>",
    });

      /*
     Hero Slider JS
     ============================*/
    $(".slider-wrapper").slick({
      draggable: true,
      autoplay: true,
      autoplaySpeed: 7000,
      arrows: true,
      dots: false,
      speed: 500,
      infinite: true,
      cssEase: 'ease-in-out',
      touchThreshold: 100,
      swipeToSlide: true,
      prevArrow:
        "<button type='button' class='post-gallery-btn prev-btn'><i class='fa fa-arrow-left'></i></button>",
      nextArrow:
        "<button type='button' class='post-gallery-btn next-btn'><i class='fa fa-arrow-right'></i></button>",
      responsive: [
        {
          breakpoint: 767,
          settings: {
            autoplay: true,
          },
        },
      ],
    });

    /*
   Testimonial Slider JS
   ============================*/
    $(".testimonial-slider").slick({
      slidesToShow: 1,
      infinite: false,
      autoplay: true,
      draggable: true,
      arrows: true,
      slidesToScroll: 1,
      loop: true,
      dots: false,
      speed: 300,
      swipeToSlide: true,
      prevArrow:
        "<button type='button' class='testimonial-slider-btn prev-btn'><i class='fa fa-arrow-left'></i></button>",
      nextArrow:
        "<button type='button' class='testimonial-slider-btn next-btn'><i class='fa fa-arrow-right'></i></button>",
      responsive: [
        {
          breakpoint: 767,
          settings: {
            autoplay: true,
            infinite: true,
          },
        },
      ],
    });

    // Client slider
    $(".client-slider-wrapper").slick({
      slidesToShow: 5,
      infinite: true,
      autoplay: false,
      draggable: true,
      swipeToSlide: true,
      arrows: false,
      slidesToScroll: 1,
      loop: true,
      dots: false,
      speed: 300,
      prevArrow:
        "<button type='button' class='client-slider-btn prev-btn'><i class='fa fa-arrow-left'></i></button>",
      nextArrow:
        "<button type='button' class='client-slider-btn next-btn'><i class='fa fa-arrow-right'></i></button>",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 998,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    /*
     Hero Slider
     ============================*/
    $(".hero-slider").slick({
      slidesToShow: 1,
      infinite: false,
      autoplay: false,
      draggable: true,
      arrows: true,
      slidesToScroll: 1,
      swipeToSlide: true,
      loop: true,
      dots: false,
      speed: 300,
      prevArrow:
          "<button type='button' class='post-gallery-btn prev-btn'><i class='fa fa-arrow-left'></i></button>",
      nextArrow:
          "<button type='button' class='post-gallery-btn next-btn'><i class='fa fa-arrow-right'></i></button>",
    });

    /*
     Related Service Slider
     ============================*/
    $(".relate-service-slider").slick({
      slidesToShow: 2,
      infinite: false,
      autoplay: false,
      draggable: true,
      arrows: false,
      slidesToScroll: 1,
      swipeToSlide: true,
      loop: true,
      dots: true,
      speed: 300,
      responsive: [
        {
          breakpoint: 570,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });


    /*
	counter Js
	============================*/
    $(".counter").counterUp({
      delay: 10,
      time: 1000,
    });

    /*
     Magnific Popup
     ============================*/
    $(".video-play").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });

    /*
    Scroll To Top Js
    ============================*/
    $(function () {
      $("#scrollTop").hide();
      var position = $(window).scrollTop();
      var timer;
      $(window).on('scroll', function () {
        var scrollTop = $(window).scrollTop();
        clearTimeout(timer);
        if (scrollTop > 100) {
          if (scrollTop > position) {
            $('#scrollTop').fadeOut();
          } else {
            $('#scrollTop').fadeIn();
            timer = window.setTimeout(function() {
              $("#scrollTop").fadeOut();
            }, 3000);
          }
          position = scrollTop;
        } else {
          $('#scrollTop').fadeOut();
        }
      });
      $(".scrollup-btn").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
      });
    });


    /*
    Window Load
    ============================*/
    $(window).on("load", function() {
      /*
      Preeloader
      ============================*/
      $("#preloader").fadeOut();
      $("#preloader-status").delay(200).fadeOut("slow");
      $("body").delay(200).css({"overflow-x": "hidden"});

    });

  });
})(jQuery);
