const slider = document.querySelector('[data-swiper="hero"]');
const pagination = slider.querySelector('[data-button="pagination-hero"]');

const setSlider = () => new window.Swiper(slider, {
  pagination: {
    el: pagination,
    clickable: true,
  },
  loop: true,
});

const initSliderHero = () => {
  if (document.body.contains(slider)) {
    setSlider();
  }
};

export {initSliderHero};
