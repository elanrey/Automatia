

function createServiceCards() {
    const slidesContainer = document.querySelector('.carousel-slides');
    if (!slidesContainer || !services) return;

    // Clear existing content
    slidesContainer.innerHTML = '';

    // Create multiple copies for infinite loop
    const totalCopies = 3; // Duplicate slides 3 times for seamless loop
    for (let copy = 0; copy < totalCopies; copy++) {
        services.forEach((service, index) => {
            // Create slide
            const slideDiv = document.createElement('div');
            slideDiv.className = 'carousel-slide flex-shrink-0 w-[400px] mx-4 flex justify-center py-8';
            slideDiv.innerHTML = `
                <div class="glass-card stat-glow card-hover p-6 rounded-xl border border-slate-700 text-center min-h-[350px] max-w-[400px] w-full">
                    <h4 class="my-4 text-lg font-bold text-white">${service.titulo}</h4>
                    <div class="mt-3 text-justify text-base leading-relaxed text-slate-300">
                        <p><strong>• Problema:</strong> ${service.problema}</p>
                        <p class="mt-2"><strong>• Solución:</strong> ${service.solucion}</p>
                        <p class="mt-2"><strong>• Beneficio:</strong> ${service.beneficio}</p>
                    </div>
                </div>
            `;
            slidesContainer.appendChild(slideDiv);
        });
    }

    initializeCarousel();
}

function initializeCarousel() {
    const container = document.getElementById('carousel-container');
    if (!container) return;

    const slidesContainer = container.querySelector('.carousel-slides');
    if (!slidesContainer) return;

    // Start continuous animation
    startContinuousAnimation();
}

function startContinuousAnimation() {
    const slidesContainer = document.querySelector('.carousel-slides');
    if (!slidesContainer) return;

    // Calculate total width of one set of slides
    const slideWidth = 400 + 32; // 400px width + 32px margin (mx-4 = 16px * 2)
    const totalSlides = services.length * 3; // 3 copies
    const totalWidth = slideWidth * services.length; // Width of one set

    // Set up continuous animation
    let position = 0;
    let isPaused = false;
    const speed = 1; // pixels per frame

    function animate() {
        if (!isPaused) {
            position -= speed;
            if (position <= -totalWidth) {
                position = 0; // Reset to start for seamless loop
            }
            slidesContainer.style.transform = `translateX(${position}px)`;
        }
        requestAnimationFrame(animate);
    }

    // Add hover event listeners to pause/resume animation (only on the card content)
    const cardElements = slidesContainer.querySelectorAll('.carousel-slide .glass-card');
    cardElements.forEach(card => {
        card.addEventListener('mouseenter', () => {
            isPaused = true;
        });
        card.addEventListener('mouseleave', () => {
            isPaused = false;
        });
    });

    animate();
}

createServiceCards();
