$(document).ready(function () {
  const slider = $(".explanation__list");

  function initSlider() {
    slider.slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      adaptiveHeight: true,
      prevArrow: ".prev-btn",
      nextArrow: ".next-btn",
      autoplay: true,
    });
  }

  function destroySlider() {
    if (slider.hasClass("slick-initialized")) {
      slider.slick("unslick");
    }
  }

  function checkSlider() {
    if ($(window).width() < 768) {
      initSlider();
    } else {
      destroySlider();
    }
  }

  $(window).on("load resize", function () {
    checkSlider();
  });
});
