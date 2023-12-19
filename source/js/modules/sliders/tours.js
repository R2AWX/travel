const slider = document.querySelector('[data-swiper="tours"]');
const buttonNext = document.querySelector('[data-button="next-tours"]');
const buttonPrev = document.querySelector('[data-button="prev-tours"]');

const setSlider = () => new window.Swiper(slider, {
  navigation: {
    nextEl: buttonNext,
    prevEl: buttonPrev,
  },

  initialSlide: 3,

  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },

    320: {
      slidesPerView: 1,
    },
  },
});

const initSliderTours = () => {
  if (document.body.contains(slider)) {
    setSlider();
  }
};

export {initSliderTours};
