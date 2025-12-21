"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services does Clearvenio offer?",
      answer:
        "We offer comprehensive brand and design services including brand strategy, visual identity design, web development, content creation, and digital marketing solutions tailored to your unique needs.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on scope and complexity. Most projects take 4-12 weeks from discovery to delivery. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "We offer flexible pricing models including project-based pricing, retainer agreements, and hourly consulting. We'll work with you to find a solution that fits your budget and needs.",
    },
    {
      question: "Do you work with startups?",
      answer:
        "Absolutely! We love working with startups and have experience helping early-stage companies establish strong brand foundations and grow.",
    },
    {
      question: "Can you work with companies outside your location?",
      answer:
        "Yes! We work with clients globally. Our team uses modern collaboration tools to work seamlessly with remote teams.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We've worked across multiple industries including tech, healthcare, finance, e-commerce, and more. We bring fresh perspectives and industry insights to every project.",
    },
    {
      question: "Do you offer ongoing support after project completion?",
      answer:
        "Yes, we offer various support and maintenance packages to help you evolve your brand and optimize your results over time.",
    },
    {
      question: "How do we get started?",
      answer:
        "Simply fill out our contact form or reach out directly. We'll schedule a discovery call to understand your needs and discuss how we can help.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <section className="mt-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 py-20 md:py-32">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our services and process
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left hover:bg-gray-50 transition flex justify-between items-center"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <span
                    className={`text-2xl text-gray-600 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-8 pb-6 bg-gray-50 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-black text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">
              Didn't find your answer?
            </h2>
            <p className="mb-6">
              Can't find what you're looking for? Get in touch with our team
              directly.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-black px-8 py-3 rounded font-semibold hover:bg-gray-100 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
