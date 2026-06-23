const courses = [
  { icon: '🧠', title: 'Machine Learning', desc: 'Fundamentos y aplicaciones prácticas de ML.' },
  { icon: '🔗', title: 'RAG & LLM', desc: 'Retrieval Augmented Generation con modelos de lenguaje.' },
  { icon: '🤖', title: 'Agentes Inteligentes', desc: 'Diseño y desarrollo de agentes autónomos con IA.' },
  { icon: '🔒', title: 'Programación Segura', desc: 'OWASP, JWT, bcrypt y buenas prácticas de seguridad.' },
  { icon: '☁️', title: 'Cloud Computing', desc: 'Despliegue de soluciones IA en la nube.' },
  { icon: '📊', title: 'Big Data', desc: 'Procesamiento y análisis de grandes volúmenes de datos.' },
]

export default function Academy() {
  return (
    <section id="academy" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-black text-white text-center mb-4">UQ AI <span className="text-purple-400">Academy</span></h2>
        <p className="text-gray-400 text-center mb-16">Cursos especializados en Inteligencia Artificial</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c, i) => (
            <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-purple-500 transition-all">
              <div className="text-4xl mb-4">{c.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{c.title}</h3>
              <p className="text-gray-400 text-sm">{c.desc}</p>
              <button className="mt-4 text-purple-400 text-sm hover:text-purple-300 transition">Ver curso →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}