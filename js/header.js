function initializeHeaderAndNav() {
    const header = document.getElementById('header');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileMenuButton = document.getElementById('mobile-menu-toggle-btn');
    const menuIcon = mobileMenuButton ? mobileMenuButton.querySelector('i') : null;

    const toggleMenu = () => {
        if (!mobileNav || !menuIcon) return;
        const isActive = mobileNav.classList.toggle('active');
        menuIcon.classList.toggle('fa-bars', !isActive);
        menuIcon.classList.toggle('fa-times', isActive);
    };

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', toggleMenu);
    }

    const handleLinkClick = (e) => {
        const href = e.currentTarget.getAttribute('href');
        
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }

        if (mobileNav && mobileNav.classList.contains('active')) {
            toggleMenu();
        }
    };

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', handleLinkClick);
    });

    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
    }
}