document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const sectorName = params.get("name");

  // --- DOM Elements ---
  const heroTitle = document.getElementById("hero-title");
  const heroDescription = document.getElementById("hero-description");
  const solutionsTitle = document.getElementById("solutions-title");
  const solutionsList = document.getElementById("solutions-list");
  const contactTitle = document.getElementById("contact-title");
  const contactDescription = document.getElementById("contact-description");

  // --- Functions ---
  function displayError(message) {
    heroTitle.innerHTML = `<span class="hero-title-line text-gradient">${message}</span>`;
    heroDescription.textContent =
      "Por favor, verifica la URL o intenta de nuevo.";
  }

  function updateUI(data) {
    const sectorData = data[0];

    // Hero Section
    heroTitle.innerHTML = `<span class="hero-title-line">${sectorData.Título}</span>`;
    heroDescription.textContent = sectorData.Subtítulo;

    // Solutions Section
    solutionsTitle.textContent = sectorData.Solución;
    solutionsList.innerHTML = sectorData.Items.map(
      (item) => `
      <li class="solution-item">
        <h3 class="solution-item-title">${item.título}</h3>
        <p class="solution-item-description">${item.descripción}</p>
      </li>
    `
    ).join("");

    // Contact Section
    contactTitle.textContent = sectorData.Contacto;
    contactDescription.textContent = sectorData.Mensaje;
  }

  if (!sectorName) {
    displayError("No se ha especificado un sector en la URL.");
    return;
  }

  // API endpoint for the POST request
  const apiUrl = `https://automatia.cc/api/v1/content`;

  // --- Mock Data ---
  const mockApiResponse = [
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
  ];

  // --- Fetch Data using POST (with mock response for testing) ---
  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: sectorName }),
  })
    .then((response) => {
      // For testing, we ignore the actual response and use the mock data.
      // When you want to use the real API, replace 'mockApiResponse' with 'response.json()'
      // and remove the 'updateUI(mockApiResponse);' line below.
      if (!response.ok) {
        // Even in testing, we can check if the request itself would have failed.
        console.warn(`API call would have failed with status: ${response.status}`);
      }
      return mockApiResponse; // Directly return the mock data.
    })
    .then((data) => {
      updateUI(data);
    })
    .catch((error) => {
      // If the fetch itself fails (e.g., network error), we still want to see it.
      console.error("Error during fetch:", error);
      // Fallback to mock data for UI testing even if the network fails.
      console.log("Displaying page with mock data due to fetch error.");
      updateUI(mockApiResponse);
    });
});