import { modals, sliders, form, mask, checkInputs,showMoreStyle } from "./modules";

window.addEventListener('DOMContentLoaded', () => {
  modals();
  sliders({
    slide: '.feedback-slider-item',
    direction: '',
    preview: '.main-prev-btn',
    next: '.main-next-btn',
  });
  sliders({
    slide: '.main-slider-item',
    direction: 'vertical',
  });
  form();
  mask('[name="phone"]');
  checkInputs('[name="name"]');
  checkInputs('[name="message"]');
  showMoreStyle('.button-styles', '.styles-2');
});
