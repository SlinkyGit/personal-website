import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const experiences = [
  {
    role: "Founding Machine Learning Engineer",
    company: "MIQA – Lakeland Scientific",
    companyLink: "https://lakelandscientific.com/",
    period: "Feb. 2026 — Present",
    description:
      "Building MCC Predict, a merchant intelligence system that infers Merchant Category Codes from transaction data, descriptors, and merchant metadata. Working across ML pipelines, feature engineering, data enrichment, LLM-assisted merchant research, and API-facing prediction workflows.",
    skills: ["Machine Learning", "LLMs", "Python", "Data Pipelines", "APIs"],
  },
  {
    role: "Software Engineer / Systems Engineer Intern",
    company: "Lockheed Martin",
    companyLink: "https://www.lockheedmartin.com",
    period: "Apr. 2023 — Sept. 2023",
    description:
      "Developed, deployed, and tested Aegis Combat System software loads for naval systems. Built Python and Robot Framework regression tests, authored Bash utilities for environment setup, and helped investigate real-time software issues on active naval vessels.",
    skills: ["Python", "Robot Framework", "Bash", "Linux", "Testing"],
  },
  {
    role: "Application Developer Intern / Part-Time",
    company: "The Vanguard Group",
    companyLink: "https://www.vanguard.com",
    period: "Mar. 2022 — Jan. 2023",
    description:
      "Worked on Personal Advising Services and financial planning systems. Refactored large code paths, enhanced advisory microservices, migrated workflows to AWS Lambda and DynamoDB, and built observability dashboards with Splunk and Honeycomb.",
    skills: ["AWS", "DynamoDB", "Microservices", "Splunk", "Honeycomb"],
  },
]

export function ExperienceSection() {
  return (
    <section className="py-12">
      <AnimatedSection>
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
          Experience
        </h2>
      </AnimatedSection>
      
      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <AnimatedSection key={`${exp.role}-${exp.company}`} delay={index * 100}>
            <div className="group">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 md:gap-4 mb-2">
                <div>
                  <h3 className="text-base font-medium">
                    {exp.role}
                  </h3>
                  <Link 
                    href={exp.companyLink}
                    target="_blank"
                    className="text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-0.5"
                  >
                    {exp.company}
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </div>
                <span className="text-sm text-muted-foreground shrink-0">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
