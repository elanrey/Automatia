document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const sectorName = params.get("name");

  if (!sectorName) {
    displayError("No se ha especificado un sector.");
    return;
  }

  // API endpoint (using the provided placeholder)
  const apiUrl = `https://automatia.cc/api/v1/content?name=${encodeURIComponent(
    sectorName
  )}`;

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

  function updateMetadata(meta) {
    document.title = meta.title;
    document
      .getElementById("meta-description")
      .setAttribute("content", meta.description);
    document.getElementById("og-title").setAttribute("content", meta.title);
    document
      .getElementById("og-description")
      .setAttribute("content", meta.description);
  }

  function renderHero(hero) {
    heroTitle.innerHTML = hero.title
      .map((line) => {
        if (line === hero.highlight) {
          return `<span class="hero-title-highlight"><span class="text-gradient">${line}</span></span>`;
        }
        return `<span class="hero-title-line">${line}</span>`;
      })
      .join("");
    heroDescription.innerHTML = hero.description;
  }

  function renderSolutions(solutions) {
    solutionsTitle.textContent = solutions.title;
    solutionsList.innerHTML = solutions.list
      .map((item) => `<li>${item}</li>`)
      .join("");
  }

  function renderContact(contact) {
    contactTitle.textContent = contact.title;
    contactDescription.textContent = contact.description;
  }

  // --- Fetch Data ---
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error ${response.status}: No se pudo cargar el contenido.`);
      }
      return response.json();
    })
    .then((data) => {
      // Assuming a JSON structure like:
      // { meta: {..}, hero: {..}, solutions: {..}, contact: {..} }
      updateMetadata(data.meta);
      renderHero(data.hero);
      renderSolutions(data.solutions);
      renderContact(data.contact);
    })
    .catch((error) => {
      console.error("Error fetching sector data:", error);
      displayError(error.message);
    });
});
