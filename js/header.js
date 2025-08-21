
document.addEventListener('DOMContentLoaded', function() {
    initializeHeaderAndNav();
});

function scrollToSection(sectionId, behavior = 'smooth') {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerHeight = 80;
    const targetPosition = element.offsetTop - headerHeight;
    window.scrollTo({
      top: targetPosition,
      behavior: behavior
    });
    history.replaceState(null, '', `#${sectionId}`);
  }
}

function initializeHeaderAndNav() {
    const header = document.getElementById('header');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileMenuButton = document.getElementById('mobile-menu-toggle-btn');
    const menuIcon = mobileMenuButton ? mobileMenuButton.querySelector('i') : null;

    // 1. Efecto de scroll del encabezado
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // 2. Abrir/cerrar menú móvil
    const toggleMenu = () => {
        if (mobileNav) {
            const isActive = mobileNav.classList.toggle('active');
            if (menuIcon) {
                menuIcon.classList.toggle('fa-bars', !isActive);
                menuIcon.classList.toggle('fa-times', isActive);
            }
        }
    };

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', toggleMenu);
    }

    // 3. Manejar clics en los enlaces de navegación
    const handleLinkClick = (e) => {
        const href = e.currentTarget.getAttribute('href');

        if (!href || !href.startsWith('#')) {
            if (mobileNav && mobileNav.classList.contains('active')) {
                toggleMenu();
            }
            return;
        }

        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            if (mobileNav && mobileNav.classList.contains('active')) {
                toggleMenu();
            }
            
            const headerHeight = header ? header.offsetHeight : 0;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };

    document.querySelectorAll('.nav-link, .nav-link-mobile').forEach(link => {
        link.addEventListener('click', handleLinkClick);
    });
}
