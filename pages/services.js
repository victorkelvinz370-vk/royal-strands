import { Card, CardContent } from '../components/ui/card'
import { motion } from 'framer-motion'

const services = [
  { title: 'Afro Boho Braids', price: '£60', duration: '4h 30m' },
  { title: 'Box Braids', price: '£35', duration: '4h 30m' },
  { title: 'Cornrows', price: '£25', duration: '2h 30m' },
  { title: 'Goddess Braids', price: '£55', duration: '4h 30m' },
  { title: 'Knotless Braids', price: '£45', duration: '4h 30m' },
  { title: 'Male Hairstyles', price: 'Varies — please DM', duration: '2h 30m' }
]

export default function Services() {
  return (
    <section className="py-16">
      <h1 className="text-3xl text-center font-bold text-pink-600 mb-8">Services & Prices</h1>
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {services.map((s, i) => (
          <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
            <Card className="bg-white/90 backdrop-blur-sm shadow-md border-pink-100">
              <CardContent className="text-center">
                <h3 className="text-lg font-semibold text-pink-600 mb-1">{s.title}</h3>
                <p className="text-gray-700">Price: {s.price}</p>
                <p className="text-gray-500 text-sm">Duration: {s.duration}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <p className="text-center mt-8 text-gray-700">If your hairstyle is not listed please DM Michelle for a custom quote.</p>
    </section>
  )
}
