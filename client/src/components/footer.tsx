export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const socialLinks = [
    { icon: "fab fa-facebook-f", href: "#" },
    { icon: "fab fa-twitter", href: "#" },
    { icon: "fab fa-linkedin-in", href: "#" },
    { icon: "fab fa-instagram", href: "#" },
  ];

  const quickLinks = [
    { label: "Servicios", onClick: () => scrollToSection("servicios") },
    { label: "Casos de Éxito", onClick: () => scrollToSection("casos-exito") },
    { label: "Contacto", onClick: () => scrollToSection("contacto") },
  ];

  const serviceLinks = [
    { label: "Automatización de Tareas", href: "#" },
    { label: "Asistentes Virtuales", href: "#" },
    { label: "Extracción de Datos", href: "#" },
    { label: "Integración de Sistemas", href: "#" },
  ];

  return (
    <footer className="bg-dark-custom border-t border-gray-700 py-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-secondary-custom rounded-lg flex items-center justify-center">
                <i className="fas fa-robot text-white text-lg"></i>
              </div>
              <span className="text-xl font-bold">
                Automat<span className="italic">IA</span>
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transformamos la forma en que trabajas con soluciones de automatización y procesos 
              potenciados por inteligencia artificial.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary-custom transition-colors duration-300"
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.onClick}
                    className="text-gray-300 hover:text-secondary-custom transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-secondary-custom transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 AutomatIA. Todos los derechos reservados. | Diseñado para transformar tu negocio con IA.
          </p>
        </div>
      </div>
    </footer>
  );
}
