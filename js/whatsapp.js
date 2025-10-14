// Cargar la librería QRCode dinámicamente
(function() {
    if (!window.QRCode) {
        const script = document.createElement('script');
        script.src = 'https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js';
        script.onload = function() { initWhatsappQR(); };
        document.head.appendChild(script);
    } else {
        initWhatsappQR();
    }
})();

function initWhatsappQR() {
    function setupModal() {
        // Lógica para la modal de WhatsApp
        const whatsappIcon = document.getElementById('whatsapp-link');
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
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupModal);
    } else {
        setupModal();
    }
}
