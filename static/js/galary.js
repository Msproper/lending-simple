
  document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');

    let currentIndex = 0;

    // Расставляем слайды горизонтально
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${index * 100}%)`;
    });

    // Перемещение к слайду
    const goToSlide = (index) => {
      track.style.transform = `translateX(-${index * 200}%)`;
      currentIndex = index;
    };

    // Следующий слайд
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      goToSlide(currentIndex);
    });

    // Предыдущий слайд
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      goToSlide(currentIndex);
    });

    // Свайп для мобильных
    let touchStartX = 0;
    track.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });

    track.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      if (touchEndX < touchStartX - 50) nextBtn.click(); // Свайп влево
      if (touchEndX > touchStartX + 50) prevBtn.click(); // Свайп вправо
    });
  });
