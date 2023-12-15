const slider = document.querySelector('[data-swiper="gallery"]');
const buttonNext = document.querySelector('[data-button="next-gallery"]');
const buttonPrev = document.querySelector('[data-button="prev-gallery"]');

const setSlider = () => {
  return new window.Swiper(slider, {
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },

    loop: true,
    slidesPerGroup: 2,
    loopAddBlankSlides: true,

    breakpoints: {
      1200: {
        slidesPerView: 5,
        spaceBetween: 5,
        initialSlide: 0,
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 5,
        initialSlide: 0,
      },

      320: {
        slidesPerView: 2,
        spaceBetween: 3,
        initialSlide: 4,
      },
    },
  });
};

const initSliderGallery = () => {
  if (document.body.contains(slider)) {
    setSlider();
  }
};

export {initSliderGallery};
