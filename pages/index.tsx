import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen">
      {/* Hero Section */}
      <section className="w-full relative text-white overflow-hidden bg-gradient-to-br from-primary via-accent to-secondary">
        <div className="relative py-24 px-6 md:px-16 text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-4xl">
            Foundational health for every body, every day.
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            The Momentous Three combines Protein, Creatine and Omega‑3 — three
            essential nutrients shown to support long‑term health, performance and
            cognitive function.
          </p>
          <a
            href="https://www.livemomentous.com/products/the-momentous-three"
            className="inline-block bg-secondary hover:bg-accent transition-colors text-white font-semibold py-3 px-6 rounded-md"
          >
            Shop The Momentous Three
          </a>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 md:px-16 max-w-5xl w-full">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">
          Why The Momentous Three?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold mb-2 text-primary">Long-term health, performance & recovery</h3>
            <p className="text-base text-gray-700">
              Vital for long‑term health, performance and recovery, our
              foundational stack helps your body perform its best every day.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold mb-2 text-primary">Boosts muscle, energy & brain function</h3>
            <p className="text-base text-gray-700">
              Together, protein, creatine and Omega‑3 support muscle
              performance, energy production and cognitive function.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold mb-2 text-primary">Held to The Momentous Standard</h3>
            <p className="text-base text-gray-700">
              NSF‑Certified and trusted by elite athletes, each ingredient meets
              our rigorous quality and purity standards.
            </p>
          </div>
        </div>
      </section>

      {/* What's inside Section */}
      <section className="py-16 px-6 md:px-16 w-full bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">What's inside?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-white rounded-lg shadow flex flex-col">
            <h3 className="text-lg font-semibold mb-2 text-primary">Whey Protein Isolate</h3>
            <p className="text-gray-700">
              Supports muscle performance, growth, recovery and immune function.
              A low‑calorie way to meet your daily protein needs.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow flex flex-col">
            <h3 className="text-lg font-semibold mb-2 text-primary">Creatine Monohydrate</h3>
            <p className="text-gray-700">
              Regenerates ATP — the primary energy source for muscle and brain
              cells — to aid physical endurance and cognitive function.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow flex flex-col">
            <h3 className="text-lg font-semibold mb-2 text-primary">Omega‑3 Fatty Acids</h3>
            <p className="text-gray-700">
              Essential fats that impact inflammation, muscle recovery and brain
              health. Critical for cardiovascular and cellular function.
            </p>
          </div>
        </div>
      </section>

      {/* How to use Section */}
      <section className="py-16 px-6 md:px-16 w-full">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">How to use The Momentous Three</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2 text-primary">Protein</h3>
            <p className="text-gray-700">Mix 1 scoop with 10–12oz of liquid, as needed to hit your daily protein intake.</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2 text-primary">Creatine</h3>
            <p className="text-gray-700">Mix 1 packet with 6‑8oz of your preferred liquid daily.</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2 text-primary">Omega‑3</h3>
            <p className="text-gray-700">Take 2 softgels with food each day.</p>
          </div>
        </div>
        <div className="text-center mt-10">
          <a
            href="https://www.livemomentous.com/products/the-momentous-three"
            className="inline-block bg-secondary hover:bg-accent transition-colors text-white font-semibold py-3 px-6 rounded-md"
          >
            Get Started Now
          </a>
        </div>
      </section>
    </main>
  )
}
