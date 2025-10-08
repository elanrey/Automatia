
let currentSlide = 0;
let isAutoPlaying = true;
let autoPlayInterval;

document.addEventListener('DOMContentLoaded', function() {
  initializeCarousel();
  startAutoPlay();
  
  const carouselContainer = document.querySelector('.carousel-container');
  if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', stopAutoPlay);
    carouselContainer.addEventListener('mouseleave', startAutoPlay);
  }

  document.addEventListener('keydown', function(e) {
    if (e.target.closest('.carousel-container')) {
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          prevSlide();
          break;
        case 'ArrowRight':
          e.preventDefault();
          nextSlide();
          break;
      }
    }
  });
});

function initializeCarousel() {
  const carousel = document.getElementById('services-carousel');
  const indicators = document.getElementById('carousel-indicators');

  if (!carousel || !indicators) return;

  carousel.innerHTML = '';
  createServiceSlides(carousel);
  createIndicators(indicators);
  showSlide(0);
}

function createServiceSlides(carousel) {
  services.forEach((service, index) => {
    const slide = document.createElement('div');
    slide.className = `service-slide bg-white p-8 shadow-lg rounded-xl border border-gray-light text-center transition hover:-translate-y-2`;
    slide.innerHTML = `
      <div class="service-header">
        <div class="service-icon ${service.iconBg} mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-white">
          <i class="${service.icon}"></i>
        </div>
        <h3 class="service-title mt-6 text-2xl font-bold text-dark">${service.title}</h3>
      </div>
      <div class="service-content">
        <div class="service-section">
          <h4>Problema del cliente:</h4>
          <p class="service-problem mt-4 text-base leading-7 text-gray">${service.problem}</p>
        </div>
        <div class="service-section">
          <h4>Solución que ofrezco:</h4>
          <p class="service-solution mt-4 text-base leading-7 text-gray">${service.solution}</p>
        </div>
        <div class="service-section">
          <h4>Beneficio / Resultado:</h4>
          <p class="service-benefit mt-4 text-base leading-7 text-gray">${service.benefit}</p>
        </div>
      </div>
    `;
    carousel.appendChild(slide);
  });
}

function createIndicators(indicators) {
  services.forEach((_, index) => {
    const indicator = document.createElement('div');
    indicator.className = 'carousel-indicator';
    indicator.addEventListener('click', () => showSlide(index));
    indicators.appendChild(indicator);
  });
}

function showSlide(index) {
  const slides = document.querySelectorAll('.service-slide');
  const indicatorElements = document.querySelectorAll('.carousel-indicator');

  slides.forEach(slide => slide.classList.remove('active'));
  indicatorElements.forEach(indicator => indicator.classList.remove('active'));

  if (slides[index]) {
    slides[index].classList.add('active');
  }
  if (indicatorElements[index]) {
    indicatorElements[index].classList.add('active');
  }
  currentSlide = index;
}

function nextSlide() {
  const nextIndex = (currentSlide + 1) % services.length;
  showSlide(nextIndex);
  resetAutoPlay();
}

function prevSlide() {
  const prevIndex = (currentSlide - 1 + services.length) % services.length;
  showSlide(prevIndex);
  resetAutoPlay();
}

function startAutoPlay() {
  if (isAutoPlaying) {
    autoPlayInterval = setInterval(nextSlide, 15000);
  }
}

function stopAutoPlay() {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval);
  }
}

function resetAutoPlay() {
  stopAutoPlay();
  startAutoPlay();
}
