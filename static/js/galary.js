
  document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
      // Параметры по умолчанию
      slidesPerView: 'auto',
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      grabCursor: true,
      
      // Пагинация
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      
      // Навигационные кнопки
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
      // Адаптивные настройки
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }
    });
  });
