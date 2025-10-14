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
    }, 10000);
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

function createServiceCards() {
    console.log('createServiceCards() called.');
    const slidesContainer = document.querySelector('.carousel-slides');
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    if (!slidesContainer || !services || !indicatorsContainer) return;

    services.forEach((service, index) => {
        const slideDiv = document.createElement('div');
        slideDiv.className = 'carousel-slide min-w-full flex justify-center py-8 px-4 bg-dark backdrop-blur-md'; // Reduced padding
        slideDiv.innerHTML = `
            <div class="bg-slate-700 p-6 shadow-lg rounded-xl border border-slate-700 text-center transition hover:-translate-y-2 min-h-[350px] max-w-[400px]"> <!-- Reduced padding, min-height, max-w -->
                <h4 class="my-4 text-lg font-bold text-white">${service.titulo}</h4> <!-- Added my-4 -->
                <div class="mt-3 text-justify text-base leading-relaxed text-slate-300"> <!-- Reduced font size, adjusted leading -->
                    <p><strong>• Problema:</strong> ${service.problema}</p>
                    <p class="mt-2"><strong>• Solución:</strong> ${service.solucion}</p> <!-- Reduced margin-top -->
                    <p class="mt-2"><strong>• Beneficio:</strong> ${service.beneficio}</p> <!-- Reduced margin-top -->
                </div>
            </div>
        `;
        slidesContainer.appendChild(slideDiv);

        // Pause/Resume auto-play on individual slide hover
        slideDiv.addEventListener('mouseenter', stopAutoPlay);
        slideDiv.addEventListener('mouseleave', startAutoPlay);
    });
    initializeCarousel();
}

function initializeCarousel() {
    console.log('initializeCarousel() called.');
    const container = document.getElementById('carousel-container');
    if (!container) return;

    slides = container.querySelectorAll('.carousel-slide'); // Assign to global slides
    const prevBtn = container.querySelector('.carousel-prev');
    const nextBtn = container.querySelector('.carousel-next');
    const slidesContainer = container.querySelector('.carousel-slides');
    const indicators = container.querySelectorAll('.carousel-indicators button');

    if (!slides.length || !prevBtn || !nextBtn || !slidesContainer || !indicators.length) return;

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide();
    });

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlide();
    });

    // Auto-play
    startAutoPlay();

    updateSlide(); // Initial update to set correct slide and indicator
}

createServiceCards();