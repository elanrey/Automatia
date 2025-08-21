
document.addEventListener('DOMContentLoaded', function() {
    initializeModal();
});

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
    if(sectorModal) sectorModal.style.display = 'block';
}

function closeModal() {
    if(sectorModal) sectorModal.style.display = 'none';
    if(modalBody) modalBody.innerHTML = '';
}

async function loadSectorContent(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const bodyContent = doc.body.innerHTML;

        const sanitizedContent = bodyContent.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");

        if (sanitizedContent.trim()) {
            modalBody.innerHTML = sanitizedContent;
            setTimeout(() => {
                modalBody.scrollTop = 0;
            }, 0);
        } else {
            modalBody.innerHTML = '<p>No se pudo encontrar el contenido del sector.</p>';
        }
    } catch (error) {
        console.error('Error al cargar el contenido del sector:', error);
        modalBody.innerHTML = '<p>Error al cargar el contenido. Por favor, inténtalo de nuevo más tarde.</p>';
    }
    openModal();
}

// Make loadSectorContent globally available
window.loadSectorContent = loadSectorContent;
