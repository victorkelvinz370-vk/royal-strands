import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '../components/ui/button'

function ScissorsIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
      <path d="M14.121 14.121L21 21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.879 8.879L2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="6.5" cy="6.5" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="17.5" r="3.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export default function Home() {
  return (
    <section className="text-center py-16">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-5xl font-extrabold text-pink-700 flex items-center justify-center gap-3">
          <ScissorsIcon size={44} /> Royal Strands
        </h1>
        <p className="text-lg text-gray-700 italic mt-3">Michelle — Mobile Afro & Boho Braider • Manchester, UK</p>

        <div className="mt-6 flex items-center justify-center gap-4">
          <a href="https://wa.me/447946572576"><Button className="px-6 py-3 bg-pink-600 text-white">Book Now</Button></a>
          <Link href="/contact"><a><Button className="px-6 py-3 bg-rose-400 text-white">Contact / Book</Button></a></Link>
        </div>

        <div className="max-w-3xl mx-auto text-left mt-12 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-pink-600 mb-3">About Michelle</h2>
          <p className="text-gray-700 leading-relaxed">Hi — I’m Michelle, founder of <strong>Royal Strands</strong>. I specialise in Afro & Boho braids, knotless styles, goddess braids and more. I offer mobile services across Manchester and also work from home. I bring salon-quality braiding to your door.</p>
          <p className="mt-3 text-sm text-gray-600">Availability: Mon–Sat, 09:00 — 20:00</p>
        </div>
      </motion.div>
    </section>
  )
}
