import WOW from "wow.js";
import $ from "jquery";
import "slick-carousel";
// import { createFocusTrap } from "focus-trap";

let wow = new WOW({
  boxClass: "animation",
  animateClass: "animate__animated",
  offset: 100,
  mobile: true,
  live: true
});
wow.init();

// function throttle(func, time) {
//     let isThrottled = false;
//     return function () {
//       if (isThrottled) return;
//       let ctx = this;
//       let args = arguments;
//       func.apply(ctx, args);
//       isThrottled = true;
//       setTimeout(() => {
//         isThrottled = false;
//       }, time);
//     };
//   }
  
//   window.addEventListener("scroll", throttle(stickyHeader, 300));

  $(".blog__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: ".catalog-slide__blog-nav_count",
    nextArrow: ".catalog-slide__btn-next",
    prevArrow: ".catalog-slide__btn-prev",
    fade: true,
    infinite: true,
    asNavFor: ".catalog-slide__blog-nav"
  });
  $(".catalog-slide__blog-nav").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".blog__slider",
    infinite: true,
    focusOnSelect: true,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: ".blog__slider",
          focusOnSelect: true,
          arrows: false,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          asNavFor: ".blog__slider",
          focusOnSelect: true,
          arrows: false,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          asNavFor: ".blog__slider",
          focusOnSelect: true,
          arrows: false,
          infinite: true,
          dots: false
        }
      }
      
    ]
    
  });

  $(".anthurium-slider__img").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: ".anthurium-slider__dots_btn",
    nextArrow: ".anthurium-slider__btn-next",
    prevArrow: ".anthurium-slider__btn-prev",
    fade: true,
    infinite: true,
    asNavFor: ".anthurium-slider__dots"
  });

  $(".anthurium-slider__dots").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".anthurium-slider__img",
    infinite: true,
    focusOnSelect: true,
    dots: false,
    arrows: false
  });