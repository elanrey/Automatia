export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Eficiencia en la Gestión de Nuevos Clientes",
      icon: "fas fa-chart-line",
      gradient: "from-primary-custom to-primary-dark-custom",
      bgColor: "bg-emerald-50",
      problem: "Una empresa de servicios financieros dedicaba un equipo completo a procesar manualmente las solicitudes de nuevos clientes. Esto implicaba revisar documentos, ingresar datos en múltiples sistemas y validar información, generando retrasos y una alta tasa de errores.",
      solution: "Diseñé un sistema que toma automáticamente las solicitudes, extrae la información clave de los documentos y la verifica en tiempo real. Luego distribuye los datos entre los sistemas internos sin intervención humana.",
      result: "La empresa redujo el tiempo de procesamiento en un 70% y los errores humanos en un 95%.",
      impact: "El equipo se enfocara en atención personalizada y generación de valor, dejando atrás tareas mecánicas."
    },
    {
      title: "Soporte al Cliente 24/7 con IA",
      icon: "fas fa-headset",
      gradient: "from-secondary-custom to-emerald-600",
      bgColor: "bg-blue-50",
      problem: "Una compañía de seguros recibía cientos de llamadas diarias con preguntas repetidas sobre pólizas y coberturas. Los agentes se saturaban con estas consultas, lo que afectaba la atención de casos más importantes.",
      solution: "Desarrollé un asistente virtual inteligente en su sitio web, entrenado con la documentación interna: pólizas, preguntas frecuentes y procedimientos. El asistente comprende preguntas mal formuladas y responde de forma clara.",
      result: "El 80% de las preguntas frecuentes ahora se resuelven automáticamente. Bajaron los tiempos de espera y mejoró la satisfacción del cliente.",
      impact: "La empresa ofreciera soporte constante y de alta calidad, y su equipo se dedicara a tareas de mayor impacto."
    }
  ];

  return (
    <section id="casos-exito" className="py-20 bg-light-custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-custom mb-4">
            Casos de Éxito en Automatización e Inteligencia Artificial
          </h2>
          <p className="text-lg text-gray-custom max-w-3xl mx-auto">
            Resultados reales de empresas que han transformado sus operaciones con nuestras soluciones 
            de automatización e IA.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${study.gradient} rounded-lg flex items-center justify-center`}>
                  <i className={`${study.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-primary-dark-custom">{study.title}</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-secondary-custom mb-2">Problema del cliente:</h4>
                  <p className="text-gray-700 leading-relaxed">{study.problem}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-secondary-custom mb-2">Solución implementada:</h4>
                  <p className="text-gray-700 leading-relaxed">{study.solution}</p>
                </div>
                
                <div className={`${study.bgColor} p-4 rounded-lg`}>
                  <h4 className="text-lg font-semibold text-secondary-custom mb-2">Resultado / Beneficio obtenido:</h4>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    {study.result}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Esto permitió que:</strong> {study.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
