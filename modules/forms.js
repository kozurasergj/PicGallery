export const form = () => {
  const forms = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('input');
  const inputsUploadPhoto = document.querySelectorAll('[name="upload"]');

  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так',
    spiner: 'assets/img/spinner.gif',
    ok: 'assets/img/ok.png',
    fail: 'assets/img/fail.png'
  }
  const path = {
    designer: 'https://dummyjson.com/users/1',
    data: 'https://dummyjson.com/users/2',
  }
  const postData = async (url, data) => {
    const response = await fetch(url, {
      method: 'GET',
      // body: data,
    });
    return await response.text();
  };
  const clearInputs = () => {
    inputs.forEach((input) => {
      input.value = '';
    });
  };
  const clearInputsPhoto = () => {
    inputsUploadPhoto.forEach((input) => {
      input.previousElementSibling.textContent = 'Файл не выбран';
    });
  };

  inputsUploadPhoto.forEach((input) => {
    input.addEventListener('input', () => {
      let someDots;
      const chunksNamePhoto = input.files[0].name.split('.');
      chunksNamePhoto[0].length > 6 ? someDots = '...' : someDots = '.';
      const fullNamePhoto = chunksNamePhoto[0].substring(0, 6) + someDots + chunksNamePhoto[1];
      input.previousElementSibling.textContent = fullNamePhoto;
    });
  });

  forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      form.parentNode.appendChild(statusMessage);

      form.classList.add('animated', 'fadeOutUp');
      setTimeout(() => {
        form.style.display = 'none';
      }, 400);

      const statusImg = document.createElement('img');
      statusImg.setAttribute('src', message.spiner);
      statusImg.classList.add('animated', 'fadeInUp');
      statusMessage.appendChild(statusImg);

      const textMessage = document.createElement('div');
      textMessage.textContent = message.loading;
      statusMessage.appendChild(textMessage);

      const formData = new FormData(form);
      let api;
      form.closest('.popup-design') ? api = path.designer : api = path.data;

      postData(api, formData)
        .then((response) => {
          console.log(response);
          statusImg.setAttribute('src', message.ok);
          textMessage.textContent = message.success;
        })
        .catch(() => {
          statusImg.setAttribute('src', message.fail);
          textMessage.textContent = message.failure;
        })
        .finally(() => {
          clearInputs();
          clearInputsPhoto();
          setTimeout(() => {
            statusMessage.remove();
            form.style.display = 'block';
            form.classList.remove('fadeOutUp');
            form.classList.add('fadeInUp');
          }, 4000);
        });
    });
  });
};