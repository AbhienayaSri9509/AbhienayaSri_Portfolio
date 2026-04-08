import { Award } from "lucide-react"

const certifications = [
  { name: "MS Excel", provider: "Coursera" },
  { name: "Java", provider: "Oracle" },
  { name: "Web Development and ML", provider: "Udemy" },
  { name: "CS50", provider: "HarvardX" },
  { name: "Intro to Data Science", provider: "Cisco" },
]

const achievements = [
  "Won 4X Hackathons (IDEATHON, INNOVATHON, UBA XTARD)",
  "Top 30 ChangeMakers (1M1B) – Invited to IBM Office (All India)",
  "SDG Goals Winner – Won for sustainable development projects aligned with UN SDG goals",
]

export function Certifications() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Certifications */}
          <div>
            <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-8">
              Certifications
            </h2>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <Award className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">{cert.name}</p>
                    <p className="text-sm text-muted-foreground">{cert.provider}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-8">
              Achievements
            </h2>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-primary/10 border border-primary/20"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">{index + 1}</span>
                  </div>
                  <p className="text-foreground leading-relaxed pt-1">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
