import { Github, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"

const contactLinks = [
  {
    label: "Email",
    value: "abhienayasris@gmail.com",
    href: "mailto:abhienayasris@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+91 7305219509",
    href: "tel:+917305219509",
    icon: Phone,
  },
  {
    label: "GitHub",
    value: "github.com/AbhienayaSri9509",
    href: "https://github.com/AbhienayaSri9509",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/abhienaya-sri",
    href: "https://www.linkedin.com/in/abhienaya-sri-572020254/",
    icon: Linkedin,
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
          Contact
        </h2>
        <p className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-balance">
          {"Let's work together."}
          <br />
          <span className="text-muted-foreground">{"I'm always down to chat."}</span>
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactLinks.map((contact) => (
            <Link
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <contact.icon className="h-6 w-6 text-primary mb-4" />
              <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
              <p className="font-medium text-foreground group-hover:text-primary transition-colors break-all">
                {contact.value}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
