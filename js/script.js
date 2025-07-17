// Datos de los usuarios para la animación de la tabla
const allUsers = [
    { name: "Ana García", email: "ana.garcia@email.com" },
    { name: "Luis Pérez", email: "luis.perez@email.com" },
    { name: "Sofía Rodríguez", email: "sofia.rodriguez@email.com" },
    { name: "Carlos Sánchez", email: "carlos.sanchez@email.com" },
    { name: "María López", email: "maria.lopez@email.com" },
    { name: "Javier Fernández", email: "javier.fernandez@email.com" },
    { name: "Laura González", email: "laura.gonzalez@email.com" },
    { name: "Diego Martínez", email: "diego.martinez@email.com" },
    { name: "Elena Ruiz", email: "elena.ruiz@email.com" },
    { name: "Pablo Díaz", email: "pablo.diaz@email.com" },
    { name: "Carmen Hernández", email: "carmen.hernandez@email.com" },
    { name: "Jorge Moreno", email: "jorge.moreno@email.com" },
    { name: "Isabel Jiménez", email: "isabel.jimenez@email.com" },
    { name: "Ricardo Alonso", email: "ricardo.alons@email.com" },
    { name: "Natalia Gutiérrez", email: "natalia.gutierrez@email.com" },
    { name: "Fernando Romero", email: "fernando.romero@email.com" },
    { name: "Andrea Navarro", email: "andrea.navarro@email.com" },
    { name: "Miguel Torres", email: "miguel.torres@email.com" },
    { name: "Patricia Gil", email: "patricia.gil@email.com" },
    { name: "Sergio Vázquez", email: "sergio.vazquez@email.com" }
];

const allSubjects = [
    "Consulta", "Soporte", "Pedido", "Factura", "Reclamo",
    "Oferta", "Actualización", "Confirmación", "Bienvenida", "Recordatorio",
    "Urgente", "Información", "Seguimiento", "Cotización", "Novedad"
];

const allSectors = [
    { name: "Agricultura", url: "sectores/agricultura.html" },
    { name: "Agencia de Marketing", url: "sectores/marketing.html" },
    { name: "Centros de Contacto", url: "sectores/centros-contacto.html" },
    { name: "Clínica o Consultorio Médico", url: "sectores/medicos.html" },
    { name: "Comercio Minorista (Retail)", url: "sectores/comercio-minorista.html" },
    { name: "Construcción", url: "sectores/construccion.html" },
    { name: "Consultoría", url: "sectores/consultoria.html" },
    { name: "Despacho Contable", url: "sectores/contadores.html" },
    { name: "Entretenimiento", url: "sectores/entretenimiento.html" },
    { name: "Escuela o Academia", url: "sectores/escuelas.html" },
    { name: "Finanzas y Banca", url: "sectores/finanzas.html" },
    { name: "Gimnasio", url: "sectores/gimnasios.html" },
    { name: "Hoteles y Turismo", url: "sectores/hoteles.html" },
    { name: "Inmobiliaria", url: "sectores/inmobiliarias.html" },
    { name: "Jurídico/Notarías", url: "sectores/juridico.html" },
    { name: "Logística y Transporte", url: "sectores/logistica.html" },
    { name: "Manufactura", url: "sectores/manufactura.html" },
    { name: "Recursos Humanos", url: "sectores/recursos-humanos.html" },
    { name: "Restaurante o Cafetería", url: "sectores/restaurantes.html" },
    { name: "Seguridad Privada", url: "sectores/seguridad-privada.html" },
    { name: "Seguros", url: "sectores/seguros.html" },
    { name: "Taller Mecánico", url: "sectores/talleres.html" },
    { name: "Telecomunicaciones", url: "sectores/telecomunicaciones.html" },
    { name: "Tienda en Línea (eCommerce)", url: "sectores/ecommerce.html" }
];

// Datos de los servicios
const services = [
  {
    id: 1,
    title: "1. Automatización de Tareas Repetitivas",
    icon: "fas fa-cogs",
    gradient: "from-blue-50 to-indigo-50",
    iconBg: "bg-gradient-blue",
    problem: '"Mi equipo pierde horas cada día haciendo tareas manuales, como copiar y pegar datos, mover archivos o rellenar formularios. Es lento, propenso a errores y nos quita tiempo para lo importante."',
    solution: "Diseño flujos automáticos que imitan y ejecutan esas tareas repetitivas en su lugar. El sistema se encarga de realizar automáticamente lo que antes hacía su personal, desde la entrada de datos hasta la generación de informes.",
    benefit: "Ahorro masivo de tiempo para su personal, reducción drástica de errores, mayor eficiencia operativa y la libertad de enfocar sus recursos en actividades de mayor valor para su negocio."
  },
  {
    id: 2,
    title: "2. Asistentes Virtuales Inteligentes",
    icon: "fas fa-robot",
    gradient: "from-emerald-50 to-teal-50",
    iconBg: "bg-gradient-green",
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
  initializeParticles(); // <-- Llamada a la nueva función de partículas
  initializeFaqAccordion();
  startAutoPlay();
  handleInitialHashScroll(); // Nueva llamada para manejar el scroll inicial
});

// Función para manejar el scroll a la sección inicial si hay un hash en la URL
function handleInitialHashScroll() {
  if (window.location.hash) {
    const sectionId = window.location.hash.substring(1);
    // Pequeño retraso para asegurar que todos los elementos estén renderizados
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 100);
  }
}

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

  // Inicializar animación de Excel a Email
  initializeExcelToEmailAnimation();
}

function createDynamicParticles() {
  const container = document.querySelector('.hero-particles');
  if (!container) return;
  container.innerHTML = '';
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

function initializeExcelToEmailAnimation() {
    console.log('Initializing Excel to Email Animation...');
    const container = document.querySelector('.automation-container');
    if (!container) return; // Asegurarse de que el contenedor de la animación exista

    const excelSheetBody = document.querySelector('.excel-sheet tbody');
    const envelopes = Array.from(document.querySelectorAll('.envelope'));
    const animationLayer = document.getElementById('animation-layer');
    let clones = [];

    // Función para seleccionar 5 usuarios aleatorios
    function getRandomUsers(count) {
        const shuffled = allUsers.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    // Función para actualizar la tabla con nuevos datos
    function updateTable(users) {
        excelSheetBody.innerHTML = ''; // Limpiar tabla existente
        const selectedSubjects = allSubjects.sort(() => 0.5 - Math.random()).slice(0, users.length); // Seleccionar 5 asuntos aleatorios

        users.forEach((user, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${user.email}</td><td>${user.name}</td><td>${selectedSubjects[index]}</td>`; // Asignar asunto aleatorio
            excelSheetBody.appendChild(row);
        });
    }

    // New function to animate typing row by row
    async function animateRowsTyping() {
        for (let i = 0; i < clones.length; i++) {
            const clone = clones[i];
            const cells = Array.from(clone.children);
            for (let j = 0; j < cells.length; j++) {
                const cell = cells[j];
                await new Promise(resolve => {
                    typeText(cell, cell.dataset.fullText, 20, resolve); // Pass resolve to typeText
                });
            }
            await new Promise(resolve => setTimeout(resolve, 100)); // Short delay between rows
        }
    }

    function prepareClones() {
        // Limpiar clones anteriores
        while (animationLayer.firstChild) {
            animationLayer.removeChild(animationLayer.firstChild);
        }
        clones = [];

        const containerRect = container.getBoundingClientRect();
        const tableRows = Array.from(document.querySelectorAll('.excel-sheet tbody tr'));

        tableRows.forEach(row => {
            const rowRect = row.getBoundingClientRect();
            const clone = document.createElement('div');
            clone.classList.add('data-row-clone');
            
            Array.from(row.children).forEach(cell => {
                const cellClone = document.createElement('div');
                cellClone.dataset.fullText = cell.textContent;
                cellClone.textContent = ''; // Start with empty text
                cellClone.style.width = `${cell.getBoundingClientRect().width}px`;
                clone.appendChild(cellClone);
            });

            clone.style.left = `${rowRect.left - containerRect.left}px`;
            clone.style.top = `${rowRect.top - containerRect.top}px`;
            
            animationLayer.appendChild(clone);
            clones.push(clone);
        });
    }

    async function startAnimation() {
        // Seleccionar y actualizar la tabla con nuevos datos
        const selectedUsers = getRandomUsers(5);
        updateTable(selectedUsers);

        // Preparar los clones para la nueva tabla
        prepareClones();

        // The table no longer fades out.
        const excelSheet = document.querySelector('.excel-sheet');

        // Wait a bit before starting the clone animation
        await new Promise(resolve => setTimeout(resolve, 100));

        // Animate typing row by row
        await animateRowsTyping();

        // Make envelopes visible after typing is done
        envelopes.forEach(e => e.classList.add('visible'));

        // Animate clones to envelopes
        await animateClonesToEnvelopes();

        // Launch envelopes
        await new Promise(resolve => setTimeout(resolve, 300));
        launchEnvelopes();

        // Wait for envelopes to launch and then reset and restart animation
        await new Promise(resolve => setTimeout(resolve, 2000)); // Tiempo de visibilidad de la tabla ajustado
        resetExcelToEmailAnimation();
        await new Promise(resolve => setTimeout(resolve, 750)); // Adjusted delay to ensure excel sheet is visible
        setTimeout(startAnimation, 250); // Adjusted delay before restarting
    }

    function animateClonesToEnvelopes() {
        const containerRect = container.getBoundingClientRect();
        const promises = clones.map((clone, index) => {
            return new Promise(resolve => {
                const targetEnvelope = envelopes[index];
                const targetRect = targetEnvelope.getBoundingClientRect();
                const cloneRect = clone.getBoundingClientRect();

                // Stagger the start of each animation
                setTimeout(() => {
                    // Force reflow to ensure initial state is rendered
                    clone.offsetHeight; 

                    const targetX = targetRect.left - containerRect.left + (targetRect.width / 2) - (cloneRect.width / 2);
                    const targetY = targetRect.top - containerRect.top + (targetRect.height / 2) - (cloneRect.height / 2);

                    // Apply transform immediately
                    clone.style.transform = `translate(${targetX - clone.offsetLeft}px, ${targetY - clone.offsetTop}px) scale(0.2)`;

                    clone.addEventListener('transitionend', (event) => {
                        // Ensure we only listen for the transform transition end
                        if (event.propertyName === 'transform') {
                            clone.style.opacity = 0; // Start fading out the clone
                            targetEnvelope.classList.add('open'); // Open the envelope

                            // After a short delay, close the envelope and remove the clone
                            setTimeout(() => {
                                targetEnvelope.classList.remove('open'); // Close the envelope
                                // After envelope closes, remove the clone and resolve
                                setTimeout(() => {
                                    clone.remove();
                                    resolve();
                                }, 100); // Allow envelope to close
                            }, 400); // Allow clone to fade and envelope to be open briefly
                        }
                    }, { once: true });
                }, index * 150);
            });
        });
        return Promise.all(promises);
    }

    function launchEnvelopes() {
        envelopes.forEach(envelope => {
            envelope.classList.add('launched');
            const angle = (Math.random() - 0.5) * 2 * Math.PI;
            const distance = Math.max(window.innerWidth, window.innerHeight);
            const translateX = Math.cos(angle) * distance;
            const translateY = Math.sin(angle) * distance;
            envelope.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${Math.random() * 720 - 360}deg)`;
            envelope.style.opacity = 0;
        });
    }

    function resetExcelToEmailAnimation() {
        const excelSheet = document.querySelector('.excel-sheet');
        const envelopes = Array.from(document.querySelectorAll('.envelope'));
        const animationLayer = document.getElementById('animation-layer');

        excelSheet.classList.remove('fade-out');

        envelopes.forEach(e => {
            e.classList.remove('visible', 'open', 'launched');
            e.style.transform = ''; // Reset transform
            e.style.opacity = ''; // Reset opacity
        });

        // Remove all clones from the animation layer
        while (animationLayer.firstChild) {
            animationLayer.removeChild(animationLayer.firstChild);
        }
        clones.length = 0; // Clear the clones array
    }

    // Iniciar la animación
    setTimeout(startAnimation, 1500);
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

function redirectToSector(url) {
    if (url) {
        window.location.href = url;
    } else {
        alert('Por favor, elige un sector de la lista.');
    }
}

// Funcionalidad de búsqueda de sectores
document.addEventListener('DOMContentLoaded', function() {
    const sectorSearchInput = document.getElementById('sector-search');
    const searchResultsDiv = document.getElementById('search-results');

    if (!sectorSearchInput || !searchResultsDiv) return;

    sectorSearchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        if (query.length === 0) {
            displayResults(allSectors, query); // Mostrar todos los sectores si la búsqueda está vacía
        } else {
            const filteredSectors = allSectors.filter(sector => 
                sector.name.toLowerCase().includes(query)
            );
            displayResults(filteredSectors, query);
        }
    });

    sectorSearchInput.addEventListener('focus', function() {
        displayResults(allSectors, ""); // Mostrar todos los sectores al enfocar
    });

    // Ocultar resultados al hacer clic fuera
    document.addEventListener('click', function(event) {
        if (!sectorSearchInput.contains(event.target) && !searchResultsDiv.contains(event.target)) {
            searchResultsDiv.innerHTML = '';
            searchResultsDiv.style.display = 'none';
        }
    });

    function displayResults(results, query) {
        searchResultsDiv.innerHTML = '';
        if (results.length === 0 && query.length > 0) { // Solo ocultar si no hay resultados Y hay una búsqueda activa
            searchResultsDiv.style.display = 'none';
            return;
        }

        results.forEach(sector => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('search-result-item');
            resultItem.textContent = sector.name;
            resultItem.addEventListener('click', function() {
                sectorSearchInput.value = sector.name;
                redirectToSector(sector.url);
                searchResultsDiv.innerHTML = '';
                searchResultsDiv.style.display = 'none';
            });
            searchResultsDiv.appendChild(resultItem);
        });
        searchResultsDiv.style.display = 'block';
    }
});

