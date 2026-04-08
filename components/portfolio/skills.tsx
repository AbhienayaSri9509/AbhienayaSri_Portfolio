const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Python"],
  },
  {
    title: "Databases & APIs",
    skills: ["MongoDB", "MySQL", "SQL", "Postman API"],
  },
  {
    title: "Frameworks & Tools",
    skills: ["React JS", "Node JS", "Bootstrap", "Google Colab"],
  },
  {
    title: "AI/ML",
    skills: ["Machine Learning", "Deep Learning", "NLP", "FinBERT"],
  },
  {
    title: "AI Tools",
    skills: ["ChatGPT", "Cursor AI", "Base 44", "Gemini", "Builder.io", "Bolt AI", "Prezi AI"],
  },
  {
    title: "Coursework",
    skills: ["DBMS", "OOP", "Operating Systems", "Computer Networks", "Data Structures & Algorithms"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-12">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-2 text-sm bg-secondary text-secondary-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
