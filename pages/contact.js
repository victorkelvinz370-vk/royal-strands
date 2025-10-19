import { useState } from 'react'
import { Button } from '../components/ui/button'

export default function Contact() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent('Booking enquiry from ' + (name || 'website'))
    const body = encodeURIComponent(`Name: ${name}%0APhone: ${phone}%0A%0AMessage:%0A${message}`)
    window.location.href = `mailto:strandsroyal@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section className="py-16 text-center px-4">
      <h1 className="text-3xl font-bold text-pink-600 mb-3">Contact & Booking</h1>
      <p className="text-gray-700 mb-4">Phone: <a href="tel:+447946572576" className="text-pink-700">+44 7946 572576</a></p>
      <p className="text-gray-700 mb-4">Email: <a href="mailto:strandsroyal@gmail.com" className="text-pink-700">strandsroyal@gmail.com</a></p>

      <div className="max-w-xl mx-auto mt-8 text-left bg-white/80 p-6 rounded-2xl shadow-md">
        <h3 className="font-semibold text-pink-600 mb-2">Availability</h3>
        <p className="text-gray-700">Mon–Sat, 09:00 — 20:00</p>
        <p className="mt-3 text-sm text-gray-600">For bespoke styles or men's bookings please DM.</p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-8 text-left bg-white/90 p-6 rounded-2xl shadow-md">
        <label className="block mb-2 text-sm font-medium text-gray-700">Your name</label>
        <input value={name} onChange={e => setName(e.target.value)} className="w-full p-2 rounded-md border" placeholder="Your name" />

        <label className="block mt-4 mb-2 text-sm font-medium text-gray-700">Phone number</label>
        <input value={phone} onChange={e => setPhone(e.target.value)} className="w-full p-2 rounded-md border" placeholder="+44 ..." />

        <label className="block mt-4 mb-2 text-sm font-medium text-gray-700">Message</label>
        <textarea value={message} onChange={e => setMessage(e.target.value)} className="w-full p-2 rounded-md border" rows="5" placeholder="Hi Michelle, I'd like to book..." />

        <div className="mt-4 flex gap-3">
          <Button className="px-6 py-3 bg-pink-600 text-white">Submit (email)</Button>
          <a href="https://wa.me/447946572576"><Button className="px-6 py-3 bg-rose-400 text-white">Book on WhatsApp</Button></a>
        </div>
      </form>
    </section>
  )
}
