export const modals = () => {
  const bindModal = ({ triggersSelector, modalSelector, closeSelector, closeClickOverlayModal }) => {
    const triggers = document.querySelectorAll(triggersSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    const windows = document.querySelectorAll('[data-modal]');
    const scrollWidth = calcScrol();

    triggers.forEach((trigger) => {
      trigger.addEventListener('click', event => {
        if (event.target) {
          event.preventDefault();
        }
        closeAllModals();
        modal.style.display = 'block';
        document.body.classList.add('modal-open');
        document.body.style.marginRight = `${scrollWidth}px`;
      })
    });

    const closeAllModals = () => {
      windows.forEach((window) => {
        window.style.display = 'none';
      });
    };

    const closeModal = (modal) => {
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
      document.body.style.marginRight = `0px`;
    }

    document.addEventListener('keydown', (event) => {
      if (event.code === 'Escape') {
        closeModal(modal);
      }
    });

    close.addEventListener('click', () => {
      closeModal(modal);
      closeAllModals();
    });

    modal.addEventListener('click', (event) => {
      if (event.target === modal && closeClickOverlayModal) {
        closeModal(modal);
        closeAllModals();
      }
    });
  }
  const showModalByTime = (selector, time) => {
    setTimeout(() => {
      let isDispay;

      const allModals = document.querySelectorAll('[data-modal]');
      allModals.forEach((modal) => {
        if (getComputedStyle(modal).display !== 'none') {
          isDispay = true;
        }
      });
      if (!isDispay) {
        document.querySelector(selector).style.display = 'block';
        document.body.classList.add('modal-open');
      }
    }, time);
  }

  const calcScrol = () => {
    const div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    const scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  };

  bindModal({
    triggersSelector: '.button-design',
    modalSelector: '.popup-design',
    closeSelector: '.popup-design .popup-close',
    closeClickOverlayModal: true,
  });
  bindModal({
    triggersSelector: '.button-consultation',
    modalSelector: '.popup-consultation',
    closeSelector: '.popup-consultation .popup-close',
    closeClickOverlayModal: true,
  });


  showModalByTime('.popup-consultation', 60000);
}