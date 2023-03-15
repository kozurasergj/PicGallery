export const scrolling = () => {
  const links = document.querySelectorAll('[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      go_scroll(document.querySelector(this.getAttribute('href')));
    });
  });

  function go_scroll(elment) {
    elment.scrollIntoView({
      block: 'center',
      behavior: 'smooth'
    });
  }
};
