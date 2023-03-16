export const drop = () => {
  const fileInputs = document.querySelectorAll('[name="upload"]');
  const arrayEvents = ['dragenter', 'dragleave', 'dragover', 'drop'];
  const arrayForStyle = ['dragenter', 'dragover'];
  const arrayForDeleteStyle = ['dragleave', 'drop'];

  arrayEvents.forEach((event) => {
    fileInputs.forEach((input) => {
      input.addEventListener(event, preventDefaults, false);
    });
  });

  function preventDefaults(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  const highLight = (element) => {
    element.closest('.file_upload').style.border = '5px solid yellow';
    element.closest('.file_upload').style.backgroundColor = 'rgba(0,0,0, .7)';
  };

  const upHighLight = (element) => {
    element.closest('.file_upload').style.border = 'none';
    if (element.closest('.calc_form')) {
      element.closest('.file_upload').style.backgroundColor = '#fff';
    } else {
      element.closest('.file_upload').style.backgroundColor = '#ededed';
    }
  };

  arrayForStyle.forEach((eventName) => {
    fileInputs.forEach((input) => {
      input.addEventListener(eventName, () => highLight(input), false);
    });
  });

  arrayForDeleteStyle.forEach((eventName) => {
    fileInputs.forEach((input) => {
      input.addEventListener(eventName, () => upHighLight(input), false);
    });
  });

  fileInputs.forEach((input) => {
    input.addEventListener('drop', (event) => {
      input.files = event.dataTransfer.files;
      let someDots;
      const chunksNamePhoto = input.files[0].name.split('.');

      chunksNamePhoto[0].length > 6 ? someDots = '...' : someDots = '.';
      const fullNamePhoto = chunksNamePhoto[0].substring(0, 6) + someDots + chunksNamePhoto[1];
      input.previousElementSibling.textContent = fullNamePhoto;
    });
  });
};