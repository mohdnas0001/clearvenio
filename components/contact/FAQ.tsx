'use client'

import { useState } from 'react'
import { Plus, X } from 'lucide-react'

interface FAQItem {
  id: number
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "What is Clearvenio's strategy?",
    answer:
      'Our strategy is a comprehensive approach to understanding your brand and market position, allowing us to deliver actionable solutions tailored to your unique business challenges through the lens of design and user experience.',
  },
  {
    id: 2,
    question: 'How can Clearvenio help my business?',
    answer:
      'We provide strategic design and development services that help clarify your brand message, improve user engagement, and drive business growth through thoughtful digital solutions.',
  },
  {
    id: 3,
    question: 'What industries does Clearvenio work with?',
    answer:
      'We work across multiple industries including technology, e-commerce, healthcare, finance, and more. Our approach is adaptable to any sector where digital clarity and effective design can create impact.',
  },
  {
    id: 4,
    question: 'How long does it take to complete a project with Clearvenio?',
    answer:
      'Project timelines vary based on scope and complexity. We typically discuss timeline expectations during the initial consultation and maintain transparency throughout the development process.',
  },
  {
    id: 5,
    question:
      'Do you offer ongoing support and maintenance after the project is completed?',
    answer:
      'Yes, we provide comprehensive post-launch support including monitoring, updates, maintenance, and optimization to ensure your digital assets continue to perform effectively.',
  },
  {
    id: 6,
    question: 'Can you work with existing design or development frameworks?',
    answer:
      'Absolutely! We can collaborate with your existing systems and frameworks, ensuring seamless integration while bringing our expertise to enhance and improve your digital ecosystem.',
  },
  {
    id: 7,
    question: 'How involved will I be in the project development process?',
    answer:
      "We believe in collaborative partnerships. You'll be involved at key milestones with regular updates and feedback opportunities to ensure the final product aligns with your vision.",
  },
  {
    id: 8,
    question: 'Can you help with website or app maintenance and updates?',
    answer:
      'Yes, we offer ongoing website and app maintenance services including feature updates, bug fixes, performance optimization, and security updates to keep your digital presence current.',
  },
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  return (
    <section className="bg-black text-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInDown">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 animate-fadeInUp">
            We&apos;re here to answer your questions
          </p>
        </div>

        {/* FAQ Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="border border-gray-800 rounded-lg overflow-hidden hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/50 stagger-item"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-6 flex items-start justify-between gap-4 text-left hover:bg-gray-900 transition-colors duration-200"
              >
                <div className="flex-1">
                  <div className="flex items-start gap-3">
                    <span className="text-gray-500 font-semibold min-w-fit text-sm">
                      {String(item.id).padStart(2, '0')}
                    </span>
                    <h3 className="font-semibold text-lg leading-tight">
                      {item.question}
                    </h3>
                  </div>
                </div>
                <div className="text-gray-400 flex-shrink-0 mt-1 transition-transform duration-300">
                  {openItems.includes(item.id) ? (
                    <X className="w-5 h-5 rotate-180" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </div>
              </button>

              {/* Answer */}
              {openItems.includes(item.id) && (
                <div className="px-6 pb-6 border-t border-gray-800 animate-scaleIn">
                  <p className="text-gray-400 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
