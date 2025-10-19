import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-rose-100 to-white text-gray-900 relative overflow-hidden">
      <Head>
        <title>Royal Strands — Manchester Mobile Hair Braider</title>
        <meta name="description" content="Michelle — Royal Strands. Mobile Afro & Boho braids in Manchester." />
      </Head>

      <header className="sticky top-0 z-30 bg-white/60 backdrop-blur-md border-b border-pink-100">
        <nav className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/"><a className="text-xl font-extrabold text-pink-700">Royal Strands</a></Link>
          <div className="flex items-center gap-4">
            <Link href="/services"><a className="text-sm font-medium text-pink-600 hover:underline">Services</a></Link>
            <Link href="/gallery"><a className="text-sm font-medium text-pink-600 hover:underline">Gallery</a></Link>
            <Link href="/contact"><a className="text-sm font-medium text-pink-600 hover:underline">Contact</a></Link>
          </div>
        </nav>
      </header>

      <motion.div className="absolute inset-0" animate={{ opacity: [0.04, 0.12, 0.04] }} transition={{ duration: 6, repeat: Infinity }} aria-hidden />

      <main className="relative z-10">{children}</main>

      <footer className="text-center py-6 text-gray-500 text-sm mt-12">© {new Date().getFullYear()} Royal Strands — Michelle. Mobile hairstylist in Manchester.</footer>
    </div>
  )
}
