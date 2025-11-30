function initializeCursorGlow() {
    const elements = document.querySelectorAll('.glass-card, .card-hover, .btn-primary');

    elements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Calculate percentage position within the element
            const xPercent = (x / rect.width) * 100;
            const yPercent = (y / rect.height) * 100;

            // Set CSS variables for the highlight position
            element.style.setProperty('--x', `${xPercent}%`);
            element.style.setProperty('--y', `${yPercent}%`);

            // For stat-glow cards, also update the box-shadow for extra effect
            if (element.classList.contains('stat-glow')) {
                const glowX = (xPercent / 100 - 0.5) * 20; // Reduced offset for subtle effect
                const glowY = (yPercent / 100 - 0.5) * 20;
                const baseGlow = '0 0 20px rgba(29, 69, 250, 0.3), 0 0 40px rgba(220, 65, 241, 0.2)';
                const cursorGlow = `${glowX}px ${glowY}px 25px rgba(29, 69, 250, 0.4), ${glowX * 0.5}px ${glowY * 0.5}px 50px rgba(220, 65, 241, 0.3)`;
                element.style.boxShadow = `${baseGlow}, ${cursorGlow}`;
            }
        });

        element.addEventListener('mouseleave', () => {
            // Reset for stat-glow cards
            if (element.classList.contains('stat-glow')) {
                element.style.boxShadow = '0 0 20px rgba(29, 69, 250, 0.3), 0 0 40px rgba(220, 65, 241, 0.2)';
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Llama a las funciones de inicialización de cada módulo.
    // El orden puede ser importante si un módulo depende de otro.

    // Datos globales (si son necesarios para otros scripts)
    // const services = [ ... ];

    if (typeof initializeCarousel === 'function') {
        initializeCarousel();
    }
    if (typeof initializeFaqAccordion === 'function') {
        initializeFaqAccordion();
    }
    if (typeof initializeModal === 'function') {
        initializeModal();
    }
    if (typeof initializeParticles === 'function') {
        initializeParticles();
    }
    if (typeof initializeContactForm === 'function') {
        initializeContactForm();
    }
    if (typeof initializeToast === 'function') {
        initializeToast();
    }
    if (typeof initializeSectorSearch === 'function') {
        initializeSectorSearch();
    }
    if (typeof initializeChat === 'function') {
        initializeChat();
    }
    if (typeof initializeHeaderAndNav === 'function') {
        initializeHeaderAndNav();
    }

    // Initialize cursor-following glow effect
    initializeCursorGlow();
});
