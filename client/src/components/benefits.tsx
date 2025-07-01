const ClockIcon = () => (
  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
  </svg>
);

const DollarIcon = () => (
  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
  </svg>
);

export default function Benefits() {
  const benefits = [
    {
      icon: ClockIcon,
      title: "Ahorro de Tiempo",
      description: "Hasta 70% menos tiempo en tareas repetitivas y administrativas.",
      gradient: "from-primary-custom to-primary-dark-custom"
    },
    {
      icon: ShieldIcon,
      title: "Menos Errores",
      description: "Reducción del 95% en errores humanos y mayor precisión en procesos.",
      gradient: "from-secondary-custom to-emerald-600"
    },
    {
      icon: ChartIcon,
      title: "Mayor Productividad",
      description: "Su equipo se enfoca en tareas de alto valor agregado.",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: DollarIcon,
      title: "Reducción de Costos",
      description: "ROI positivo en los primeros 6 meses de implementación.",
      gradient: "from-orange-600 to-red-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-custom mb-4">
            ¿Por qué elegir nuestras soluciones?
          </h2>
          <p className="text-lg text-gray-custom max-w-3xl mx-auto">
            Beneficios tangibles que transformarán la manera en que su empresa opera y compite en el mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon />
              </div>
              <h3 className="text-xl font-semibold text-dark-custom mb-2">{benefit.title}</h3>
              <p className="text-gray-custom">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
