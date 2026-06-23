export default function Footer() {
  return (
    <footer className="bg-[#0a0a1a] border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-black text-xl mb-4">UQ <span className="text-blue-400">AI</span> Solution</h3>
            <p className="text-gray-400 text-sm">Empresa peruana especializada en Inteligencia Artificial para el Perú y el Mundo.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Divisiones</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>UQ AI Solutions</li>
              <li>UQ AI Academy</li>
              <li>UQ AI Lab</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Redes Sociales</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">LinkedIn</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">GitHub</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© 2026 UQ AI Solution Company. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}