import { ExternalLink } from "lucide-react"

const experiences = [
  {
    period: "Jun 2025 — Sep 2025",
    title: "Frontend Intern",
    company: "E-tailed Digital Service Pvt. Ltd.",
    description: "Developed responsive UI using HTML, CSS, JavaScript, improving page load speed by 25% and enhancing user experience.",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
  {
    period: "2024",
    title: "UI/UX & AI Internships",
    company: "InternEzy & IBM SkillsBuild",
    description: "Designed UI using Figma and applied design thinking. Learned AI fundamentals, prompt engineering, and cloud basics.",
    skills: ["Figma", "UI/UX Design", "AI Fundamentals", "Cloud Basics"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-12">
          Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="group grid md:grid-cols-[200px_1fr] gap-4 md:gap-8"
            >
              <div className="text-sm text-muted-foreground">
                {exp.period}
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                    {exp.title}
                    <span className="text-muted-foreground">·</span>
                    <span className="text-muted-foreground font-normal">{exp.company}</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
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
