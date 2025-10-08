document.addEventListener('DOMContentLoaded', function() {
    // Llama a las funciones de inicialización de cada módulo.
    // El orden puede ser importante si un módulo depende de otro.

    // Datos globales (si son necesarios para otros scripts)
    // const services = [ ... ]; 

    if (typeof initializeHeaderAndNav === 'function') {
        initializeHeaderAndNav();
    }
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
    initializeToast();
    if (typeof initializeSectorSearch === 'function') {
        initializeSectorSearch();
    }
});