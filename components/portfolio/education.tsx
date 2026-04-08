import { GraduationCap } from "lucide-react"

export function Education() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-12">
          Education
        </h2>

        <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8">
          <div className="text-sm text-muted-foreground">
            2022 — Present
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  M.Tech (Integrated), Computer Science and Engineering
                </h3>
                <p className="text-muted-foreground mt-1">
                  Sri Sairam Engineering College, Chennai
                </p>
                <p className="text-primary font-medium mt-2">
                  CGPA: 8.46
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
