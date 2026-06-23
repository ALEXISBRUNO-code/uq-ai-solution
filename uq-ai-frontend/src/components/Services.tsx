const services = [
  { icon: '🤖', title: 'Agentes IA', desc: 'Automatiza tareas complejas con agentes inteligentes personalizados.' },
  { icon: '💬', title: 'Chatbots Empresariales', desc: 'Chatbots para atención al cliente 24/7 integrados a tu negocio.' },
  { icon: '⚙️', title: 'Automatización', desc: 'Optimiza procesos repetitivos con flujos automatizados con IA.' },
  { icon: '🏪', title: 'Soluciones MYPES', desc: 'IA accesible para pequeñas y medianas empresas peruanas.' },
  { icon: '🏥', title: 'Salud y Educación', desc: 'Aplicaciones de IA para el sector salud y educativo.' },
  { icon: '📊', title: 'Big Data', desc: 'Análisis masivo de datos para decisiones empresariales inteligentes.' },
  { icon: '🔒', title: 'Programación Segura', desc: 'Desarrollo seguro aplicando estándares OWASP y buenas prácticas.' },
  { icon: '🛡️', title: 'DevSecOps', desc: 'Seguridad integrada en cada etapa del ciclo de desarrollo.' },
]

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-[#0a0a1a]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-black text-white text-center mb-4">UQ AI <span className="text-blue-400">Solutions</span></h2>
        <p className="text-gray-400 text-center mb-16">Servicios de Inteligencia Artificial para transformar tu empresa</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition-all">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}