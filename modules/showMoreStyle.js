import { getResource } from "./requests";

export const showMoreServer = (trigger, wrapper) => {
  const btn = document.querySelector(trigger);
  btn.classList.add('animated', 'fadeInDown');

  btn.addEventListener('click', () => {
    getResource('assets/server/db.json')
      .then((response) => createCards(response.styles))
      .catch((error) => console.log(error));
    btn.remove();

  });

  const createCards = (response) => {
    response.forEach(({ src, title, link }) => {
      const card = document.createElement('div');
      card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
      card.innerHTML = `
        <div class= styles-block>
        <img src=${src} alt="style">
        <h4>${title}</h4>
        <a href=${link}>Подробнее</a>
        </div>`;
      document.querySelector(wrapper).appendChild(card);
    });
  };
};

