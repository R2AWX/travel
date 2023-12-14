const slider = document.querySelector('[data-swiper="training"]');
const buttonNext = document.querySelector('[data-button="next-training"]');
const buttonPrev = document.querySelector('[data-button="prev-training"]');

const setSlider = () => {
  return new window.Swiper(slider, {
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },

    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
        initialSlide: 0,
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 20,
        initialSlide: 0,
      },

      320: {
        slidesPerView: 1,
        initialSlide: 2,
      },
    },
  });
};

const initSliderTraining = () => {
  if (document.body.contains(slider)) {
    setSlider();
  }
};

export {initSliderTraining};
