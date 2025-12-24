'use client'
import { useRouter } from 'next/navigation'

interface CaseStudyProject {
  id: string
  title: string
  company: string
  description: string
  image: string
}

interface CaseStudyCardProps {
  project: CaseStudyProject
}

export default function CaseStudyCard({ project }: CaseStudyCardProps) {
  const router = useRouter()
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      {/* Image */}
      <div className="relative h-48 bg-gray-200 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('${project.image}')` }}
        ></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg w-[60%] font-bold text-black">
            {project.title}
          </h3>
          <button
            onClick={() =>
              router.push(`/case-studies/${project.title.toLocaleLowerCase()}`)
            }
            className="bg-gray-800 text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-black transition"
          >
            View
          </button>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed">
          <span className="font-semibold text-gray-900">Description: </span>
          {project.description}
        </p>
      </div>
    </div>
  )
}
