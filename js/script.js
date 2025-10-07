

// Datos de los servicios
const services = [
  {
    id: 1,
    title: "Automatización de Tareas Repetitivas",
    icon: "fas fa-cogs",
    gradient: "from-blue-50 to-indigo-50",
    iconBg: "bg-gradient-blue",
    problem: 'Una consultora de crecimiento invertía más de 20 horas semanales en tareas manuales, como la entrada de datos en su CRM, la gestión de archivos y la creación de informes. Este proceso no solo era ineficiente, sino que también generaba errores que afectaban la toma de decisiones.',
    solution: "Se diseñaron flujos automáticos que imitan y ejecutan esas tareas repetitivas en su lugar. El sistema se encarga de realizar automáticamente lo que antes hacía su personal, desde la entrada de datos hasta la generación de informes.",
    benefit: "Ahorro masivo de tiempo para su personal, reducción drástica de errores, mayor eficiencia operativa y la libertad de enfocar sus recursos en actividades de mayor valor para su negocio."
  },
  {
    id: 2,
    title: "Asistentes Virtuales Inteligentes",
    icon: "fas fa-robot",
    gradient: "from-emerald-50 to-teal-50",
    iconBg: "bg-gradient-green",
    problem: 'Una academia online se veía desbordada por la cantidad de preguntas repetitivas de sus estudiantes sobre horarios, materiales y acceso a las clases. El equipo de soporte no daba abasto, generando largos tiempos de espera y una baja satisfacción.',
    solution: "Se desarrolló un asistente virtual (chatbot) entrenado con los documentos, manuales y archivos relevantes de la academia. Este asistente puede responder preguntas, buscar información específica y brindar respuestas claras y precisas al instante.",
    benefit: "Mejora en la atención al cliente o soporte interno, respuestas rápidas y consistentes, y una reducción significativa en la carga de trabajo de su equipo."
  },
  {
    id: 3,
    title: "Extracción Inteligente de Información",
    icon: "fas fa-search-plus",
    gradient: "from-purple-50 to-pink-50",
    iconBg: "bg-gradient-purple",
    problem: 'Un despacho de abogados necesitaba analizar cientos de documentos legales y extraer cláusulas específicas, un trabajo que tomaba días y era propenso a omisiones. La recolección manual de esta información crítica retrasaba la preparación de sus casos.',
    solution: "Se implementaron soluciones que extraen datos de documentos, los procesan con inteligencia artificial y los convierten en contenido útil y estructurado, permitiendo, por ejemplo, transformar documentos legales en resúmenes ejecutivos.",
    benefit: "Acceso rápido a información clave para tomar decisiones, eliminación del trabajo manual de recolección de datos y la capacidad de descubrir oportunidades antes invisibles."
  },
  {
    id: 4,
    title: "Conexión y Sincronización de Sistemas",
    icon: "fas fa-link",
    gradient: "from-orange-50 to-red-50",
    iconBg: "bg-gradient-orange",
    problem: 'Una empresa de logística utilizaba un sistema para la gestión de inventario y otro para la contabilidad, sin conexión entre ellos. El equipo debía duplicar la información manualmente, lo que causaba inconsistencias en los datos y dificultaba la visibilidad financiera en tiempo real.',
    solution: "Se diseñaron integraciones para que todos los sistemas trabajen como uno solo, compartiendo información sin intervención humana. Los flujos automáticos aseguran que cuando algo ocurra en un sistema, se actualice automáticamente en los demás.",
    benefit: "Eliminación de la duplicidad de datos, reducción de errores, visión unificada de su operación y procesos optimizados con datos siempre actualizados."
  },
  {
    id: 5,
    title: "Eficiencia en la Gestión de Nuevos Clientes",
    icon: "fas fa-chart-line",
    gradient: "from-green-50 to-emerald-50",
    iconBg: "bg-gradient-green",
    problem: "Una empresa de servicios financieros dedicaba un equipo completo a procesar manualmente las solicitudes de nuevos clientes. Esto implicaba revisar documentos, ingresar datos en múltiples sistemas y validar información, generando retrasos y una alta tasa de errores.",
    solution: "Se diseñó un sistema que toma automáticamente las solicitudes, extrae la información clave de los documentos y la verifica en tiempo real. Luego distribuye los datos entre los sistemas internos sin intervención humana.",
    benefit: "La empresa redujo el tiempo de procesamiento en un 70% y los errores humanos en un 95%. Esto permitió que: El equipo se enfocara en atención personalizada y generación de valor, dejando atrás tareas mecánicas."
  },
  {
    id: 6,
    title: "Soporte al Cliente 24/7 con IA",
    icon: "fas fa-headset",
    gradient: "from-blue-50 to-cyan-50",
    iconBg: "bg-gradient-blue",
    problem: "Una compañía de seguros recibía cientos de llamadas diarias con preguntas repetidas sobre pólizas y coberturas. Los agentes se saturaban con estas consultas, lo que afectaba la atención de casos más importantes.",
    solution: "Se desarrolló un asistente virtual inteligente en su sitio web, entrenado con la documentación interna: pólizas, preguntas frecuentes y procedimientos. El asistente comprende preguntas mal formuladas y responde de forma clara.",
    benefit: "El 80% de las preguntas frecuentes ahora se resuelven automáticamente. Bajaron los tiempos de espera y mejoró la satisfacción del cliente. Esto permitió que: La empresa ofreciera soporte constante y de alta calidad, y su equipo se dedicara a tareas de mayor impacto."
  }
];

// Variables globales
let currentSlide = 0;
let isAutoPlaying = true;
let autoPlayInterval;
let mobileMenuOpen = false;

// Elementos del DOM
let carousel;
let indicators;

// Inicializar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
  initializeCarousel();
  initializeHeaderAndNav();
  initializeContactForm();
  initializeParticles(); // <-- Llamada a la nueva función de partículas
  initializeFaqAccordion();
  initializeModal(); // <-- AÑADIDO
  startAutoPlay();
  handleInitialHashScroll(); // Nueva llamada para manejar el scroll inicial
});

// Función para manejar el scroll a la sección inicial si hay un hash en la URL
function handleInitialHashScroll() {
  if (window.location.hash) {
    const sectionId = window.location.hash.substring(1);
    scrollToSection(sectionId, 'auto'); // 'auto' para posicionamiento instantáneo
  }
}

// Funcionalidad del encabezado y navegación
function initializeHeaderAndNav() {
    const header = document.getElementById('header');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileMenuButton = document.getElementById('mobile-menu-toggle-btn');
    const menuIcon = mobileMenuButton ? mobileMenuButton.querySelector('i') : null;

    // 1. Efecto de scroll del encabezado
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // 2. Abrir/cerrar menú móvil
    const toggleMenu = () => {
        if (mobileNav) {
            const isActive = mobileNav.classList.toggle('active');
            if (menuIcon) {
                menuIcon.classList.toggle('fa-bars', !isActive);
                menuIcon.classList.toggle('fa-times', isActive);
            }
        }
    };

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', toggleMenu);
    }

    // 3. Manejar clics en los enlaces de navegación
    const handleLinkClick = (e) => {
        const href = e.currentTarget.getAttribute('href');

        if (!href || !href.startsWith('#')) {
            if (mobileNav && mobileNav.classList.contains('active')) {
                toggleMenu();
            }
            return;
        }

        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            if (mobileNav && mobileNav.classList.contains('active')) {
                toggleMenu();
            }
            
            const headerHeight = header ? header.offsetHeight : 0;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };

    document.querySelectorAll('.nav-link, .nav-link-mobile').forEach(link => {
        link.addEventListener('click', handleLinkClick);
    });
}



// Animaciones del héroe


function createDynamicParticles() {
  const container = document.querySelector('.hero-particles');
  if (!container) return;
  // container.innerHTML = '';
  const starCount = 400; // A lot of stars for a dense field

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';

    // Set random X and Y position across the whole screen
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;

    // Random size for the star (bigger range)
    const size = Math.random() * 4 + 1; // Size from 1px to 5px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // Random animation timings to simulate depth (slower)
    const duration = Math.random() * 3 + 3; // Slower: duration from 3s to 6s
    const delay = Math.random() * 5;

    // The animation itself handles the Z-axis (depth) movement
    star.style.animationDuration = `${duration}s`;
    star.style.animationDelay = `-${delay}s`; // Negative delay starts animation partway through its cycle

    container.appendChild(star);
  }
}

function initializeParticles() {
    createDynamicParticles();
}

function typeText(element, text, delay, callback) {
    let i = 0;
    element.style.color = 'var(--text-dark)'; // Make text visible when typing starts
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, delay);
        } else if (callback) {
            callback();
        }
    }
    type();
}





// Función para scroll suave
function scrollToSection(sectionId, behavior = 'smooth') {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerHeight = 80;
    const targetPosition = element.offsetTop - headerHeight;
    window.scrollTo({
      top: targetPosition,
      behavior: behavior
    });
    history.replaceState(null, '', `#${sectionId}`);
  }
}

function initializeFaqAccordion() {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.closest('.faq-item');
      const faqAnswer = faqItem.querySelector('.faq-answer');
      const faqIcon = question.querySelector('.faq-icon');

      // Toggle active class on question
      question.classList.toggle('active');
      // Toggle show class on answer
      faqAnswer.classList.toggle('show');

      // Toggle icon rotation
      if (faqAnswer.classList.contains('show')) {
        faqIcon.classList.remove('fa-chevron-down');
        faqIcon.classList.add('fa-chevron-up');
      } else {
        faqIcon.classList.remove('fa-chevron-up');
        faqIcon.classList.add('fa-chevron-down');
      }
    });
  });
}

// Funcionalidad del carrusel
function initializeCarousel() {
  carousel = document.getElementById('services-carousel');
  indicators = document.getElementById('carousel-indicators');

  if (!carousel || !indicators) return;

  // Limpiar cualquier contenido HTML pre-existente (para SEO)
  carousel.innerHTML = '';

  createServiceSlides();
  createIndicators();
  showSlide(0);
}

function createServiceSlides() {
  services.forEach((service, index) => {
    const slide = document.createElement('div');
    slide.className = `service-slide bg-gradient-to-br ${service.gradient}`;
    slide.innerHTML = `
      <div class="service-header">
        <div class="service-icon ${service.iconBg}">
          <i class="${service.icon}"></i>
        </div>
        <h3 class="service-title">${service.title}</h3>
      </div>

      <div class="service-content">
        <div class="service-section">
          <h4>Problema del cliente:</h4>
          <p class="service-problem">${service.problem}</p>
        </div>

        <div class="service-section">
          <h4>Solución que ofrezco:</h4>
          <p class="service-solution">${service.solution}</p>
        </div>

        <div class="service-section">
          <h4>Beneficio / Resultado:</h4>
          <p class="service-benefit">${service.benefit}</p>
        </div>
      </div>
    `;

    carousel.appendChild(slide);
  });
}

function createIndicators() {
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

  // Ocultar todas las diapositivas
  slides.forEach(slide => {
    slide.classList.remove('active');
  });

  // Eliminar la clase activa de todos los indicadores
  indicatorElements.forEach(indicator => {
    indicator.classList.remove('active');
  });

  // Mostrar la diapositiva actual
  if (slides[index]) {
    slides[index].classList.add('active');
  }

  // Activar el indicador actual
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
    autoPlayInterval = setInterval(() => {
      nextSlide();
    }, 15000); // Cambiar diapositiva cada 15 segundos
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

// Pausar reproducción automática al pasar el ratón por encima
document.addEventListener('DOMContentLoaded', function() {
  const carouselContainer = document.querySelector('.carousel-container');
  if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', stopAutoPlay);
    carouselContainer.addEventListener('mouseleave', startAutoPlay);
  }
});

// Funcionalidad del formulario de contacto
function initializeContactForm() {
  // Use event delegation to handle form submission for any form with the .contact-form class
  document.body.addEventListener('submit', function(event) {
    if (event.target && event.target.classList.contains('contact-form')) {
      handleFormSubmit(event);
    }
  });

  // Use event delegation for real-time validation on inputs within any .contact-form
  document.body.addEventListener('blur', function(event) {
    if (event.target && event.target.matches('.contact-form input, .contact-form textarea')) {
      validateField(event);
    }
  }, true); // Use capture phase to ensure this runs reliably

  document.body.addEventListener('input', function(event) {
    if (event.target && event.target.matches('.contact-form input, .contact-form textarea')) {
      clearFieldError(event);
    }
  });
}

function validateField(event) {
  const field = event.target;
  const value = field.value.trim();
  const fieldName = field.name;
  let isValid = true;
  let errorMessage = '';

  // Limpiar error previo
  clearFieldError(event);

  switch (fieldName) {
    case 'name':
      if (value.length < 2) {
        isValid = false;
        errorMessage = 'El nombre debe tener al menos 2 caracteres';
      }
      break;
    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        errorMessage = 'Por favor ingresa un email válido';
      }
      break;
    case 'message':
      if (value.length < 10) {
        isValid = false;
        errorMessage = 'El mensaje debe tener al menos 10 caracteres';
      }
      break;
  }

  if (!isValid) {
    showFieldError(fieldName, errorMessage);
  }

  return isValid;
}

function clearFieldError(event) {
  const fieldName = event.target.name;
  const errorElement = document.getElementById(`${fieldName}-error`);
  if (errorElement) {
    errorElement.textContent = '';
  }
}

function showFieldError(fieldName, message) {
  const errorElement = document.getElementById(`${fieldName}-error`);
  if (errorElement) {
    errorElement.textContent = message;
  }
}

function validateForm(formData) {
  let isValid = true;
  const errors = {};

  // Validar nombre
  if (formData.name.trim().length < 2) {
    errors.name = 'El nombre debe tener al menos 2 caracteres';
    isValid = false;
  }

  // Validar email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email.trim())) {
    errors.email = 'Por favor ingresa un email válido';
    isValid = false;
  }

  // Validar mensaje
  if (formData.message.trim().length < 10) {
    errors.message = 'El mensaje debe tener al menos 10 caracteres';
    isValid = false;
  }

  // Mostrar errores
  Object.keys(errors).forEach(field => {
    showFieldError(field, errors[field]);
  });

  return isValid;
}

async function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const submitBtn = document.getElementById('submit-btn');
  const submitText = document.getElementById('submit-text');
  const submitLoader = document.getElementById('submit-loader');

  console.log('Diagnóstico de elementos del formulario:');
  console.log('submitBtn:', submitBtn);
  console.log('submitText:', submitText);
  console.log('submitLoader:', submitLoader);

  // Obtener datos del formulario
  const formData = {
    nombre: form.name.value,
    mail: form.email.value,
    mensaje: form.message.value
  };

  // Validar formulario
  if (!validateForm({
    name: formData.nombre,
    email: formData.mail,
    message: formData.mensaje
  })) {
    return;
  }

  // Mostrar estado de carga
  submitBtn.disabled = true;
  submitText.style.display = 'none';
  submitLoader.style.display = 'flex';

  try {
    const response = await fetch('https://www.automatia.cc/api/enviar-mensaje', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      // Éxito
      showToast('¡Mensaje enviado!', 'Nos pondremos en contacto contigo pronto.', 'success');
      form.reset();
    } else {
      // Error
      showToast('Error al enviar', 'Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.', 'error');
    }
  } catch (error) {
    // Error de red o API no disponible
    console.error('Error en el formulario de contacto:', error);
    showToast('Error de conexión', 'No se pudo conectar con el servidor. Inténtalo más tarde.', 'error');
  } finally {
    // Restablecer estado del botón
    submitBtn.disabled = false;
    submitText.style.display = 'inline';
    submitLoader.style.display = 'none';
  }
}

// Funcionalidad de notificación toast
function showToast(title, description, type = 'success') {
  const toast = document.getElementById('toast');
  const toastIcon = document.getElementById('toast-icon');
  const toastTitle = document.getElementById('toast-title');
  const toastDescription = document.getElementById('toast-description');

  // Establecer contenido
  toastTitle.textContent = title;
  toastDescription.textContent = description;

  // Establecer icono basado en el tipo
  toastIcon.className = type === 'success' ? 'toast-icon fas fa-check-circle' : 'toast-icon fas fa-exclamation-circle';

  // Establecer clase de tipo de toast
  toast.className = `toast ${type}`;

  // Mostrar toast
  toast.classList.add('show');

  // Ocultar toast después de 5 segundos
  setTimeout(() => {
    hideToast();
  }, 5000);
}

function hideToast() {
  const toast = document.getElementById('toast');
  if (toast) {
    toast.classList.remove('show');
  }
}

// Cerrar toast al hacer clic
document.addEventListener('click', function(e) {
  if (e.target.closest('.toast')) {
    hideToast();
  }
});



// Funcionalidad del Modal de Sectores
let sectorModal, modalBody, closeModalBtn;

function initializeModal() {
    sectorModal = document.getElementById('sector-modal');
    modalBody = document.getElementById('modal-body');
    closeModalBtn = document.querySelector('.modal-close-btn');

    if(closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    window.addEventListener('click', function(event) {
        if (event.target == sectorModal) {
            closeModal();
        }
    });

    const footerLogo = document.getElementById('footer-logo');
    if (footerLogo) {
        footerLogo.addEventListener('click', closeModal);
    }
}

function openModal() {
    sectorModal.style.display = 'block';
}

function closeModal() {
    sectorModal.style.display = 'none';
    modalBody.innerHTML = ''; // Limpiar contenido al cerrar
}

async function loadSectorContent(sectorName) {
    const modalBody = document.getElementById('modal-body');
    if (!modalBody) return;

    // 1. Mostrar modal con estado de carga
    modalBody.innerHTML = `
        <div class="modal-loading" style="text-align: center; padding: 40px;">
            <i class="fas fa-spinner fa-spin fa-3x" style="color: #4F46E5;"></i>
            <p style="margin-top: 20px; font-size: 1.1em;">Generando contenido para <strong>${sectorName}</strong>...</p>
        </div>`;
    openModal();

    // 2. Llamar a la API
    const apiUrl = `https://www.automatia.cc/api/v1/content?name=${encodeURIComponent(sectorName)}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Error ${response.status}: No se pudo obtener la información.`);
        }
        const data = await response.json();

        // 3. Procesar la respuesta JSON anidada
        if (data.length > 0 && data[0].output) {
            const content = JSON.parse(data[0].output);
            const modalHtml = buildModalHtml(content);
            modalBody.innerHTML = modalHtml;
        } else {
            throw new Error("La respuesta de la API no tiene el formato esperado.");
        }

    } catch (error) {
        console.error('Error al cargar contenido del sector:', error);
        modalBody.innerHTML = `
            <div class="modal-error" style="text-align: center; padding: 40px;">
                <i class="fas fa-exclamation-triangle fa-3x" style="color: #DC2626;"></i>
                <h3 style="margin-top: 20px; font-size: 1.5em; color: #1F2937;">Error al generar contenido</h3>
                <p style="margin-top: 10px;">${error.message}</p>
                <p style="margin-top: 5px;">Por favor, intenta con otro término o vuelve a intentarlo más tarde.</p>
            </div>`;
    }
}

function buildModalHtml(content) {
    // Construir la lista de soluciones
    const solutionsHtml = content.solutions.items.map(item => `
        <li style="margin-bottom: 1em;">
            <strong>${item.title}:</strong> ${item.description}
        </li>
    `).join('');

    // Devolver el HTML completo para el modal
    return `
        <section class="hero-sector" style="padding: 2rem 1rem; text-align: center;">
            <div class="hero-content">
                <h1 class="hero-title" style="font-size: 2.5em; margin-bottom: 0.5em;">
                    <span class="text-gradient">${content.hero.title}</span>
                </h1>
                <p class="hero-description" style="font-size: 1.2em; max-width: 600px; margin: 0 auto;">${content.hero.subtitle}</p>
            </div>
        </section>

        <section class="sectores" style="padding: 2rem 1rem;">
            <div class="container" style="max-width: 800px; margin: 0 auto;">
                <div class="section-header" style="text-align: center; margin-bottom: 2rem;">
                    <h2 class="section-title" style="font-size: 2em;">${content.solutions.heading}</h2>
                </div>
                <div class="sectores-list">
                    <div class="sector-card" style="background: #f9fafb; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        <ul style="list-style-type: none; padding-left: 0;">${solutionsHtml}</ul>
                    </div>
                </div>
            </div>
        </section>

        <section class="contact" style="background: #111827; color: white; padding: 3rem 1rem; text-align: center;">
            <div class="container" style="max-width: 800px; margin: 0 auto;">
                <div class="contact-info">
                    <h2 class="contact-title" style="font-size: 2em; margin-bottom: 0.5em;">${content.contact.title}</h2>
                    <p class="contact-description" style="font-size: 1.1em;">${content.contact.message}</p>
                </div>
            </div>
        </section>
    `;
}

if(closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
}

window.addEventListener('click', function(event) {
    if (event.target == sectorModal) {
        closeModal();
    }
});

// Intersection Observer para animaciones
document.addEventListener('DOMContentLoaded', function() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
      }
    });
  }, observerOptions);

  // Observar elementos para la animación
  const animatedElements = document.querySelectorAll('.case-study-card, .benefit-card, .contact-form-container');
  animatedElements.forEach(el => observer.observe(el));
});

// Navegación por teclado para el carrusel
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

// Manejar redimensionamiento de la ventana
window.addEventListener('resize', function() {
  // Cerrar menú móvil al redimensionar a escritorio
  if (window.innerWidth >= 768 && mobileMenuOpen) {
    toggleMobileMenu();
  }
});



// Añadir estados de carga y manejo de errores
window.addEventListener('load', function() {
  history.scrollRestoration = 'manual'; // Disable browser scroll restoration
  // Eliminar cualquier estado de carga
  document.body.classList.remove('loading');
});

// Manejar estado online/offline
window.addEventListener('online', function() {
  showToast('Conexión restaurada', 'Ya puedes enviar mensajes nuevamente.', 'success');
});

window.addEventListener('offline', function() {
  showToast('Sin conexión', 'Verifica tu conexión a internet.', 'error');
});

// Optimización de rendimiento: Carga diferida de imágenes
document.addEventListener('DOMContentLoaded', function() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
  }
});

// Añadir manejo de enfoque para accesibilidad
document.addEventListener('keydown', function(e) {
  // Manejar tecla Escape para cerrar el menú móvil
  if (e.key === 'Escape' && mobileMenuOpen) {
    toggleMobileMenu();
  }

  // Manejar tecla Tab para manejo de enfoque
  if (e.key === 'Tab') {
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
}
});

// Mensaje de consola para desarrolladores
console.log(`
===========================================================
 🤖 AutomatIA - Automatización con Inteligencia Artificial
===========================================================
Automatizamos procesos para que tu negocio sea más eficiente y productivo.
Visita nuestro sitio web para más información: www.automatia.cc

Desarrollado con IA por Elanrey.
`);



// Funcionalidad de búsqueda de sectores con IA
document.addEventListener('DOMContentLoaded', function() {
    const sectorSearchInput = document.getElementById('sector-search');
    if (!sectorSearchInput) return;

    sectorSearchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Evitar que el formulario se envíe (si lo hubiera)
            const sectorName = this.value.trim();
            if (sectorName) {
                // Llamaremos a la nueva versión de loadSectorContent que crearemos en el siguiente paso
                loadSectorContent(sectorName);
            }
        }
    });
});