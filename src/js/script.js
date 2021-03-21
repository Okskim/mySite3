window.addEventListener('DOMContentLoaded',() => {
//sliders

const slides = document.querySelectorAll('.sliders__slide'),
      prev = document.querySelector('.sliders__prev'),
      next = document.querySelector('.sliders__next'),
      slideWrapper = document.querySelector('.sliders__wrapper'),
      slideField = document.querySelector ('.sliders__inner'),
      width = window.getComputedStyle(slideWrapper).width;

      
      let offset = 0;

      slideField.style.width = 100*slides.length + '%';
      slideWrapper.style.overflow = 'hidden';

      slides.forEach(slide => {
          slide.style.width = width;
      });

      next.addEventListener('click', () => {
        if (offset == +width.slice(0,width.length-2)*(slides.length-1)) {
          offset = 0;
        } else {
          offset+= +width.slice(0,width.length-2);
        }
        slideField.style.transform = `translateX(-${offset}px)`;
      });

      prev.addEventListener('click', () => {
        if (offset == 0) {
          offset = +width.slice(0,width.length-2)*(slides.length-1);         
        } else {
          offset-= +width.slice(0,width.length-2);
        }
        slideField.style.transform = `translateX(-${offset}px)`;
      });

      //tabs

      const tabs = document.querySelectorAll('.catalog__tab'),
            tabsContent = document.querySelectorAll('.catalog__content'),
            tabsParent = document.querySelector('.catalog__tabs');


            function hideTabContent () {
                tabsContent.forEach(item => {
                item.classList.remove('catalog__content_active');
              });           

              tabs.forEach(item => {
                item.classList.remove('catalog__tab_active');
              });
           }  

            function showTabContent(i=0) {
              tabsContent[i].classList.add('catalog__content_active');              
              tabs[i].classList.add('catalog__tab_active');
            }

            // hideTabContent();
            showTabContent();

            tabsParent.addEventListener('click', (event) => {
              const target = event.target;
              if(target && target.classList.contains("catalog__tab")){
                tabs.forEach((item,i) => {
                  if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                  }
                });
              }

            });



    });



