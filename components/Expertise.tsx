export default function Expertise() {
  const items = [
    {
      title: 'Brand Strategy And Identity',
      body: 'We define your brand’s purpose, organise its architecture for clarity, and bring it to life through a distinctive visual identity, creating a cohesive system your target audience can understand and connect with.',
    },
    {
      title: 'Insights and Measurement',
      body: 'We identify your unique equities and opportunities using qualitative and quantitative research designed to give you clarity on what’s important and where to go next.',
    },
    {
      title: 'Workplace Branding and Experiences',
      body: 'We design the signature moments, events, and environments that evoke a feeling and disproportionately impact your employee experience.',
    },
    {
      title: 'Brand Partnership, Sponsorship & Events',
      body: 'We work with brands and rights holders to create impactful strategies, ideas and activations through brand partnerships, sponsorship, live and digital experiences.',
    },
  ]

  return (
    <section className="relative py-24 px-4 md:px-8 lg:px-16 bg-white overflow-hidden">
      {/* Section Title */}
      <div className="max-w-7xl mx-auto text-center mb-24 animate-fadeInDown">
        <h3 className="text-3xl md:text-4xl font-bold">Our Expertise</h3>
      </div>

      {/* Background Path */}
      <img
        src="/images/expertise-path.png"
        alt=""
        className="hidden md:block absolute top-70 left-1/2 -translate-x-1/2 w-[800px] pointer-events-none select-none animate-fadeIn"
      />

      {/* Cards */}
      <div className="relative z-10 max-w-6xl mx-auto space-y-12 md:space-y-2">
        {/* Row 1 */}
        <div
          className="flex justify-start animate-slideInLeft"
          style={{ animationDelay: '0.1s' }}
        >
          <ExpertiseCard item={items[0]} className="md:ml-12" />
        </div>

        {/* Row 2 */}
        <div
          className="flex justify-end animate-slideInRight"
          style={{ animationDelay: '0.2s' }}
        >
          <ExpertiseCard item={items[1]} className="md:mr-12" />
        </div>

        {/* Row 3 */}
        <div
          className="flex justify-start animate-slideInLeft"
          style={{ animationDelay: '0.3s' }}
        >
          <ExpertiseCard item={items[2]} className="md:ml-24" />
        </div>

        {/* Row 4 */}
        <div
          className="flex justify-end animate-slideInRight"
          style={{ animationDelay: '0.4s' }}
        >
          <ExpertiseCard item={items[3]} className="md:mr-24" />
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto text-center mt-24 animate-fadeInUp">
        <a
          href="/services"
          className="inline-block bg-black text-white px-8 py-3 rounded font-medium hover:bg-gray-800 hover:scale-105 transition-all duration-200"
        >
          See More
        </a>
      </div>
    </section>
  )
}

/* ============================= */
/* Card Component */
/* ============================= */

function ExpertiseCard({
  item,
  className = '',
}: {
  item: { title: string; body: string }
  className?: string
}) {
  return (
    <div
      className={`bg-white p-8 rounded-xl shadow-xl border border-gray-100 max-w-md hover:shadow-2xl hover:border-gray-300 transition-all duration-300 hover:scale-105 animate-scaleIn ${className}`}
    >
      <div className="flex items-start gap-3 mb-3">
        <span className="mt-1 w-5 h-5 rounded-full bg-gray-700 text-white flex items-center justify-center text-xs">
          ✓
        </span>
        <h4 className="font-semibold text-lg">{item.title}</h4>
      </div>

      <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
    </div>
  )
}
