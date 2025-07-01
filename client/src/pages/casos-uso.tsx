import { ArrowLeft, Building2, Stethoscope, GraduationCap, UtensilsCrossed, Home, ShoppingCart, Megaphone, Wrench, Briefcase, Dumbbell } from "lucide-react";
import { Link } from "wouter";

const casosUso = [
  {
    id: 1,
    icon: Building2,
    title: "Despacho contable",
    color: "from-blue-600 to-indigo-600",
    items: [
      "Clasificación automática de facturas con IA (OCR + categorización).",
      "Asistente para clientes en WhatsApp que responde dudas frecuentes (fechas SAT, CFDI, etc.).",
      "Generación automática de reportes mensuales en PDF y envío por correo.",
      "Alerta de vencimientos fiscales vía SMS o correo usando reglas automatizadas.",
      "Análisis de comportamiento financiero de clientes con IA para sugerir mejoras."
    ]
  },
  {
    id: 2,
    icon: Stethoscope,
    title: "Clínica o consultorio médico",
    color: "from-green-600 to-emerald-600",
    items: [
      "Agente para agendar citas automáticamente vía WhatsApp y Google Calendar.",
      "Recordatorios automáticos de citas con opción de confirmación o reprogramación.",
      "Transcripción de notas médicas por voz usando IA.",
      "Encuestas post-consulta para evaluar la atención y automatizar mejoras.",
      "Segmentación de pacientes para campañas de salud preventiva (vacunas, chequeos)."
    ]
  },
  {
    id: 3,
    icon: GraduationCap,
    title: "Escuela o academia (presencial u online)",
    color: "from-purple-600 to-violet-600",
    items: [
      "Chatbot que responde dudas sobre inscripción, precios y horarios.",
      "Evaluaciones automáticas con retroalimentación generada por IA.",
      "Detección temprana de alumnos con bajo rendimiento mediante análisis de calificaciones.",
      "Automatización de certificados personalizados tras terminar cursos.",
      "Secuencias de emails automatizadas para captar leads y convertirlos en alumnos."
    ]
  },
  {
    id: 4,
    icon: UtensilsCrossed,
    title: "Restaurante o cafetería",
    color: "from-orange-600 to-red-600",
    items: [
      "Sistema de reservaciones automatizado por WhatsApp con confirmación.",
      "Encuestas automáticas post-visita y segmentación para promociones.",
      "Reconocimiento de platillos más vendidos y predicción de demanda con IA.",
      "Recomendaciones personalizadas a clientes según historial de pedidos.",
      "Control de inventario con alertas predictivas basadas en consumo histórico."
    ]
  },
  {
    id: 5,
    icon: Home,
    title: "Inmobiliaria",
    color: "from-teal-600 to-cyan-600",
    items: [
      "Bot conversacional para mostrar propiedades filtrando por zona, precio, etc.",
      "Análisis de leads para detectar compradores más probables.",
      "Recordatorios automáticos para visitas programadas y seguimiento post-visita.",
      "Generación automática de contratos personalizados.",
      "Campañas automatizadas para propiedades nuevas según preferencias del cliente."
    ]
  },
  {
    id: 6,
    icon: ShoppingCart,
    title: "Tienda en línea o ecommerce",
    color: "from-pink-600 to-rose-600",
    items: [
      "Recomendador de productos personalizado según historial y navegación.",
      "Asistente IA en la web para dudas, recomendaciones y devoluciones.",
      "Notificaciones automatizadas por carrito abandonado.",
      "Generación de contenido automático (descripciones de productos, SEO, etc.).",
      "Análisis de reseñas con IA para detectar problemas o necesidades de mejora."
    ]
  },
  {
    id: 7,
    icon: Megaphone,
    title: "Agencia de marketing",
    color: "from-yellow-600 to-amber-600",
    items: [
      "Generación automática de contenidos para redes sociales y blogs con IA.",
      "Chatbot para captar leads en la página web.",
      "Automatización de reportes de campañas con métricas clave.",
      "IA para analizar rendimiento de anuncios y sugerir mejoras.",
      "Secuencia de onboarding automática para nuevos clientes."
    ]
  },
  {
    id: 8,
    icon: Wrench,
    title: "Taller mecánico",
    color: "from-gray-600 to-slate-600",
    items: [
      "Agente para agendar servicios por WhatsApp con recordatorios automáticos.",
      "Chatbot que da estatus del vehículo (en revisión, listo, etc.).",
      "Análisis de historial de servicios para predecir mantenimientos futuros.",
      "Encuesta post-servicio automatizada y solicitud de reseña.",
      "Generación automática de cotizaciones con base en diagnóstico."
    ]
  },
  {
    id: 9,
    icon: Briefcase,
    title: "Consultoría (negocios, legal, etc.)",
    color: "from-indigo-600 to-blue-600",
    items: [
      "IA que analiza documentos y sugiere mejoras (contratos, propuestas, etc.).",
      "Agente para agendar sesiones y enviar recordatorios.",
      "Secuencia automatizada para convertir prospectos en clientes.",
      "Resumen automático de reuniones grabadas.",
      "Generación de minutas de acción y seguimiento automático."
    ]
  },
  {
    id: 10,
    icon: Dumbbell,
    title: "Gimnasio o centro de entrenamiento",
    color: "from-red-600 to-pink-600",
    items: [
      "Asistente virtual para registro, pagos y dudas frecuentes.",
      "Rutinas personalizadas con IA según objetivos del usuario.",
      "Recordatorios automáticos para asistir y evitar abandonos.",
      "Segmentación y promociones automatizadas por nivel de asistencia.",
      "Generación de reportes de progreso físicos con visualizaciones."
    ]
  }
];

export default function CasosUso() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-primary-custom hover:text-primary-dark-custom transition-colors">
              <ArrowLeft size={24} />
              <span>Volver al inicio</span>
            </Link>
          </div>
          <div className="mt-4">
            <h1 className="text-4xl font-bold text-dark-custom">Casos de Uso por Industria</h1>
            <p className="text-xl text-gray-custom mt-2">
              Descubre cómo la automatización con IA puede transformar tu sector específico
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {casosUso.map((caso) => {
            const IconComponent = caso.icon;
            return (
              <div key={caso.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${caso.color} rounded-lg flex items-center justify-center`}>
                    <IconComponent className="text-white" size={24} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-dark-custom">{caso.title}</h3>
                </div>
                
                <ul className="space-y-3">
                  {caso.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-custom rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <Link href="/#contact" className="inline-flex items-center text-primary-custom hover:text-primary-dark-custom font-semibold text-sm transition-colors">
                    Solicitar consulta personalizada →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-dark-custom mb-4">
            ¿No encuentras tu industria?
          </h2>
          <p className="text-xl text-gray-custom mb-6 max-w-3xl mx-auto">
            Cada negocio es único. Podemos desarrollar soluciones de automatización personalizadas para cualquier sector o proceso específico.
          </p>
          <Link href="/#contact" className="inline-block bg-primary-custom text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark-custom transition-colors">
            Contáctanos para tu caso específico
          </Link>
        </div>
      </div>
    </div>
  );
}