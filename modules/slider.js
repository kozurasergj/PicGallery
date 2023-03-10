export const sliders = ({ slide, direction, preview, next }) => {
  const prevBtn = document.querySelector(preview);
  const nextBtn = document.querySelector(next);
  let slideIndex = 1;
  let paused = false;

  const slides = document.querySelectorAll(slide);
  const showSlides = (numSlide) => {
    if (numSlide > slides.length) {
      slideIndex = 1;
    }
    if (numSlide < 1) {
      slideIndex = slides.length;
    }
    slides.forEach(slide => {
      slide.classList.add("animated");
      slide.style.display = "none";
    });
    slides[slideIndex - 1].style.display = 'block';
  }
  showSlides(slideIndex);

  const plusSlides = (numSlide) => {
    showSlides(slideIndex += numSlide);
  }

  if (prevBtn && nextBtn) {
    document.querySelector(preview).addEventListener('click', () => {
      plusSlides(-1);
      slides[slideIndex - 1].classList.add('slideInDown');
    });
    document.querySelector(next).addEventListener('click', () => {
      plusSlides(1);
      slides[slideIndex - 1].classList.remove('slideInRight');
      slides[slideIndex - 1].classList.add('slideInLeft');
    });
  }

  const activateAnimation = () => {
    if (direction === 'vertical') {
      paused = setInterval(() => {
        plusSlides(1);
        slides[slideIndex - 1].classList.add('slideInDown');
      }, 3000);
    } else {
      paused = setInterval(() => {
        plusSlides(1);
        slides[slideIndex - 1].classList.remove('slideInRight');
        slides[slideIndex - 1].classList.add('slideInLeft');
      }, 3000);
    }
  }
  activateAnimation();
  slides[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(paused);
  });
  slides[0].parentNode.addEventListener('mouseleave', () => {
    activateAnimation();
  });
};