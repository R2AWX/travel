const slider = document.querySelector('[data-swiper="reviews"]');
const buttonNext = document.querySelector('[data-button="next-reviews"]');
const buttonPrev = document.querySelector('[data-button="prev-reviews"]');

const setSlider = () => new window.Swiper(slider, {
  navigation: {
    nextEl: buttonNext,
    prevEl: buttonPrev,
  },

  loop: true,

  breakpoints: {
    1200: {
      slidesPerView: 'auto',
      spaceBetween: 120,
    },

    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },

    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
  },
});

const initSliderReviews = () => {
  if (document.body.contains(slider)) {
    setSlider();
  }
};

export {initSliderReviews};
