export const filter = () => {
  const menu = document.querySelector('.portfolio-menu');
  const liAll = menu.querySelectorAll('li');
  const btnAll = menu.querySelector('.all');
  const wrapper = document.querySelector('.portfolio-wrapper');
  const markTypeAll = wrapper.querySelectorAll('.all');
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

  menu.addEventListener('click', (event) => {
    const target = event.target;
    const className = target.className;
    const classImgs = wrapper.querySelectorAll(`.${className}`);
    if (classImgs.length >= 1) {
      typeFilter(classImgs);
    } else {
      typeFilter(false);
    } 
  });

  menu.addEventListener('click', (event) => {
    const target = event.target;
    if (target && target.tagName === 'LI') {
      liAll.forEach((li) => li.classList.remove('active'));
      target.classList.add('active');
    }
  });

};