// Datos de los servicios
const services = [
  {
    id: 1,
    title: "1. Automatización de Tareas Repetitivas",
    icon: "fas fa-cogs",
    gradient: "from-blue-50 to-indigo-50",
    iconBg: "bg-gradient-primary",
    problem: '"Mi equipo pierde horas cada día haciendo tareas manuales, como copiar y pegar datos, mover archivos o rellenar formularios. Es lento, propenso a errores y nos quita tiempo para lo importante."',
    solution: "Diseño flujos automáticos que imitan y ejecutan esas tareas repetitivas en su lugar. El sistema se encarga de realizar automáticamente lo que antes hacía su personal, desde la entrada de datos hasta la generación de informes.",
    benefit: "Ahorro masivo de tiempo para su personal, reducción drástica de errores, mayor eficiencia operativa y la libertad de enfocar sus recursos en actividades de mayor valor para su negocio."
  },
  {
    id: 2,
    title: "2. Asistentes Virtuales Inteligentes",
    icon: "fas fa-robot",
    gradient: "from-emerald-50 to-teal-50",
    iconBg: "bg-gradient-secondary",
    problem: '"Mis clientes o mi propio equipo preguntan siempre lo mismo y tardamos en encontrar la respuesta en nuestros manuales, documentos o archivos. Necesitamos una forma rápida de acceder a nuestra propia información."',
    solution: "Desarrollo un asistente virtual (chatbot) que se entrena con sus documentos, manuales, reportes o cualquier archivo relevante. Este asistente puede responder preguntas, buscar información específica y brindar respuestas claras y precisas.",
    benefit: "Mejora en la atención al cliente o soporte interno, respuestas rápidas y consistentes, y una reducción significativa en la carga de trabajo de su equipo."
  },
  {
    id: 3,
    title: "3. Extracción Inteligente de Información",
    icon: "fas fa-search-plus",
    gradient: "from-purple-50 to-pink-50",
    iconBg: "bg-gradient-purple",
    problem: '"Necesito datos de sitios web, documentos o redes sociales para mis análisis, pero extraerlos y organizarlos es un dolor de cabeza. Además, a menudo necesito transformar esa información a un formato específico."',
    solution: "Diseño soluciones que extraen datos de sitios web o documentos, los procesan con inteligencia artificial y los convierten en contenido útil y estructurado. Por ejemplo: transformar publicaciones de redes sociales en reportes semanales.",
    benefit: "Acceso rápido a información clave para tomar decisiones, eliminación del trabajo manual de recolección de datos y la capacidad de descubrir oportunidades antes invisibles."
  },
  {
    id: 4,
    title: "4. Conexión y Sincronización de Sistemas",
    icon: "fas fa-link",
    gradient: "from-orange-50 to-red-50",
    iconBg: "bg-gradient-orange",
    problem: '"Tengo diferentes programas o plataformas (CRM, sistema de ventas, contabilidad, base de datos) que no se comunican entre sí. La información está en silos y nos toca pasarla a mano de un lado a otro."',
    solution: "Diseño integraciones que permiten que todos sus sistemas trabajen como uno solo, compartiendo información sin intervención humana. Los flujos automáticos aseguran que cuando algo ocurra en un sistema, se actualice automáticamente en los demás.",
    benefit: "Eliminación de la duplicidad de datos, reducción de errores, visión unificada de su operación y procesos optimizados con datos siempre actualizados."
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
  initializeHeader();
  initializeContactForm();
  initializeHeroAnimations();
  startAutoPlay();
});

// Funcionalidad del encabezado
function initializeHeader() {
  const header = document.getElementById('header');

  // Manejar efecto de scroll
  window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Funcionalidad del menú móvil
function toggleMobileMenu() {
  const mobileNav = document.getElementById('mobile-nav');
  const menuBtn = document.querySelector('.mobile-menu-btn i');

  mobileMenuOpen = !mobileMenuOpen;

  if (mobileMenuOpen) {
    mobileNav.classList.add('active');
    menuBtn.classList.remove('fa-bars');
    menuBtn.classList.add('fa-times');
  } else {
    mobileNav.classList.remove('active');
    menuBtn.classList.remove('fa-times');
    menuBtn.classList.add('fa-bars');
  }
}

// Cerrar menú móvil al hacer clic en los enlaces de navegación
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('nav-link-mobile')) {
    toggleMobileMenu();
  }
});

// Animaciones del héroe
function initializeHeroAnimations() {
  // Animar estadísticas del héroe con efecto de conteo
  const heroStats = document.querySelectorAll('.hero-stat-number');
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -50px 0px'
  };

  const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        statsObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  heroStats.forEach(stat => statsObserver.observe(stat));

  // Animar barras del gráfico del héroe
  const chartBars = document.querySelectorAll('.hero-chart-bar');
  const chartObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        chartObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  chartBars.forEach(bar => {
    bar.style.animationPlayState = 'paused';
    chartObserver.observe(bar);
  });

  // Añadir efecto de escritura al título del héroe
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    setTimeout(() => {
      heroTitle.classList.add('animate-fade-in');
    }, 500);
  }

  // Crear partículas dinámicas
  createDynamicParticles();
}

function createDynamicParticles() {
  const heroParticles = document.querySelector('.hero-particles');
  if (!heroParticles) return;

  // Crear una sola capa con más partículas para un efecto de velocidad warp
  const particleLayer = document.createElement('div');
  particleLayer.className = 'particle-layer-main';
  particleLayer.style.cssText = `
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  `;

  // Crear muchas más partículas para un efecto warp denso
  for (let i = 0; i < 1000; i++) {
    const particle = document.createElement('div');
    particle.className = 'dynamic-particle';

    // Calcular ángulo y distancia aleatorios para movimiento radial
    const angle = Math.random() * Math.PI * 2; // 0 a 2π radianes
    const distance = Math.random() * 1000 + 300; // Distancia a recorrer
    const startDistance = Math.random() * 30 + 5; // Distancia inicial desde el centro

    // Calcular vectores de movimiento
    const deltaX = Math.cos(angle) * distance;
    const deltaY = Math.sin(angle) * distance;
    const startX = Math.cos(angle) * startDistance;
    const startY = Math.sin(angle) * startDistance;

    const size = Math.random() * 1.5 + 1.5; // 0.5px a 2px - más pequeño para un efecto más sutil
    const opacity = Math.random() * 0.25 + 0.3; // 0.1 a 0.3 - más sutil
    const duration = Math.random() * 4 + 3; // 3s a 7s - duración más larga para un movimiento más suave
    const delay = Math.random() * duration;

    particle.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: radial-gradient(circle, rgba(255,255,255,${opacity}) 0%, rgba(255,255,255,${opacity * 0.5}) 40%, transparent 100%);
      border-radius: 50%;
      left: calc(50% + ${startX}px);
      top: calc(50% + ${startY}px);
      animation: particle-warp-smooth ${duration}s linear infinite;
      animation-delay: -${delay}s;
      --end-x: ${deltaX}px;
      --end-y: ${deltaY}px;
      transform-origin: center;
    `;

    particleLayer.appendChild(particle);
  }

  heroParticles.appendChild(particleLayer);

  // Añadir animación CSS para un efecto suave de velocidad warp
  const style = document.createElement('style');
  style.textContent = `
    @keyframes particle-warp-smooth {
      0% {
        transform: translate(0px, 0px) scale(0.2);
        opacity: 0;
      }
      5% {
        opacity: 0.3;
      }
      15% {
        transform: translate(calc(var(--end-x) * 0.05), calc(var(--end-y) * 0.05)) scale(0.4);
        opacity: 0.6;
      }
      25% {
        transform: translate(calc(var(--end-x) * 0.15), calc(var(--end-y) * 0.15)) scale(0.6);
        opacity: 0.8;
      }
      35% {
        transform: translate(calc(var(--end-x) * 0.25), calc(var(--end-y) * 0.25)) scale(0.8);
        opacity: 1;
      }
      45% {
        transform: translate(calc(var(--end-x) * 0.35), calc(var(--end-y) * 0.35)) scale(1);
        opacity: 1;
      }
      55% {
        transform: translate(calc(var(--end-x) * 0.5), calc(var(--end-y) * 0.5)) scale(1.2);
        opacity: 1;
      }
      65% {
        transform: translate(calc(var(--end-x) * 0.65), calc(var(--end-y) * 0.65)) scale(1.4);
        opacity: 1;
      }
      75% {
        transform: translate(calc(var(--end-x) * 0.8), calc(var(--end-y) * 0.8)) scale(1.6);
        opacity: 1;
      }
      85% {
        transform: translate(calc(var(--end-x) * 0.9), calc(var(--end-y) * 0.9)) scale(1.8);
        opacity: 0.4;
      }
      95% {
        transform: translate(calc(var(--end-x) * 0.98), calc(var(--end-y) * 0.98)) scale(2);
        opacity: 0.1;
      }
      100% {
        transform: translate(var(--end-x), var(--end-y)) scale(2.2);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}

function animateCounter(element) {
  const target = element.textContent;
  const isPercentage = target.includes('%');
  const targetNumber = parseFloat(target);
  let current = 0;
  const increment = targetNumber / 50; // 50 steps
  const timer = setInterval(() => {
    current += increment;
    if (current >= targetNumber) {
      current = targetNumber;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current) + (isPercentage ? '%' : '');
  }, 40);
}

// Función para scroll suave
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerHeight = 80;
    const targetPosition = element.offsetTop - headerHeight;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
}

// Funcionalidad del carrusel
function initializeCarousel() {
  carousel = document.getElementById('services-carousel');
  indicators = document.getElementById('carousel-indicators');

  if (!carousel || !indicators) return;

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
    }, 5000); // Cambiar diapositiva cada 5 segundos
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
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', handleFormSubmit);

  // Añadir validación en tiempo real
  const inputs = form.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('blur', validateField);
    input.addEventListener('input', clearFieldError);
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

  // Obtener datos del formulario
  const formData = {
    name: form.name.value,
    email: form.email.value,
    subject: form.subject.value,
    message: form.message.value
  };

  // Validar formulario
  if (!validateForm(formData)) {
    return;
  }

  // Mostrar estado de carga
  submitBtn.disabled = true;
  submitText.style.display = 'none';
  submitLoader.style.display = 'flex';

  try {
    // Simular llamada a la API (reemplazar con el endpoint real de la API)
    const response = await fetch('/api/contact', {
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
    // Error de red o API no disponible - mostrar mensaje de éxito de todos modos para demostración
    console.log('Contact form submitted:', formData);
    showToast('¡Mensaje enviado!', 'Nos pondremos en contacto contigo pronto.', 'success');
    form.reset();
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
  toast.classList.remove('show');
}

// Cerrar toast al hacer clic
document.addEventListener('click', function(e) {
  if (e.target.closest('.toast')) {
    hideToast();
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

// Scroll suave para enlaces de anclaje
document.addEventListener('click', function(e) {
  if (e.target.matches('[href^="#"]')) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    scrollToSection(targetId);
  }
});

// Añadir estados de carga y manejo de errores
window.addEventListener('load', function() {
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
🤖 AutomatIA - Automatización con Inteligencia Artificial
=====================================
Automatizamos procesos para que tu negocio sea más eficiente y productivo.
Visita nuestro sitio web para más información: https://automatIA.com

Características implementadas:
- Navegación suave entre secciones
- Carrusel de servicios con autoplay
- Formulario de contacto con validación
- Diseño responsive
- Animaciones y transiciones
- Notificaciones toast
- Menú móvil
- Accesibilidad mejorada

Desarrollado con amor y código limpio por Elanrey.
`);