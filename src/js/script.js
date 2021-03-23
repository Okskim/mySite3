window.addEventListener('DOMContentLoaded',() => {
//sliders

const slides = document.querySelectorAll('.sliders__slide'),
      prev = document.querySelector('.sliders__prev'),
      next = document.querySelector('.sliders__next'),
      slideWrapper = document.querySelector('.sliders__wrapper'),
      slideField = document.querySelector ('.sliders__inner'),
      width = window.getComputedStyle(slideWrapper).width;
      // slider = document.querySelector('.sliders');

      
      let offset = 0;
      let slideIndex = 1;

      const dots =[];

      slideField.style.width = 100*slides.length + '%';
      slideWrapper.style.overflow = 'hidden';

      slides.forEach(slide => {
          slide.style.width = width;
      });

    slideWrapper.style.position = 'relative';

    const indicators = document.createElement('ol');

    indicators.classList.add('.sliders__indicators');
    indicators.style.cssText =`
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 15;
            display: flex;
            justify-content: center;
            margin-right: 15%;
            margin-left: 15%;
            list-style: none;

          `;
    slideWrapper.append(indicators);

    for (let i=0; i < slides.length; i++) {
      const dot = document.createElement('li');
      dot.setAttribute('data-slide-to', i+1);
      dot.style.cssText =`
          box-sizing: content-box;
          flex: 0 1 auto;
          width: 30px;
          height: 5px;
          margin-right: 3px;
          margin-left: 3px;
          cursor: pointer;
          background-color: #c70101;
          background-clip: padding-box;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          opacity: .5;
          transition: opacity .6s ease;
          `;

          if (i == 0) {
            dot.style.opacity = '1';
          }
          indicators.append(dot);

          dots.push(dot);
    }

      next.addEventListener('click', () => {
        if (offset == +width.slice(0,width.length-2)*(slides.length-1)) {
          offset = 0;
        } else {
          offset+= +width.slice(0,width.length-2);
        }
        slideField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
          slideIndex = 1;
        
        } else { 
            slideIndex++;
        }
        

        dots.forEach(dot => dot.style.opacity = '.5');          
        dots[slideIndex - 1].style.opacity = 1;
        
      });

      prev.addEventListener('click', () => {
        if (offset == 0) {
          offset = +width.slice(0,width.length-2)*(slides.length-1);         
        } else {
          offset-= +width.slice(0,width.length-2);
        }
        slideField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
          slideIndex = slides.length;
        
        } else { 
            slideIndex--;
        }

        dots.forEach(dot => dot.style.opacity = '.5');          
          dots[slideIndex - 1].style.opacity = 1;
      });

      dots.forEach(dot => { 
      dot.addEventListener('click', (e) => {
        const slideTo = e.target.getAttribute('data-slide-to');

        slideIndex = slideTo;
        offset = +width.slice(0,width.length-2)*(slideTo - 1);
        slideField.style.transform = `translateX(-${offset}px)`;

        

        dots.forEach(dot => dot.style.opacity = '.5');          
        dots[slideIndex - 1].style.opacity = 1;
      });
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

            hideTabContent();
            showTabContent();

            tabsParent.addEventListener('click', (e) => {             
              const target = e.target;
              console.log(target);
              if (target && target.closest('.catalog__tab')) {
                  console.log('2click');
                  tabs.forEach((item, i) => {
                      if (target == item || target.parentElement == item ) {  
                          hideTabContent();
                          showTabContent(i);
                  }
                });
              }

            });

     


    });



