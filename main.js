import { modals, sliders, form, mask, checkInputs, showMoreServer, calc ,filter,pictureSize,accordion,burger,scrolling} from "./modules";
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
  filter();
  pictureSize('.sizes-block');
  accordion('.accordion-heading','.accordion-block');
  burger('.burger-menu','.burger');
  scrolling();
});