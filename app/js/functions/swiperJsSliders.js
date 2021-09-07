import Swiper from "../vendor/swiper-bundle.min";
const swiperJsSliders = () => {
  let recipeSlider = new Swiper(".related-slider", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 20,
    speed: 1200,
    lazy: true,
    navigation: {
      prevEl: ".related-slider__prev",
      nextEl: ".related-slider__next",
    },
    pagination: {
      el: ".related-pagination",
      type: "fraction",
    },

    breakpoints: {
      320: {
        spaceBetween: 10,
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      640: {
        spaceBetween: 15,
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1280: {
        spaceBetween: 20,
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1366: {
        spaceBetween: 20,
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },
    resizeObserver: true,
    a11y: {
      paginationBulletMessage: "Перейти к слайду {{index}}",
      prevSlideMessage: "Предыдущий слайд",
      nextSlideMessage: "Следующий слайд",
    },
  });
};
export default swiperJsSliders;
