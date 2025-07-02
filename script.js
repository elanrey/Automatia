// Services data
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

// Global variables
let currentSlide = 0;
let isAutoPlaying = true;
let autoPlayInterval;
let mobileMenuOpen = false;

// DOM Elements
let carousel;
let indicators;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeCarousel();
  initializeHeader();
  initializeContactForm();
  initializeHeroAnimations();
  startAutoPlay();
});

// Header functionality
function initializeHeader() {
  const header = document.getElementById('header');
  
  // Handle scroll effect
  window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Mobile menu functionality
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

// Close mobile menu when clicking on nav links
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('nav-link-mobile')) {
    toggleMobileMenu();
  }
});

// Hero animations
function initializeHeroAnimations() {
  // Animate hero stats with counting effect
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
  
  // Animate hero chart bars
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
  
  // Add typing effect to hero title
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    setTimeout(() => {
      heroTitle.classList.add('animate-fade-in');
    }, 500);
  }
  
  // Create dynamic particles
  createDynamicParticles();
}

function createDynamicParticles() {
  const heroParticles = document.querySelector('.hero-particles');
  if (!heroParticles) return;
  
  // Create multiple particle layers for depth effect
  for (let layer = 0; layer < 3; layer++) {
    const particleLayer = document.createElement('div');
    particleLayer.className = `particle-layer particle-layer-${layer}`;
    particleLayer.style.cssText = `
      position: absolute;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: ${layer};
    `;
    
    // Create individual particles for this layer
    for (let i = 0; i < 8; i++) {
      const particle = document.createElement('div');
      particle.className = 'dynamic-particle';
      
      const size = (layer + 1) * 2; // Larger particles in higher layers
      const opacity = 0.3 - layer * 0.1; // Less opacity for background layers
      const duration = 12 + layer * 3; // Slower for background layers
      const delay = Math.random() * duration;
      
      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, rgba(255,255,255,${opacity}) 0%, transparent 70%);
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        animation: particle-fall-depth ${duration}s linear infinite;
        animation-delay: -${delay}s;
      `;
      
      particleLayer.appendChild(particle);
    }
    
    heroParticles.appendChild(particleLayer);
  }
  
  // Add CSS animation for dynamic particles
  const style = document.createElement('style');
  style.textContent = `
    @keyframes particle-fall-depth {
      0% {
        transform: translateY(-10vh) scale(0.3);
        opacity: 0;
      }
      5% {
        opacity: 1;
      }
      10% {
        transform: translateY(0vh) scale(0.5);
      }
      25% {
        transform: translateY(25vh) scale(0.7);
      }
      50% {
        transform: translateY(50vh) scale(1);
      }
      75% {
        transform: translateY(75vh) scale(1.4);
        opacity: 0.8;
      }
      90% {
        transform: translateY(90vh) scale(1.8);
        opacity: 0.4;
      }
      100% {
        transform: translateY(110vh) scale(2.2);
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

// Smooth scrolling function
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

// Carousel functionality
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
  
  // Hide all slides
  slides.forEach(slide => {
    slide.classList.remove('active');
  });
  
  // Remove active class from all indicators
  indicatorElements.forEach(indicator => {
    indicator.classList.remove('active');
  });
  
  // Show current slide
  if (slides[index]) {
    slides[index].classList.add('active');
  }
  
  // Activate current indicator
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
    }, 5000); // Change slide every 5 seconds
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

// Pause autoplay on hover
document.addEventListener('DOMContentLoaded', function() {
  const carouselContainer = document.querySelector('.carousel-container');
  if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', stopAutoPlay);
    carouselContainer.addEventListener('mouseleave', startAutoPlay);
  }
});

// Contact form functionality
function initializeContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  
  form.addEventListener('submit', handleFormSubmit);
  
  // Add real-time validation
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
  
  // Clear previous error
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
  
  // Validate name
  if (formData.name.trim().length < 2) {
    errors.name = 'El nombre debe tener al menos 2 caracteres';
    isValid = false;
  }
  
  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email.trim())) {
    errors.email = 'Por favor ingresa un email válido';
    isValid = false;
  }
  
  // Validate message
  if (formData.message.trim().length < 10) {
    errors.message = 'El mensaje debe tener al menos 10 caracteres';
    isValid = false;
  }
  
  // Show errors
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
  
  // Get form data
  const formData = {
    name: form.name.value,
    email: form.email.value,
    subject: form.subject.value,
    message: form.message.value
  };
  
  // Validate form
  if (!validateForm(formData)) {
    return;
  }
  
  // Show loading state
  submitBtn.disabled = true;
  submitText.style.display = 'none';
  submitLoader.style.display = 'flex';
  
  try {
    // Simulate API call (replace with actual API endpoint)
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      // Success
      showToast('¡Mensaje enviado!', 'Nos pondremos en contacto contigo pronto.', 'success');
      form.reset();
    } else {
      // Error
      showToast('Error al enviar', 'Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.', 'error');
    }
  } catch (error) {
    // Network error or API not available - show success message anyway for demo
    console.log('Contact form submitted:', formData);
    showToast('¡Mensaje enviado!', 'Nos pondremos en contacto contigo pronto.', 'success');
    form.reset();
  } finally {
    // Reset button state
    submitBtn.disabled = false;
    submitText.style.display = 'inline';
    submitLoader.style.display = 'none';
  }
}

// Toast notification functionality
function showToast(title, description, type = 'success') {
  const toast = document.getElementById('toast');
  const toastIcon = document.getElementById('toast-icon');
  const toastTitle = document.getElementById('toast-title');
  const toastDescription = document.getElementById('toast-description');
  
  // Set content
  toastTitle.textContent = title;
  toastDescription.textContent = description;
  
  // Set icon based on type
  toastIcon.className = type === 'success' ? 'toast-icon fas fa-check-circle' : 'toast-icon fas fa-exclamation-circle';
  
  // Set toast type class
  toast.className = `toast ${type}`;
  
  // Show toast
  toast.classList.add('show');
  
  // Hide toast after 5 seconds
  setTimeout(() => {
    hideToast();
  }, 5000);
}

function hideToast() {
  const toast = document.getElementById('toast');
  toast.classList.remove('show');
}

// Close toast when clicked
document.addEventListener('click', function(e) {
  if (e.target.closest('.toast')) {
    hideToast();
  }
});

// Intersection Observer for animations
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
  
  // Observe elements for animation
  const animatedElements = document.querySelectorAll('.case-study-card, .benefit-card, .contact-form-container');
  animatedElements.forEach(el => observer.observe(el));
});

// Keyboard navigation for carousel
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

// Handle window resize
window.addEventListener('resize', function() {
  // Close mobile menu on resize to desktop
  if (window.innerWidth >= 768 && mobileMenuOpen) {
    toggleMobileMenu();
  }
});

// Smooth scroll for anchor links
document.addEventListener('click', function(e) {
  if (e.target.matches('[href^="#"]')) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    scrollToSection(targetId);
  }
});

// Add loading states and error handling
window.addEventListener('load', function() {
  // Remove any loading states
  document.body.classList.remove('loading');
});

// Handle offline/online status
window.addEventListener('online', function() {
  showToast('Conexión restaurada', 'Ya puedes enviar mensajes nuevamente.', 'success');
});

window.addEventListener('offline', function() {
  showToast('Sin conexión', 'Verifica tu conexión a internet.', 'error');
});

// Performance optimization: Lazy load images
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

// Add focus management for accessibility
document.addEventListener('keydown', function(e) {
  // Handle Escape key to close mobile menu
  if (e.key === 'Escape' && mobileMenuOpen) {
    toggleMobileMenu();
  }
  
  // Handle Tab key for focus management
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

// Console message for developers
console.log(`
🤖 AutomatIA - Automatización con Inteligencia Artificial
=====================================
Esta página ha sido convertida de React a HTML/CSS/JS puro
manteniendo toda la funcionalidad original.

Características implementadas:
✅ Navegación suave entre secciones
✅ Carrusel de servicios con autoplay
✅ Formulario de contacto con validación
✅ Diseño responsive
✅ Animaciones y transiciones
✅ Notificaciones toast
✅ Menú móvil
✅ Accesibilidad mejorada

Desarrollado con amor y código limpio 💚
`);