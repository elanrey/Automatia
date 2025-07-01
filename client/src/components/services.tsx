import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: 1,
    title: "1. Automatización de Tareas Repetitivas",
    icon: "fas fa-cogs",
    gradient: "from-blue-50 to-indigo-50",
    iconBg: "bg-primary-custom",
    problem: '"Mi equipo pierde horas cada día haciendo tareas manuales, como copiar y pegar datos, mover archivos o rellenar formularios. Es lento, propenso a errores y nos quita tiempo para lo importante."',
    solution: "Diseño flujos automáticos que imitan y ejecutan esas tareas repetitivas en su lugar. El sistema se encarga de realizar automáticamente lo que antes hacía su personal, desde la entrada de datos hasta la generación de informes.",
    benefit: "Ahorro masivo de tiempo para su personal, reducción drástica de errores, mayor eficiencia operativa y la libertad de enfocar sus recursos en actividades de mayor valor para su negocio."
  },
  {
    id: 2,
    title: "2. Asistentes Virtuales Inteligentes",
    icon: "fas fa-robot",
    gradient: "from-emerald-50 to-teal-50",
    iconBg: "bg-secondary-custom",
    problem: '"Mis clientes o mi propio equipo preguntan siempre lo mismo y tardamos en encontrar la respuesta en nuestros manuales, documentos o archivos. Necesitamos una forma rápida de acceder a nuestra propia información."',
    solution: "Desarrollo un asistente virtual (chatbot) que se entrena con sus documentos, manuales, reportes o cualquier archivo relevante. Este asistente puede responder preguntas, buscar información específica y brindar respuestas claras y precisas.",
    benefit: "Mejora en la atención al cliente o soporte interno, respuestas rápidas y consistentes, y una reducción significativa en la carga de trabajo de su equipo."
  },
  {
    id: 3,
    title: "3. Extracción Inteligente de Información",
    icon: "fas fa-search-plus",
    gradient: "from-purple-50 to-pink-50",
    iconBg: "bg-purple-600",
    problem: '"Necesito datos de sitios web, documentos o redes sociales para mis análisis, pero extraerlos y organizarlos es un dolor de cabeza. Además, a menudo necesito transformar esa información a un formato específico."',
    solution: "Diseño soluciones que extraen datos de sitios web o documentos, los procesan con inteligencia artificial y los convierten en contenido útil y estructurado. Por ejemplo: transformar publicaciones de redes sociales en reportes semanales.",
    benefit: "Acceso rápido a información clave para tomar decisiones, eliminación del trabajo manual de recolección de datos y la capacidad de descubrir oportunidades antes invisibles."
  },
  {
    id: 4,
    title: "4. Conexión y Sincronización de Sistemas",
    icon: "fas fa-link",
    gradient: "from-orange-50 to-red-50",
    iconBg: "bg-orange-600",
    problem: '"Tengo diferentes programas o plataformas (CRM, sistema de ventas, contabilidad, base de datos) que no se comunican entre sí. La información está en silos y nos toca pasarla a mano de un lado a otro."',
    solution: "Diseño integraciones que permiten que todos sus sistemas trabajen como uno solo, compartiendo información sin intervención humana. Los flujos automáticos aseguran que cuando algo ocurra en un sistema, se actualice automáticamente en los demás.",
    benefit: "Eliminación de la duplicidad de datos, reducción de errores, visión unificada de su operación y procesos optimizados con datos siempre actualizados."
  }
];

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = services.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 8000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-custom mb-4">
            Catálogo de Servicios en Automatización e Inteligencia Artificial
          </h2>
          <p className="text-lg text-gray-custom max-w-3xl mx-auto">
            Transformamos sus operaciones diarias con soluciones claras y tangibles que le permitirán 
            ahorrar tiempo, reducir costos y potenciar su negocio.
          </p>
        </div>

        {/* Services Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`w-full flex-shrink-0 p-8 bg-gradient-to-br ${service.gradient} rounded-xl`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 ${service.iconBg} rounded-lg flex items-center justify-center`}>
                      <i className={`${service.icon} text-white text-xl`}></i>
                    </div>
                    <h3 className="text-2xl font-bold text-primary-dark-custom">{service.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-secondary-custom mb-2">Problema que resuelve:</h4>
                      <p className="text-gray-700 leading-relaxed">{service.problem}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-secondary-custom mb-2">Cómo lo soluciono:</h4>
                      <p className="text-gray-700 leading-relaxed">{service.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-secondary-custom mb-2">Beneficio para el cliente:</h4>
                      <p className="text-gray-700 leading-relaxed">{service.benefit}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <Button
            onClick={prevSlide}
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-300 z-10"
          >
            <i className="fas fa-chevron-left text-gray-600"></i>
          </Button>
          <Button
            onClick={nextSlide}
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-300 z-10"
          >
            <i className="fas fa-chevron-right text-gray-600"></i>
          </Button>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {services.map((_, index) => (
              <Button
                key={index}
                onClick={() => goToSlide(index)}
                variant="ghost"
                size="sm"
                className={`w-3 h-3 rounded-full p-0 ${
                  index === currentSlide ? "bg-primary-custom" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
