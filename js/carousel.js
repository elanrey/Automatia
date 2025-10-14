let autoPlayInterval;
let currentSlide = 0; // Global
let slides; // Global

function updateSlide() {
    const slidesContainer = document.querySelector('.carousel-slides');
    const indicators = document.querySelectorAll('.carousel-indicators button');
    if (!slidesContainer || !indicators) return; // Add checks for elements

    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    indicators.forEach((dot, idx) => {
        dot.classList.toggle('bg-primary', idx === currentSlide);
        dot.classList.toggle('bg-gray-600', idx !== currentSlide);
    });
}

function goToSlide(index) {
    currentSlide = index;
    updateSlide();
}

function startAutoPlay() {
    stopAutoPlay(); // Clear any existing interval before starting a new one
    autoPlayInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide();
    }, 5000);
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

function createServiceCards() {
    const slidesContainer = document.querySelector('.carousel-slides');
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    if (!slidesContainer || !services || !indicatorsContainer) return;

    // Clear existing content
    slidesContainer.innerHTML = '';
    indicatorsContainer.innerHTML = '';

    services.forEach((service, index) => {
        // Create slide
        const slideDiv = document.createElement('div');
        slideDiv.className = 'carousel-slide min-w-full flex justify-center py-8 px-4 bg-dark backdrop-blur-md';
        slideDiv.innerHTML = `
            <div class="bg-slate-700 p-6 shadow-lg rounded-xl border border-slate-700 text-center transition hover:-translate-y-2 min-h-[350px] max-w-[400px]">
                <h4 class="my-4 text-lg font-bold text-white">${service.titulo}</h4>
                <div class="mt-3 text-justify text-base leading-relaxed text-slate-300">
                    <p><strong>• Problema:</strong> ${service.problema}</p>
                    <p class="mt-2"><strong>• Solución:</strong> ${service.solucion}</p>
                    <p class="mt-2"><strong>• Beneficio:</strong> ${service.beneficio}</p>
                </div>
            </div>
        `;
        slidesContainer.appendChild(slideDiv);

        // Create indicator
        const indicatorBtn = document.createElement('button');
        indicatorBtn.className = 'w-3 h-3 rounded-full transition-colors duration-300';
        indicatorBtn.setAttribute('aria-label', `Ir a slide ${index + 1}`);
        indicatorBtn.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicatorBtn);

        // Pause/Resume auto-play on individual slide hover
        slideDiv.addEventListener('mouseenter', stopAutoPlay);
        slideDiv.addEventListener('mouseleave', startAutoPlay);
    });
    
    initializeCarousel();
}

function initializeCarousel() {
    const container = document.getElementById('carousel-container');
    if (!container) return;

    slides = container.querySelectorAll('.carousel-slide'); // Assign to global slides
    const prevBtn = container.querySelector('.carousel-prev');
    const nextBtn = container.querySelector('.carousel-next');
    const slidesContainer = container.querySelector('.carousel-slides');

    if (!slides.length || !prevBtn || !nextBtn || !slidesContainer) return;

    // Remove previous event listeners by cloning and replacing buttons
    const newPrevBtn = prevBtn.cloneNode(true);
    const newNextBtn = nextBtn.cloneNode(true);
    prevBtn.parentNode.replaceChild(newPrevBtn, prevBtn);
    nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);

    newNextBtn.addEventListener('click', () => {
        stopAutoPlay();
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide();
        startAutoPlay();
    });

    newPrevBtn.addEventListener('click', () => {
        stopAutoPlay();
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlide();
        startAutoPlay();
    });

    // Auto-play
    startAutoPlay();

    updateSlide(); // Initial update to set correct slide and indicator
}

createServiceCards();
