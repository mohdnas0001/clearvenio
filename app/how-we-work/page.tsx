export default function HowWeWork() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We deep dive into your business, market, and audience to understand your unique challenges and opportunities.",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "Armed with insights, we develop a comprehensive strategy that aligns with your goals and resonates with your audience.",
    },
    {
      number: "03",
      title: "Creative",
      description:
        "Our creative team brings your vision to life with compelling designs, content, and experiences.",
    },
    {
      number: "04",
      title: "Execution",
      description:
        "We meticulously execute every detail, ensuring quality, consistency, and impact across all touchpoints.",
    },
    {
      number: "05",
      title: "Optimization",
      description:
        "We measure results, gather feedback, and continuously optimize to maximize your success.",
    },
    {
      number: "06",
      title: "Support",
      description:
        "Even after launch, we're here to support, advise, and evolve your brand as you grow.",
    },
  ];

  return (
    <div>
      <section className="mt-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20 md:py-32">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How We Work</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our proven process ensures clarity, creativity, and results at
              every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition"
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

          {/* Process Flow */}
          <div className="mt-20 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Commitment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-black mb-2">100%</div>
                <p className="text-gray-600">
                  Client-Focused Approach - Your goals are our goals
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-black mb-2">
                  360°
                </div>
                <p className="text-gray-600">
                  Integrated Solutions - Strategy to execution, all in-house
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-black mb-2">24/7</div>
                <p className="text-gray-600">
                  Partnership - Always here to support your success
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
