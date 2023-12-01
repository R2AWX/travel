const navMain = document.querySelector('[data-nav="header"]');
const navToggle = navMain.querySelector('[data-button="header"]');

function menuScript() {
  navToggle.addEventListener('click', () => {
    if (navMain.classList.contains('is-close')) {
      navMain.classList.remove('is-close');
      navMain.classList.add('is-open');
    } else {
      navMain.classList.add('is-closed');
      navMain.classList.remove('is-open');
    }
  });
}

export {menuScript};
