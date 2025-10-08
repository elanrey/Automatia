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
}

function openModal() {
    if(sectorModal) sectorModal.style.display = 'block';
}

function closeModal() {
    if(sectorModal) sectorModal.style.display = 'none';
    if(modalBody) modalBody.innerHTML = ''; // Limpiar contenido al cerrar
}

async function loadSectorContent(sectorName) {
    if (!modalBody) return;

    modalBody.innerHTML = `
        <div class="modal-loading" style="text-align: center; padding: 40px;">
            <i class="fas fa-spinner fa-spin fa-3x" style="color: #4F46E5;"></i>
            <p style="margin-top: 20px; font-size: 1.1em;">Generando contenido para <strong>${sectorName}</strong>...</p>
        </div>`;
    openModal();

    const apiUrl = `https://www.automatia.cc/api/v1/content?name=${encodeURIComponent(sectorName)}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Error ${response.status}: No se pudo obtener la información.`);
        }
        const data = await response.json();

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
    const solutionsHtml = content.solutions.items.map(item => `
        <li style="margin-bottom: 1em;">
            <strong>${item.title}:</strong> ${item.description}
        </li>
    `).join('');

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