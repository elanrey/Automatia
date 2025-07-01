// JavaScript para funcionalidad básica del menú móvil
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%'; 
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = 'var(--primary-dark)'; 
                navLinks.style.padding = '1rem';
                navLinks.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
                navLinks.querySelectorAll('a').forEach(link => {
                    link.style.marginLeft = '0';
                    link.style.marginBottom = '0.5rem';
                    link.style.textAlign = 'center';
                });
            }
        });
    }

    // Funcionalidad de desplazamiento suave para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Si el menú móvil está abierto, ciérralo
                if (window.innerWidth < 768 && navLinks.style.display === 'flex') {
                    navLinks.style.display = 'none';
                }

                window.scrollTo({
                    top: targetElement.offsetTop - (document.querySelector('header').offsetHeight), // Ajusta para el header fijo
                    behavior: 'smooth'
                });
            }
        });
    });

    // Manejo del formulario de contacto (ejemplo, sin envío real)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Formulario enviado (simulado)');
            alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
            this.reset(); // Limpia el formulario
        });
    } else {
        console.error('No se encontró el elemento .contact-form');
    }

    // Asegurar que el menú se muestre correctamente al redimensionar la ventana
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = '';
            navLinks.style.position = '';
            navLinks.style.top = '';
            navLinks.style.left = '';
            navLinks.style.width = '';
            navLinks.style.backgroundColor = '';
            navLinks.style.padding = '';
            navLinks.style.boxShadow = '';
            navLinks.querySelectorAll('a').forEach(link => {
                link.style.marginLeft = ''; 
                link.style.marginBottom = '';
                link.style.textAlign = '';
            });
        } else {
            if (navLinks.style.display !== 'flex') {
                 navLinks.style.display = 'none';
            }
        }
    });

    /* --- Lógica del Carrusel de Servicios --- */
    const carouselInner = document.querySelector('.carousel-inner');
    const serviceItems = document.querySelectorAll('.carousel-inner .service-item');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');
    const indicatorsContainer = document.querySelector('.carousel-indicators');

    let currentIndex = 0;
    const totalItems = serviceItems.length;
    let carouselInterval;
    const intervalTime = 10000; // Cambia cada 10 segundos

    // Crea los indicadores de puntos
    function createIndicators() {
        indicatorsContainer.innerHTML = ''; // Limpiar existentes
        for (let i = 0; i < totalItems; i++) {
            const dot = document.createElement('div');
            dot.classList.add('indicator-dot');
            if (i === currentIndex) {
                dot.classList.add('active');
            }
            dot.dataset.index = i; // Guardar el índice en el dataset
            dot.addEventListener('click', () => showSlide(i));
            indicatorsContainer.appendChild(dot);
        }
    }

    // Muestra el slide basado en el índice
    function showSlide(index) {
        if (index < 0) {
            currentIndex = totalItems - 1; // Volver al final si va antes del inicio
        } else if (index >= totalItems) {
            currentIndex = 0; // Volver al inicio si va después del final
        } else {
            currentIndex = index;
        }

        const offset = -currentIndex * 100; // Calcula el desplazamiento en %
        carouselInner.style.transform = `translateX(${offset}%)`;

        // Actualiza los indicadores activos
        document.querySelectorAll('.indicator-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    // Función para el siguiente slide
    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    // Función para el slide anterior
    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    // Inicia el carrusel automático
    function startCarousel() {
        stopCarousel(); // Asegura que no haya múltiples intervalos
        carouselInterval = setInterval(nextSlide, intervalTime);
    }

    // Detiene el carrusel automático
    function stopCarousel() {
        clearInterval(carouselInterval);
    }

    // Event listeners para los botones de control
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            startCarousel(); // Reiniciar el temporizador al interactuar
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            startCarousel(); // Reiniciar el temporizador al interactuar
        });
    }

    // Inicializar el carrusel al cargar la página
    if (serviceItems.length > 0) {
        createIndicators();
        showSlide(currentIndex);
        startCarousel();

        // Pausar el carrusel al pasar el ratón por encima y reanudar al salir
        carouselInner.closest('.carousel-container').addEventListener('mouseenter', stopCarousel);
        carouselInner.closest('.carousel-container').addEventListener('mouseleave', startCarousel);
    }
});