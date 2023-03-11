import { modals, sliders, form } from "./modules";

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
});
