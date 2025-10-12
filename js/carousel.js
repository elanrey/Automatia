function createServiceCards() {
    const slidesContainer = document.querySelector('.carousel-slides');
    if (!slidesContainer || !services) return;

    services.forEach(service => {
        const slideDiv = document.createElement('div');
        slideDiv.className = 'carousel-slide min-w-full flex justify-center py-12 px-8 bg-dark backdrop-blur-md';
        slideDiv.innerHTML = `
            <div class="bg-slate-700 p-12 py-16 px-16 shadow-lg rounded-xl border border-slate-700 text-center transition hover:-translate-y-2 min-h-[500px] max-w-[600px]">
                <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-purple">
                    <i class="${service.icon} text-2xl text-white"></i>
                </div>
                <h4 class="mt-6 text-xl font-bold text-white">${service.titulo}</h4>
                <div class="mt-4 text-justify text-lg leading-8 text-slate-300">
                    <p><strong>• Problema:</strong> ${service.problema}</p>
                    <p class="mt-4"><strong>• Solución:</strong> ${service.solucion}</p>
                    <p class="mt-4"><strong>• Beneficio:</strong> ${service.beneficio}</p>
                </div>
            </div>
        `;
        slidesContainer.appendChild(slideDiv);
    });
    initializeCarousel();
}

function initializeCarousel() {
    const container = document.getElementById('carousel-container');
    if (!container) return;

    let currentSlide = 0;
    const slides = container.querySelectorAll('.carousel-slide');
    const prevBtn = container.querySelector('.carousel-prev');
    const nextBtn = container.querySelector('.carousel-next');
    const slidesContainer = container.querySelector('.carousel-slides');

    if (!slides.length || !prevBtn || !nextBtn || !slidesContainer) return;

    function updateSlide() {
        slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide();
    });

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlide();
    });

    // Auto-play optional
    setInterval(() => {
        nextBtn.click();
    }, 10000);
}

createServiceCards();