import { TrendingUp, DollarSign, Clock, Shield } from "lucide-react";

export default function Benefits() {
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
          
          {/* Beneficio 1 */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="text-white" size={48} strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-semibold text-dark-custom mb-2">Mayor Productividad</h3>
            <p className="text-gray-custom">Su equipo se enfoca en tareas de alto valor agregado.</p>
          </div>

          {/* Beneficio 2 */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <DollarSign className="text-white" size={48} strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-semibold text-dark-custom mb-2">Reducción de Costos</h3>
            <p className="text-gray-custom">ROI positivo en los primeros 6 meses de implementación.</p>
          </div>

          {/* Beneficio 3 */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Clock className="text-white" size={48} strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-semibold text-dark-custom mb-2">Ahorro de Tiempo</h3>
            <p className="text-gray-custom">Hasta 70% menos tiempo en tareas repetitivas y administrativas.</p>
          </div>

          {/* Beneficio 4 */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Shield className="text-white" size={48} strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-semibold text-dark-custom mb-2">Menos Errores</h3>
            <p className="text-gray-custom">Reducción del 95% en errores humanos y mayor precisión en procesos.</p>
          </div>

        </div>
      </div>
    </section>
  );
}