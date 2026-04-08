"use client"

import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              Abhienaya Sri
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium">
              Software Engineer
            </p>
          </div>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
            Aspiring Software Engineer skilled in Web Development, AI, and Cloud. 
            Experienced in building scalable applications, deep learning models, 
            and AI-driven systems.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Chennai, India
            </span>
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              +91 7305219509
            </span>
          </div>

          <div className="flex gap-4 pt-4">
            <Link 
              href="mailto:abhienayasris@gmail.com"
              className="flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </Link>
            <Link 
              href="https://github.com/AbhienayaSri9509"
              target="_blank"
              className="flex items-center gap-2 px-5 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
            <Link 
              href="https://www.linkedin.com/in/abhienaya-sri-572020254/"
              target="_blank"
              className="flex items-center gap-2 px-5 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex justify-center">
          <div className="relative">
            <div className="absolute -inset-6 bg-primary/20 rounded-full blur-3xl" />
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
              <Image
                src="/images/profile.jpg"
                alt="Abhienaya Sri - Software Engineer"
                fill
                className="object-cover scale-125"
                style={{ objectPosition: "center 20%" }}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  )
}
