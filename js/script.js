document.addEventListener('DOMContentLoaded', function() {
    // Llama a las funciones de inicialización de cada módulo.
    // El orden puede ser importante si un módulo depende de otro.

    // Datos globales (si son necesarios para otros scripts)
    // const services = [ ... ];

    if (typeof initializeHeaderAndNav === 'function') {
        initializeHeaderAndNav();
    }
    if (typeof initializeCarousel === 'function') {
        initializeCarousel();
    }
    if (typeof initializeFaqAccordion === 'function') {
        initializeFaqAccordion();
    }
    if (typeof initializeModal === 'function') {
        initializeModal();
    }
    if (typeof initializeParticles === 'function') {
        initializeParticles();
    }
    if (typeof initializeContactForm === 'function') {
        initializeContactForm();
    }
    if (typeof initializeToast === 'function') {
        initializeToast();
    }
    if (typeof initializeSectorSearch === 'function') {
        initializeSectorSearch();
    }
    if (typeof initializeChat === 'function') {
        initializeChat();
    }

    // Lógica para la modal de WhatsApp
    const whatsappIcon = document.querySelector('a[href="tel:+525519356818"]');
    const whatsappModal = document.getElementById('whatsapp-modal');
    const whatsappModalClose = document.getElementById('whatsapp-modal-close');
    const qrcodeContainer = document.getElementById('qrcode');

    if (whatsappIcon && whatsappModal && whatsappModalClose && qrcodeContainer) {
        whatsappIcon.addEventListener('click', function(e) {
            e.preventDefault();
            whatsappModal.classList.remove('hidden');
            whatsappModal.classList.add('flex');

            // Generar el QR
            qrcodeContainer.innerHTML = ''; // Limpiar por si ya existía
            new QRCode(qrcodeContainer, {
                text: "https://wa.me/525519356818",
                width: 256,
                height: 256,
                colorDark : "#000000",
                colorLight : "#ffffff",
                correctLevel : QRCode.CorrectLevel.H
            });
        });

        whatsappModalClose.addEventListener('click', function() {
            whatsappModal.classList.add('hidden');
            whatsappModal.classList.remove('flex');
        });

        // Cerrar modal al hacer clic fuera
        whatsappModal.addEventListener('click', function(e) {
            if (e.target === whatsappModal) {
                whatsappModal.classList.add('hidden');
                whatsappModal.classList.remove('flex');
            }
        });
    }
});
