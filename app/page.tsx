import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { ResearchSection } from "@/components/research-section"
import { ExperienceSection } from "@/components/experience-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="max-w-2xl mx-auto px-6">
        <section id="about">
          <HeroSection />
        </section>
        
        <div className="border-t border-border/50" />
        
        <section id="projects">
          <ProjectsSection />
        </section>
        
        <div className="border-t border-border/50" />
        
        <section id="research">
          <ResearchSection />
        </section>
        
        <div className="border-t border-border/50" />
        
        <section id="experience">
          <ExperienceSection />
        </section>
        
        <Footer />
      </main>
    </div>
  )
}
