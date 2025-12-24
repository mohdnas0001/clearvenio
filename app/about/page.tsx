import AboutHero from '@/components/about/Hero'
import Clarity from '@/components/Clarity'
import Intro from '@/components/shared/Intro'

export default function About() {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & Creative Director',
    },
    {
      name: 'Michael Chen',
      role: 'Strategy Lead',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Design Lead',
    },
    {
      name: 'David Park',
      role: 'Development Lead',
    },
  ]

  return (
    <div>
      <AboutHero />
      <Intro />
      <Clarity />
      {/* <section className="mt-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20 md:py-32">
                <div className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
                    <p className="text-xl text-gray-600 max-w-3xl">
                    Founded on the principle that clarity is powerful, we've been
                    helping brands communicate their value with precision and impact.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <div>
                    <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        We empower brands to stand out in crowded markets by providing
                        clarity, consistency, and compelling storytelling. Our mission
                        is to transform how brands communicate their value.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Every project is an opportunity to make a meaningful impact on
                        how your audience understands and connects with your brand.
                    </p>
                    </div>

                    <div>
                    <h2 className="text-3xl font-bold mb-6">Our Values</h2>
                    <ul className="space-y-4">
                        <li className="flex gap-4">
                        <span className="text-2xl font-bold text-black">•</span>
                        <div>
                            <h3 className="font-semibold mb-1">Clarity</h3>
                            <p className="text-gray-600">
                            We cut through complexity to reveal what matters
                            </p>
                        </div>
                        </li>
                        <li className="flex gap-4">
                        <span className="text-2xl font-bold text-black">•</span>
                        <div>
                            <h3 className="font-semibold mb-1">Creativity</h3>
                            <p className="text-gray-600">
                            We bring fresh perspectives and innovative solutions
                            </p>
                        </div>
                        </li>
                        <li className="flex gap-4">
                        <span className="text-2xl font-bold text-black">•</span>
                        <div>
                            <h3 className="font-semibold mb-1">Collaboration</h3>
                            <p className="text-gray-600">
                            We partner with our clients as true collaborators
                            </p>
                        </div>
                        </li>
                    </ul>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-lg">
                    <h2 className="text-3xl font-bold mb-12 text-center">
                    Meet Our Team
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <div key={index} className="text-center">
                        <div className="bg-gray-200 h-32 rounded-lg mb-4"></div>
                        <h3 className="text-lg font-semibold">{member.name}</h3>
                        <p className="text-gray-600 text-sm">{member.role}</p>
                        </div>
                    ))}
                    </div>
                </div>
                </div>
            </section> */}
    </div>
  )
}
