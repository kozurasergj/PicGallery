export const filter = () => {
  const menu = document.querySelector('.portfolio-menu');
  const liAll = menu.querySelectorAll('li');
  const btnAll = menu.querySelector('.all');
  const btnLovers = menu.querySelector('.lovers');
  const btnChef = menu.querySelector('.chef');
  const btnGirl = menu.querySelector('.girl');
  const btnGuy = menu.querySelector('.guy');
  const btnGrandmother = menu.querySelector('.grandmother');
  const btnGranddad = menu.querySelector('.granddad');
  const wrapper = document.querySelector('.portfolio-wrapper');
  const markTypeAll = wrapper.querySelectorAll('.all');
  const markGirl = wrapper.querySelectorAll('.girl');
  const markLovers = wrapper.querySelectorAll('.lovers');
  const markChef = wrapper.querySelectorAll('.chef');
  const markGuy = wrapper.querySelectorAll('.guy');
  const noBlock = document.querySelector('.portfolio-no');

  const typeFilter = (type) => {
    markTypeAll.forEach((markType) => {
      markType.style.display = 'none';
      markType.classList.remove('animated', 'fadeIn')
    });
    noBlock.style.display = 'none';
    noBlock.classList.remove('animated', 'fadeIn')

    if (type) {
      type.forEach((imgClass) => {
        imgClass.style.display = 'block';
        imgClass.classList.add('animated', 'fadeIn')
      });
    } else {
      noBlock.style.display = 'block';
      noBlock.classList.add('animated', 'fadeIn');
    }
  }

  btnAll.addEventListener('click', () => {
    typeFilter(markTypeAll);
  });
  btnLovers.addEventListener('click', () => {
    typeFilter(markLovers);
  });
  btnChef.addEventListener('click', () => {
    typeFilter(markChef);
  });
  btnGirl.addEventListener('click', () => {
    typeFilter(markGirl);
  });
  btnGuy.addEventListener('click', () => {
    typeFilter(markGuy);
  });
  btnGranddad.addEventListener('click', () => {
    typeFilter();
  });
  btnGrandmother.addEventListener('click', () => {
    typeFilter();
  });

  menu.addEventListener('click',(event) => {
    const target = event.target;
    if (target && target.tagName === 'LI') {
      liAll.forEach((li) => li.classList.remove('active'));
      target.classList.add('active');
    }
  });
};