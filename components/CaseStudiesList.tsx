import CaseStudyCard from "./CaseStudyCard";

interface CaseStudyProject {
  id: string;
  title: string;
  company: string;
  description: string;
  image: string;
}

interface CaseStudiesListProps {
  projects?: CaseStudyProject[];
}

export default function CaseStudiesList({ projects }: CaseStudiesListProps) {
  const defaultProjects: CaseStudyProject[] = [
    {
      id: "1",
      title: "Thermolinks",
      company: "Thermolinks",
      description:
        "Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum ante vel nulla tempus, o molestissada ipsum molestie. Ut auctor auctor nunc. Pellentesque",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    },
    {
      id: "2",
      title: "Futuremap Foundation",
      company: "Futuremap Foundation",
      description:
        "Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum ante vel nulla tempus, o molestissada ipsum molestie. Ut auctor auctor nunc. Pellentesque",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    },
    {
      id: "3",
      title: "Eunonia Social Impact Initiative",
      company: "Eunonia",
      description:
        "Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum ante vel nulla tempus, o molestissada ipsum molestie. Ut auctor auctor nunc. Pellentesque",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    },
    {
      id: "4",
      title: "Thermolinks",
      company: "Thermolinks",
      description:
        "Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum ante vel nulla tempus, o molestissada ipsum molestie. Ut auctor auctor nunc. Pellentesque",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    },
    {
      id: "5",
      title: "Futuremap Foundation",
      company: "Futuremap Foundation",
      description:
        "Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum ante vel nulla tempus, o molestissada ipsum molestie. Ut auctor auctor nunc. Pellentesque",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    },
    {
      id: "6",
      title: "Eunonia Social Impact Initiative",
      company: "Eunonia",
      description:
        "Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum ante vel nulla tempus, o molestissada ipsum molestie. Ut auctor auctor nunc. Pellentesque",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    },
  ];

  const displayProjects = projects || defaultProjects;

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayProjects.map((project) => (
          <CaseStudyCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
