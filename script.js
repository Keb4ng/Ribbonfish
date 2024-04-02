var app = {
  fixedHeader: () => {
    $(window).scroll(() => {
      var scroll = $(window).scrollTop();
      var navHeight = $(".header").height();

      if (scroll > navHeight) {
        $(".fixed-header").addClass("active");
      } else {
        $(".fixed-header").removeClass("active");
      }
    });
  },

  slickLogos: () => {
    $(".slick-logos").slick({
      arrows: false,
      slidesToShow: 9,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 500,
      speed: 8000,
      pauseOnHover: false,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
  },

  slickTestimonials: () => {
    var prevBtn = $(".prev-button");
    var nextBtn = $(".next-button");

    $(".testimonials").slick({
      arrows: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      nextArrow: nextBtn,
      prevArrow: prevBtn,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  },

  slickAgents: () => {
    var teamPrevBtn = $(".team-prev-button");
    var teamNextBtn = $(".team-next-button");

    $(".agents").slick({
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      nextArrow: teamNextBtn,
      prevArrow: teamPrevBtn,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  },

  ideasCounter: () => {
    $.fn.isInViewport = function () {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();
      return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    var checker = false;
    $(window).on("resize scroll", function () {
      if ($(".ideas-section").isInViewport() && checker == false) {
        jQuery(".js-countup").each(function () {
          var count = $(this).attr("data-count"),
            numAnim = new CountUp(this, 0, count);
          numAnim.start();
        });

        checker = true;
      }
    });
  },

  mobileMenu: () => {
    $(".burger-menu").on("click", () => {
      if ($(".mobile-menu-wrapper").hasClass("mobile-active")) {
        $(".mobile-menu-wrapper").removeClass("mobile-active");
      } else {
        $(".mobile-menu-wrapper").addClass("mobile-active");
      }
    });
  },

  popupVideo: () => {
    $(".popup-video").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });
  },
};

$(document).ready(() => {
  AOS.init();

  app.slickAgents();
  app.slickTestimonials();
  app.slickLogos();
  app.fixedHeader();
  app.ideasCounter();
  app.mobileMenu();
  app.popupVideo();
});
