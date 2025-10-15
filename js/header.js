function initializeHeaderAndNav() {
    const header = document.getElementById('header');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileMenuButton = document.getElementById('mobile-menu-toggle-btn');

    // Define offsets for each section ID
    const scrollOffsets = {
        'que-es': 50,
        'servicios': 50,
        'beneficios': 50,
        'nosotros': 50,
        'contacto': 50
    };

    // Toggle del menú móvil
    if (mobileMenuButton && mobileNav) {
        mobileMenuButton.addEventListener('click', (e) => {
            e.preventDefault();
            const isHidden = mobileNav.classList.contains('hidden');

            if (isHidden) {
                mobileNav.classList.remove('hidden');
                mobileNav.classList.add('flex');
                mobileMenuButton.querySelector('i').classList.remove('fa-bars');
                mobileMenuButton.querySelector('i').classList.add('fa-times');
            } else {
                mobileNav.classList.add('hidden');
                mobileNav.classList.remove('flex');
                mobileMenuButton.querySelector('i').classList.add('fa-bars');
                mobileMenuButton.querySelector('i').classList.remove('fa-times');
            }
        });
    }

    // Desplazamiento suave y cierre del menú móvil
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const headerHeight = header ? header.offsetHeight : 0;
                const customOffset = scrollOffsets[targetId] || 0; // Get custom offset or default to 0
                const targetPosition = targetElement.offsetTop - headerHeight + customOffset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }

            // Cerrar menú móvil si está abierto
            if (mobileNav && mobileNav.classList.contains('flex')) {
                mobileNav.classList.remove('flex');
                mobileNav.classList.add('hidden');
                mobileMenuButton.querySelector('i').classList.add('fa-bars');
                mobileMenuButton.querySelector('i').classList.remove('fa-times');
            }
        });
    });
}
