import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const research = [
  {
    title: "Neural Network Optimization",
    description: "Exploring novel approaches to gradient descent in deep learning architectures.",
    date: "2024",
    link: "#",
  },
  {
    title: "Distributed Consensus Algorithms",
    description: "Comparative analysis of Byzantine fault-tolerant protocols.",
    date: "2024",
    link: "#",
  },
  {
    title: "Human-Computer Interaction Study",
    description: "Investigating cognitive load in modern developer tooling interfaces.",
    date: "2023",
    link: "#",
  },
]

export function ResearchSection() {
  return (
    <section className="py-12">
      <AnimatedSection>
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
          Research
        </h2>
      </AnimatedSection>
      
      <div className="space-y-6">
        {research.map((item, index) => (
          <AnimatedSection key={item.title} delay={index * 100}>
            <Link
              href={item.link}
              className="group block"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1.5">
                  <h3 className="text-base font-medium group-hover:text-accent transition-colors flex items-center gap-1">
                    {item.title}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground shrink-0">
                  {item.date}
                </span>
              </div>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
