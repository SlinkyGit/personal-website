import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const projects = [
  {
    title: "MCC Predict / MIQA",
    description:
      "Machine learning and merchant intelligence system for predicting Merchant Category Codes from transaction data, descriptors, and merchant metadata. Built data enrichment pipelines, feature engineering workflows, and LLM/API-assisted tools to improve classification accuracy and structure merchant information.",
    link: "https://lakelandscientific.com/",
    tags: ["Machine Learning", "LLMs", "Data Pipelines", "APIs"],
  },
  {
    title: "Q-Learning Trading Agent",
    description:
      "Tabular reinforcement learning trading agent that learns long, short, and neutral policies from discretized technical indicators and position state. Includes transaction costs, market impact modeling, reward shaping, backtesting, and comparisons against rule-based and buy-and-hold benchmarks.",
    link: "https://github.com/SlinkyGit/Q-Learning-Trading-Agent",
    tags: ["Reinforcement Learning", "Q-Learning", "Python", "Trading"],
  },
  {
    title: "TCN Time-Series Classifier",
    description:
      "PyTorch-based Temporal Convolutional Network for short-horizon market direction prediction using rolling financial time-series windows. Explores technical indicators, binary directional labels, class imbalance, model collapse, normalization effects, and out-of-sample signal quality.",
    link: "https://github.com/SlinkyGit/TCN-Time-Series-Classifier",
    tags: ["PyTorch", "Time Series", "Deep Learning", "Finance"],
  },
  {
  title: "Personalized Medication Risk Analyzer",
  description:
    "Healthcare data pipeline and ML-driven drug risk modeling system built on large drug/adverse-event datasets. Integrated LLM-powered modules to generate clinical summaries and OTC recommendations from patient profiles, while resolving schema mismatches, joins, and data quality issues across large-scale healthcare records.",
  link: "#",
  tags: ["Healthcare ML", "LLMs", "Data Engineering", "Python"],
  }
]

export function ProjectsSection() {
  return (
    <section className="py-12">
      <AnimatedSection>
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
          Projects
        </h2>
      </AnimatedSection>
      
      <div className="space-y-8">
        {projects.map((project, index) => (
          <AnimatedSection key={project.title} delay={index * 100}>
            <Link
              href={project.link}
              target="_blank"
              className="group block"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium group-hover:text-accent transition-colors flex items-center gap-1">
                    {project.title}
                    <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
