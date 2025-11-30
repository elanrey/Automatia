// Animación de contadores en las estadísticas del hero
document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.counter-value');
    let hasAnimated = false;

    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000; // 2 segundos
        const increment = target / (duration / 16); // 60fps
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current) + '%';
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + '%';
            }
        };

        updateCounter();
    }

    // Usar IntersectionObserver para animar cuando sea visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                counters.forEach((counter, index) => {
                    setTimeout(() => {
                        counter.style.animation = 'counter-up 0.5s ease-out';
                        animateCounter(counter);
                    }, index * 100); // Delay escalonado
                });
            }
        });
    }, { threshold: 0.5 });

    // Observar el contenedor de estadísticas
    const statsContainer = document.querySelector('#stat-card-tiempo')?.parentElement;
    if (statsContainer) {
        observer.observe(statsContainer);
    }
});
