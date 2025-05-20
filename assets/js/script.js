$(document).ready(function(){
    $('.team-slider').slick({
      slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    appendArrows:".team__slider-arrow",
    arrows: true,
    responsive: [
      {
          breakpoint: 820,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 569,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
    
    });
  });

  $(document).ready(function(){
    $('.work-slider').slick({
      slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    appendArrows:".work__slider-arrow",
    arrows: true,
    responsive: [
      {
          breakpoint: 820,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 569,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
    
    });
  });

  // Бургер меню
$('.menu-icon').on('click', function(){
    $('.menu-icon, .menu').toggleClass("active");
    // $('body').toggleClass("overlay");
  })
  
  $(document).click(function(e) {
    if (!$(e.target).hasClass("active") &&
        $(e.target).parents(".site-nav").length === 0) {
          $('.menu-icon, .menu').removeClass("active");
          // $('body').removeClass("overlay");
    }
  });
  $('.menu-item').on('click', function(){
    $('.menu-icon, .menu').removeClass("active");
    // $('body').removeClass("overlay");
  }) 

  // button-book
  function showBookingButton() {
    const button = $('.btn-to-book');
    const footer = $('footer');
  
    $(window).on('scroll', function () {
      const scrollTop = $(this).scrollTop();
      const windowHeight = $(this).height();
      const footerOffsetTop = footer.offset().top;
  
      if (scrollTop >= 200 && (scrollTop + windowHeight) < footerOffsetTop) {
        button.fadeIn();
      } else {
        button.fadeOut();
      }
    });
  }
  showBookingButton();
 // Плавная прокрутка
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
      });
  });
});