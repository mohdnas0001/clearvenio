import CaseStudiesHero from '@/components/case-studies/Hero'
import Intro from '@/components/shared/Intro'
import CaseStudiesList from '@/components/CaseStudiesList'
import Testimonial from '@/components/shared/Testimonial'

export default function CaseStudies() {
  return (
    <div className="bg-white">
      <CaseStudiesHero />
      <Intro />
      <CaseStudiesList />
      <Testimonial />
    </div>
  )
}
