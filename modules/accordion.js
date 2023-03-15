export const accordion = (triggersSelector, itemsSelector) => {
  const btns = document.querySelectorAll(triggersSelector);
  const blocks = document.querySelectorAll(itemsSelector);
  blocks.forEach((block) => {
    block.classList.add('animated', 'fadeIn');
  });
  btns.forEach(btn => {
    btn.addEventListener('click', (event) => {
      const target = event.target.parentNode;
      if (!target.classList.contains('active')) {
        btns.forEach(btn => {
          btn.classList.remove('active', 'active-style');
        });
        target.classList.add('active', 'active-style');
      }
    });
  });
};