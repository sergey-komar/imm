$(function () {

    $('.partners-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 4,
             
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
             
            }
          },
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
            }
          },
        ]
     });


     $('.header-heading__inner').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true
     
   });



    //плавная прокрутка
    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 300);
        return false;
    });
})


window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header__wrapper');
    if (header) {
       window.addEventListener("scroll", () => {
          if (window.scrollY > 0) {
          header.classList.add("header-bg");
          } else {
          header.classList.remove("header-bg");
          }  
       });
    }


    const newsBtn = document.querySelector('.news__btn');
    const newsHidden = document.querySelector('.news-block--hidden');

    if(newsBtn && newsHidden){
      newsBtn.addEventListener('click', () => {
        newsHidden.classList.add('news-block--open');
        newsBtn.classList.add('btn-hidden');
      })
    }

    const companyOne = document.querySelector('.company-block__item--one');
    const companyTwo = document.querySelector('.company-block__item--two');
    const companyTree = document.querySelector('.company-block__item--three');
    const companyFour = document.querySelector('.company-block__item--four');
    const companyFife = document.querySelector('.company-block__item--fife');

    document.addEventListener('scroll', function() {
      const posTop = companyOne.getBoundingClientRect().top;
      const posTop1 = companyOne.getBoundingClientRect().top;
      const posTop2 = companyOne.getBoundingClientRect().top;
      const posTop3 = companyOne.getBoundingClientRect().top;
      const posTop4 = companyOne.getBoundingClientRect().top;

      
      if(companyOne){
      companyOne.classList.toggle('companyone', posTop <= 800);
        }

        if(companyTwo){
          companyTwo.classList.toggle('companytwo', posTop1 <= 500);
        }

        if(companyTree){
          companyTree.classList.toggle('companytree', posTop2 <= 200);
        }

        if(companyFour){
          companyFour.classList.toggle('companyfour', posTop3 <= -50);
        }

        if(companyFife){
          companyFife.classList.toggle('companyfife', posTop4 <= -250);
        }
          
      });

     
      
        
  

})//