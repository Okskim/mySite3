window.addEventListener('DOMContentLoaded',() => {
//sliders

const slides = document.querySelectorAll('.sliders__slide'),
      prev = document.querySelector('.sliders__prev'),
      next = document.querySelector('.sliders__next'),
      slideWrapper = document.querySelector('.sliders__wrapper'),
      slideField = document.querySelector ('.sliders__inner'),
      width = window.getComputedStyle(slideWrapper).width;

      let slideIndex = 1;
      let offset = 0;

      slideField.style.width = 100*slides.length + '%';
      slideWrapper.style.overflow = 'hidden';

      slides.forEach(slide => {
          slide.style.width = width;
      });


    });



