export default function Benefits() {
  const benefits = [
    {
      iconClass: "fas fa-clock",
      title: "Ahorro de Tiempo",
      description: "Hasta 70% menos tiempo en tareas repetitivas y administrativas.",
      gradient: "from-primary-custom to-primary-dark-custom"
    },
    {
      iconClass: "fas fa-shield-alt",
      title: "Menos Errores", 
      description: "Reducción del 95% en errores humanos y mayor precisión en procesos.",
      gradient: "from-secondary-custom to-emerald-600"
    },
    {
      iconClass: "fas fa-chart-bar",
      title: "Mayor Productividad",
      description: "Su equipo se enfoca en tareas de alto valor agregado.",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      iconClass: "fas fa-dollar-sign",
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
                <i className={`${benefit.iconClass} text-white text-2xl`}></i>
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
