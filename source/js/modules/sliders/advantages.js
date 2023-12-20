const slider = document.querySelector('[data-swiper="advantages"]');
const buttonNext = document.querySelector('[data-button="next-advantages"]');
const buttonPrev = document.querySelector('[data-button="prev-advantages"]');

let advSwiper;

const setSlider = () => {
  advSwiper = new window.Swiper(slider, {
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },

    breakpoints: {
      1200: {
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        initialSlide: 2,
      },

      320: {
        centeredSlides: false,
        slidesPerView: 'auto',
        spaceBetween: 0,
      },
    },
  });
};

const onWindowResize = () => {
  if (window.innerWidth < 1200) {
    advSwiper.disable();
  } else {
    advSwiper.enable();
  }
};

const initSliderAdvantages = () => {
  if (document.body.contains(slider)) {
    setSlider();
    onWindowResize();
    window.addEventListener('resize', onWindowResize);
  }
};

export {initSliderAdvantages};
