import HowWeWorkHero from '@/components/how-we-work/Hero'
import { TrendingUp } from 'lucide-react'

export default function HowWeWork() {
  const steps = [
    {
      number: '01',
      title: 'Listen Deeply',
      description:
        'We deep dive into your business, market, and audience to understand your unique challenges and opportunities.',
    },
    {
      number: '02',
      title: 'Think Clearly',
      description:
        'Armed with insights, we develop a comprehensive strategy that aligns with your goals and resonates with your audience.',
    },
    {
      number: '03',
      title: 'Create Impact',
      description:
        'Our creative team brings your vision to life with compelling designs, content, and experiences.',
    },
  ]

  return (
    <div>
      <HowWeWorkHero />
      <section className="mt-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How We Work</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition"
              >
                <div className="text-5xl font-bold text-gray-200 mb-4">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center w-full my-12">
            <button
              className="flex items-center justify-center gap-2 px-8 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 hover:scale-105 transition-all duration-200 border border-gray-700 animate-scaleIn"
              style={{ animationDelay: '0.3s' }}
            >
              Get Started <TrendingUp />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
