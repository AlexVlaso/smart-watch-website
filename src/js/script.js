$(document).ready(function () {
  $(".carousel__inner").slick({
    prevArrow: `<button type="button" class="slick-prev"><img src="icons/left-arrow.png"></button>`,
    nextArrow: `<button type="button" class="slick-next"><img src="icons/right-arrow.png"></button>`,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  });
});