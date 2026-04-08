import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    title: "Fear & Greed Sentiment Engine",
    description: "Generated sentiment-based financial signals with 85% prediction relevance using NLP (FinBERT). Collected real-time data via Twitter, Reddit, and News APIs. Developed backend with FastAPI and stored data in MongoDB.",
    highlights: [
      "85% prediction relevance",
      "Real-time data collection",
      "FastAPI + MongoDB backend",
    ],
    skills: ["Python", "NLP", "FinBERT", "FastAPI", "MongoDB", "APIs"],
    github: "https://github.com/AbhienayaSri9509",
    image: "/images/project-sentiment.jpg",
  },
  {
    title: "Forest Fire Detection",
    description: "Built CNN-based deep learning model achieving 90% accuracy in fire detection from image datasets. Applied preprocessing, augmentation, and model training using OpenCV + TensorFlow/PyTorch for detection pipeline.",
    highlights: [
      "90% accuracy in fire detection",
      "Deep learning CNN model",
      "Real-time monitoring capable",
    ],
    skills: ["Python", "TensorFlow", "PyTorch", "OpenCV", "CNN", "Deep Learning"],
    github: "https://github.com/AbhienayaSri9509",
    image: "/images/project-forest.jpg",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <Link 
                      href={project.github}
                      target="_blank"
                      className="p-2 text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                    <Link 
                      href={project.github}
                      target="_blank"
                      className="p-2 text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View project"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4">
                  {project.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
