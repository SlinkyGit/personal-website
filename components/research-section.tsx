import { AnimatedSection } from "./animated-section"
import { ResearchCard } from "./research-card"

const research = [
  {
    title: "Supervised Learning Model Comparison",
    year: " ",
    description:
    "Compared Decision Trees, K-Nearest Neighbors, Support Vector Machines, and Neural Networks across binary and multiclass classification tasks, analyzing model complexity, learning behavior, timing, and class-level performance.",
  link: "/reports/supervised-learning-model-comparison.pdf",

},
{
  title: "Neural Network Optimization and Regularization",
  year: " ",
    description:
      "Studied how optimization and regularization choices affect neural network training by comparing randomized optimization algorithms, Adam optimizer ablations, convergence behavior, and generalization under controlled experimental budgets.",
    link: "/reports/neural-network-optimization-regularization.pdf",
  },
  {
    title: "Unsupervised Learning and Dimensionality Reduction",
    year: " ",
    description:
      "Applied clustering and dimensionality reduction techniques to uncover dataset structure, evaluate representation quality, and measure how unsupervised transformations affect downstream neural network performance.",
    link: "/reports/unsupervised-learning-clustering-dimensionality-reduction.pdf",
  },
  {
    title: "Reinforcement Learning with Dynamic Programming and Model-Free Control",
    year: " ",
    description:
      "Implemented Value Iteration, Policy Iteration, Q-Learning, and SARSA across stochastic and control-based environments, comparing convergence, policy quality, discretization effects, and learning stability.",
    link: "/reports/reinforcement-learning-dynamic-programming-model-free-control.pdf",
  },
]
export function ResearchSection() {
  return (
    <section className="py-12">
      <AnimatedSection>
        <div className="mb-12">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Research
          </h2>

        <p className="max-w-3xl text-xs md:text-sm text-muted-foreground leading-relaxed">
          Research-style technical reports exploring machine learning through controlled experiments, algorithm comparison, and applied analysis across supervised, unsupervised, optimization, and reinforcement learning settings.
        </p>

        </div>
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