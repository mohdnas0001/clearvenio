import ServiceCard from './ServiceCard'

const services = [
  {
    title: 'Brand Strategy & Identity',
    description:
      "We define your brand's purpose, organise its architecture for clarity, and bring it to life through a distinctive visual identity.",
    image: '/images/brand-bg.png',
  },
  {
    title: 'Activation & Governance',
    description:
      'We plan and design your launch/rollout to build momentum internally and externally and help you manage your brand into the future.',
    image: '/images/activation-bg.png',
  },
  {
    title: 'Insights & Measurement',
    description:
      "We identify your unique equities and opportunities using qualitative and quantitative research designed to give you clarity on what's important and where to go next.",
    image: '/images/insights-bg.png',
  },
  {
    title: 'Workplace branding & experiences',
    description:
      'We design the signature moments, events, and environments that evoke a feeling and disproportionately impact your employee experience.',
    image: '/images/workplace-bg.png',
  },
  {
    title: 'Public Relations & Corporate Communications',
    description:
      'We partner with global businesses and brands to ensure their communications deliver meaningful impact for key stakeholders and audiences.',
    image: '/images/public-relations-bg.png',
  },
  {
    title: 'Customer Experience',
    description:
      'With our UI/UX specialists from around the world, we combine insights, user-centric technology and experience-led design across all touchpoints.',
    image: '/images/customer-experience-bg.png',
  },
  {
    title: 'Brand Partnership, Sponsorship & Events',
    description:
      'We work with brands and rights holders to create impactful strategies, ideas and activations through brand partnerships, sponsorship, live and digital experiences.',
    image: '/images/brand-partnership-bg.png',
  },
  {
    title: 'Production & Content at Scale',
    description:
      'With our production specialists delivering content at scale, we help brands overcome their most complex marketing challenges.',
    image: '/images/production-bg.png',
  },
]

export default function ServicesList() {
  return (
    <section className="bg-black py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-20 space-y-8">
        {services.map((s, idx) => (
          <div
            key={idx}
            className="stagger-item"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <ServiceCard
              title={s.title}
              description={s.description}
              image={s.image}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
