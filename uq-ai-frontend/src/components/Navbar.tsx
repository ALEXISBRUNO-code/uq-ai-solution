'use client'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a1a]/90 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-white font-black text-xl">UQ <span className="text-blue-400">AI</span> Solution</span>
        <div className="hidden md:flex gap-8 text-gray-300 text-sm">
          <a href="#servicios" className="hover:text-blue-400 transition">Servicios</a>
          <a href="#academy" className="hover:text-blue-400 transition">Academia</a>
          <a href="#lab" className="hover:text-blue-400 transition">Lab</a>
          <a href="#contacto" className="hover:text-blue-400 transition">Contacto</a>
          <a href="/login" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-1 rounded-lg transition">Iniciar Sesión</a>
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>☰</button>
      </div>
      {open && (
        <div className="md:hidden bg-[#0a0a1a] px-6 pb-4 flex flex-col gap-4 text-gray-300">
          <a href="#servicios">Servicios</a>
          <a href="#academy">Academia</a>
          <a href="#lab">Lab</a>
          <a href="#contacto">Contacto</a>
          <a href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center">Iniciar Sesión</a>
        </div>
      )}
    </nav>
  )
}