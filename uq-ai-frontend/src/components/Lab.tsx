const projects = [
  { icon: '🔬', title: 'Prototipo Chatbot Médico', desc: 'Demo de chatbot para triaje médico automatizado con IA.' },
  { icon: '📱', title: 'App Reconocimiento Visual', desc: 'Prototipo de detección de objetos en tiempo real.' },
  { icon: '🎓', title: 'Tutor Virtual IA', desc: 'Agente educativo personalizado para estudiantes universitarios.' },
  { icon: '🏭', title: 'Automatización Industrial', desc: 'Demo de optimización de procesos con machine learning.' },
  { icon: '📊', title: 'Dashboard Predictivo', desc: 'Visualización de predicciones en tiempo real con datos reales.' },
  { icon: '🌐', title: 'RAG Empresarial', desc: 'Sistema de consulta inteligente sobre documentos corporativos.' },
]

export default function Lab() {
  return (
    <section id="lab" className="py-24 bg-[#0a0a1a]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-black text-white text-center mb-4">UQ AI <span className="text-green-400">Lab</span></h2>
        <p className="text-gray-400 text-center mb-16">Proyectos de investigación y prototipos aplicados</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-green-500 transition-all">
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm">{p.desc}</p>
              <span className="mt-4 inline-block bg-green-900/30 text-green-400 text-xs px-3 py-1 rounded-full">Demo disponible</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}