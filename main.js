import { modals, sliders, form, mask, checkInputs, showMoreServer, calc } from "./modules";
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
  showMoreServer('.button-styles', '#styles .row');
  calc('#size', '#material', '#options', '.promocode', '.calc-price');


  
});