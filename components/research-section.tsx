import { AnimatedSection } from "./animated-section"
import { ResearchCard } from "./research-card"

const research = [
  {
    title: "Supervised Learning Model Comparison",
    year: " ",
    description:
    "Compared Decision Trees, K-Nearest Neighbors, Support Vector Machines, and Neural Networks across binary and multiclass classification tasks, analyzing model complexity, learning behavior, timing, and class-level performance.",
  link: "/papers/supervised-learning-report.pdf",
},
{
  title: "Neural Network Optimization and Regularization",
  year: " ",
    description:
      "Studied how optimization and regularization choices affect neural network training by comparing randomized optimization algorithms, Adam optimizer ablations, convergence behavior, and generalization under controlled experimental budgets.",
    link: "/papers/optimization-learning-report.pdf",
  },
  {
    title: "Unsupervised Learning and Dimensionality Reduction",
    year: " ",
    description:
      "Applied clustering and dimensionality reduction techniques to uncover dataset structure, evaluate representation quality, and measure how unsupervised transformations affect downstream neural network performance.",
    link: "/papers/unsupervised-learning-report.pdf",
  },
  {
    title: "Reinforcement Learning with Dynamic Programming and Model-Free Control",
    year: " ",
    description:
      "Implemented Value Iteration, Policy Iteration, Q-Learning, and SARSA across stochastic and control-based environments, comparing convergence, policy quality, discretization effects, and learning stability.",
    link: "/papers/reinforcement-learning-report.pdf",
  },
]

export function ResearchSection() {
  return (
    <section className="py-12">
      <AnimatedSection>
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
          Research
        </h2>
      {/* <p className="text-sm text-muted-foreground text-pretty mt-3 max-w-3xl"> 
      Technical reports from graduate-level machine learning coursework, focused on experimental design, algorithm comparison, and applied ML research.
      </p> */}
      </AnimatedSection>

      <div className="space-y-6">
        {research.map((item, index) => (
          <AnimatedSection key={item.title} delay={index * 100}>
            <ResearchCard
              title={item.title}
              description={item.description}
              date={item.year}
              link={item.link}
            />
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}