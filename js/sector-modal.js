document.addEventListener("DOMContentLoaded", () => {
  const sectorInput = document.getElementById("sector-input");
  const sectorModal = document.getElementById("sector-modal");
  const modalBody = document.getElementById("modal-body");
  const closeBtn = document.querySelector(".modal-close-btn");

  if (!sectorInput || !sectorModal || !modalBody || !closeBtn) {
    console.error("Elementos del modal no encontrados.");
    return;
  }

  const closeModal = () => {
    sectorModal.style.display = "none";
    modalBody.innerHTML = ""; // Limpiar contenido al cerrar
    document.body.style.overflow = ""; // Restaurar scroll del body
  };

  const openModal = () => {
    sectorModal.style.display = "block";
    document.body.style.overflow = "hidden"; // Bloquear scroll del body
  };

  closeBtn.addEventListener("click", closeModal);

  // --- Mock Data ---
  const mockApiResponse = {
    "legal": [
      {
        "Título": "Automatiza tu práctica legal con Inteligencia Artificial",
        "Subtítulo": "¿Cansado de tareas repetitivas y falta de tiempo? La IA automatiza procesos legales, reduciendo tiempo y errores.",
        "Solución": "Descubre cómo la IA puede transformar tu práctica legal",
        "Items": [
          {
            "título": "Análisis predictivo de casos legales",
            "descripción": "La IA analiza datos históricos para prever resultados, optimizando estrategias de representación."
          },
          {
            "título": "Automatización de documentación legal",
            "descripción": "Genera y revisa contratos, resúmenes, y documentos jurídicos con precisión y rapidez."
          },
          {
            "título": "Investigación legal avanzada",
            "descripción": "Busca y analiza leyes, reglamentos, y documentos jurídicos en tiempo real, reduciendo la dependencia de recursos humanos."
          },
          {
            "título": "Análisis de contratos inteligente",
            "descripción": "Identifica cláusulas críticas, riesgos y oportunidades, mejorando la negociación y cumplimiento."
          },
          {
            "título": "Gestión de cumplimiento regulatorio",
            "descripción": "Monitorea y actualiza normativas en tiempo real, minimizando sanciones y errores."
          }
        ],
        "Contacto": "Transforma tu negocio con IA",
        "Mensaje": "Solicita una demostración gratuita de soluciones de inteligencia artificial para abogados"
      }
    ]
  };

  const renderContent = (data) => {
    const sectorData = data[0];
    // Construye únicamente el HTML del contenido que se inyectará en el modal
    modalBody.innerHTML = `
      <div id="modal-body-content" class="p-6 sm:p-8">
        <section class="hero-sector text-center mb-8">
          <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-2">${sectorData.Título}</h1>
          <p class="text-lg text-gray-600">${sectorData.Subtítulo}</p>
        </section>
        <section class="soluciones mb-8">
          <h2 class="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">${sectorData.Solución}</h2>
          <ul class="space-y-4">
            ${sectorData.Items.map(item => `
              <li class="bg-gray-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <h3 class="text-xl font-semibold text-gray-700">${item.título}</h3>
                <p class="text-gray-600">${item.descripción}</p>
              </li>
            `).join('')}
          </ul>
        </section>
        <section class="contact bg-gray-100 p-8 rounded-lg text-center">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-2">${sectorData.Contacto}</h2>
          <p class="text-lg text-gray-600">${sectorData.Mensaje}</p>
        </section>
      </div>
    `;
  };

  sectorInput.addEventListener("keydown", async (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const sectorName = sectorInput.value.trim().toLowerCase();

      if (!sectorName) {
        return;
      }

      sectorInput.blur(); // Quitar el foco del input
      openModal();
      closeBtn.style.display = 'none'; // Ocultar el botón de cierre

      modalBody.innerHTML = `
        <div class="flex items-center justify-center p-12">
          <div class="loader-container">
            <div class="loader-ring"></div>
            <div class="loader-ring"></div>
            <img src="img/Logo color.png" alt="Cargando..." class="loader-logo">
          </div>
        </div>
      `;

      // Simular una carga de 2 segundos
      setTimeout(() => {
        try {
          // Simulamos el éxito y usamos los datos de prueba
          renderContent(mockApiResponse['legal']);
          if (typeof initializeParticles === 'function') {
              initializeParticles();
          }
        } catch (error) {
          console.error("Error rendering mock data:", error);
          modalBody.innerHTML = '<p class="error-text">No se pudo cargar el contenido.</p>';
        } finally {
          closeBtn.style.display = 'block'; // Mostrar el botón de cierre
        }
      }, 2000);
    }
  });
});