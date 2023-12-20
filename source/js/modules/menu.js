import '../utils/scroll-lock';
import '../utils/focus-lock';

const navMain = document.querySelector('[data-nav="header"]');
const navToggle = navMain.querySelector('[data-button="header"]');
const navLinks = navMain.querySelectorAll('[data-link="header"]');

const changeMenuView = () => {
  if (navMain.classList.contains('is-close') && window.innerWidth < 1200) {
    navMain.classList.remove('is-close');
    navMain.classList.add('is-open');
    window.scrollLock.disableScrolling();
    window.focusLock.lock('[data-nav="header"]', false);
  } else {
    navMain.classList.add('is-close');
    navMain.classList.remove('is-open');
    window.scrollLock.enableScrolling();
    window.focusLock.unlock();
  }
};

const menuScript = () => {
  navMain.classList.remove('is-nojs');
  navToggle.addEventListener('click', changeMenuView);
  navLinks.forEach((link) => {
    link.addEventListener('click', changeMenuView);
  });
};

export {menuScript};
