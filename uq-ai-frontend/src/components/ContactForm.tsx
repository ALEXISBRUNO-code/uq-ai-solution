'use client'
import { useState } from 'react'
import axios from 'axios'

export default function ContactForm() {
  const [form, setForm] = useState({ nombre: '', email: '', empresa: '', telefono: '', mensaje: '' })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/leads`, form)
      setStatus('✅ Mensaje enviado correctamente!')
      setForm({ nombre: '', email: '', empresa: '', telefono: '', mensaje: '' })
    } catch {
      setStatus('❌ Error al enviar. Intenta de nuevo.')
    }
  }

  return (
    <section id="contacto" className="py-24 bg-gray-950">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-4xl font-black text-white text-center mb-4">Contáctanos</h2>
        <p className="text-gray-400 text-center mb-12">Déjanos tus datos y te contactamos</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input required placeholder="Nombre completo" value={form.nombre} onChange={e => setForm({...form, nombre: e.target.value})} className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"/>
          <input required type="email" placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"/>
          <input placeholder="Empresa" value={form.empresa} onChange={e => setForm({...form, empresa: e.target.value})} className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"/>
          <input placeholder="Teléfono" value={form.telefono} onChange={e => setForm({...form, telefono: e.target.value})} className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"/>
          <textarea required placeholder="Mensaje" rows={4} value={form.mensaje} onChange={e => setForm({...form, mensaje: e.target.value})} className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"/>
          {status && <p className="text-center text-sm">{status}</p>}
          <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all text-lg">Enviar mensaje</button>
        </form>
      </div>
    </section>
  )
}