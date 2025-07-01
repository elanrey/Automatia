import { Button } from "@/components/ui/button";

export default function Hero() {
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

  return (
    <section className="pt-24 pb-16 min-h-screen flex items-center relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-custom/10 to-secondary-custom/10"></div>
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-custom leading-tight mb-6">
              Automatización de Procesos Potenciada por{" "}
              <span className="text-primary-custom">Inteligencia Artificial</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-custom mb-8 leading-relaxed">
              ¿Tu negocio pierde tiempo en tareas manuales o tiene información valiosa sin aprovechar? 
              Transformamos esos problemas en procesos automáticos con IA. Eliminamos el trabajo repetitivo 
              y creamos asistentes inteligentes que responden con tus propios documentos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection("contacto")}
                className="bg-secondary-custom hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                size="lg"
              >
                Contáctanos
              </Button>
              <Button
                onClick={() => scrollToSection("servicios")}
                variant="outline"
                className="border-2 border-primary-custom text-primary-custom hover:bg-primary-custom hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                size="lg"
              >
                Ver Servicios
              </Button>
            </div>
          </div>
          
          <div className="relative">
            {/* Business automation dashboard mockup */}
            <div className="bg-white rounded-xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-gradient-to-r from-primary-custom to-secondary-custom rounded animate-pulse"></div>
                <div className="h-3 rounded w-3/4 bg-[#a8a8a8]"></div>
                <div className="h-3 rounded w-1/2 bg-[#a8a8a8]"></div>
                <div className="grid grid-cols-3 gap-2 mt-4">
                  <div className="h-16 bg-secondary-custom/20 rounded"></div>
                  <div className="h-16 rounded bg-[#a68932b3]"></div>
                  <div className="h-16 bg-emerald-100 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
