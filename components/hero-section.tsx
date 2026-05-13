"use client"

import Link from "next/link"
// import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { Mail } from "lucide-react"
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa"
import { FaXTwitter as Twitter } from "react-icons/fa6"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="py-16 md:py-24">
      <div className="space-y-6">
        <h1 
          className="text-3xl md:text-4xl font-medium tracking-tight text-balance"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
          }}
        >
          Nikhil Solanki
        </h1>
        
        <p 
          className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl italic"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease-out 100ms, transform 0.7s ease-out 100ms",
          }}
        >
          Exploring how software, data, and machine learning can solve real problems.
        </p>
        
        {/* <div 
          className="text-base md:text-lg text-foreground/90 leading-relaxed max-w-2xl space-y-4"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease-out 200ms, transform 0.7s ease-out 200ms",
          }}
        >
          <p>
            I&apos;m a developer and researcher passionate about crafting elegant solutions 
            to complex problems. My work spans web development, systems design, and 
            exploring the intersection of technology and human experience.
          </p>
          <p className="text-muted-foreground">
            Currently exploring machine learning applications and distributed systems. 
            Previously worked on developer tools and infrastructure.
          </p>
        </div> */}
        <div
          className="text-base md:text-lg text-foreground/90 leading-relaxed max-w-2xl space-y-4"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease-out 200ms, transform 0.7s ease-out 200ms",
          }}
        >
          <p>
            I&apos;m a software/ML engineer with a background in computer science and mathematics, 
            currently pursuing my M.S. in Computer Science at Georgia Tech. I&apos;m drawn to 
            problems that combine strong engineering with data, machine learning, and real-world 
            product impact.
          </p>
          <p className="text-muted-foreground">
            Recently, I&apos;ve been working on ML-driven transaction classification and merchant 
            intelligence at an early-stage fintech startup, along with side projects in 
            reinforcement learning, time-series modeling, and applied machine learning.

            I&apos;m currently looking for software engineering, machine learning, or data-focused roles 
            where I can contribute, learn quickly, and build useful systems.
          </p>
        </div>


        <div 
          className="flex items-center gap-5 pt-4"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease-out 300ms, transform 0.7s ease-out 300ms",
          }}
        >
          <Link 
            href="https://github.com/SlinkyGit" 
            target="_blank"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link 
            href="https://www.linkedin.com/in/nikhi1solanki/" 
            target="_blank"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          {/* <Link 
            href="https://twitter.com" 
            target="_blank"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5" />
          </Link> */}
          <Link 
            href="mailto:nikhil.u.solanki@gmail.com"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
