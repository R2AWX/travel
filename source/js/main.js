import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import {menuScript} from './modules/menu';
import {initSliders} from './modules/sliders/init-sliders';
import {initVideo} from './modules/video';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();
    menuScript();
    initSliders();
    initVideo();
  });
});
