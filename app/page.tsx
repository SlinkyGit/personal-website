export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <section className="max-w-4xl mx-auto">
        <nav className="flex justify-between items-center mb-24">
          <h1 className="text-xl font-semibold">Nikhil Solanki</h1>
          <div className="flex gap-6 text-sm text-gray-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </nav>

        <section className="mb-28">
          <p className="text-gray-400 mb-4">Software Engineer/Machine Learning Engineer</p>
          <h2 className="text-5xl font-bold tracking-tight mb-6">
            Building practical software and machine learning systems.
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl leading-8">
            I’m a computer science and mathematics graduate currently pursuing my Master's at Georgia Tech (part-time).
            I’m interested in machine learning, applied AI, fintech, data systems, and building useful technical products.
            I'm currently based in New York City.
          </p>
        </section>

        <section id="about" className="mb-28">
          <h3 className="text-2xl font-semibold mb-4">About</h3>
          <p className="text-gray-300 leading-8">
            I have experience across software engineering, machine learning, backend development,
            and data-driven projects. Recently, I’ve worked on merchant intelligence systems,
            reinforcement learning projects, and time-series classification models.
          </p>
        </section>

        <section id="projects" className="mb-28">
          <h3 className="text-2xl font-semibold mb-6">Projects</h3>

          <div className="grid gap-4">
            <div className="border border-gray-800 rounded-xl p-5">
              <h4 className="text-xl font-semibold mb-2">MCC Predict / MIQA</h4>
              <p className="text-gray-300">
                LLM-assisted merchant category code prediction pipeline with metadata enrichment,
                customer-specific blocking logic, and API output improvements.
              </p>
            </div>

            <div className="border border-gray-800 rounded-xl p-5">
              <h4 className="text-xl font-semibold mb-2">Q-Learning Trading Agent</h4>
              <p className="text-gray-300">
                Reinforcement learning project focused on decision-making under uncertainty,
                trading policies, transaction costs, and market impact.
              </p>
            </div>

            <div className="border border-gray-800 rounded-xl p-5">
              <h4 className="text-xl font-semibold mb-2">TCN Time-Series Classifier</h4>
              <p className="text-gray-300">
                PyTorch-based temporal convolutional network for financial time-series classification
                using engineered technical indicators.
              </p>
            </div>
          </div>
        </section>

        <section id="contact">
          <h3 className="text-2xl font-semibold mb-4">Contact</h3>
          <p className="text-gray-300">
            You can find me on GitHub and LinkedIn, or reach out by email.
          </p>
        </section>
      </section>
    </main>
  );
}