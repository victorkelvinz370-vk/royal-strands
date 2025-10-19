export default function Gallery() {
  return (
    <section className="py-16 text-center">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">Gallery</h1>
      <p className="text-gray-700">Michelle will add photos here soon. To add images, upload them to <code>/public</code> and reference them in this page.</p>
      <div className="max-w-4xl mx-auto mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-40 bg-white/60 border border-pink-100 rounded-lg flex items-center justify-center text-sm text-gray-400">Photo {i + 1}</div>
        ))}
      </div>
    </section>
  )
}
