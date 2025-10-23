export default function TechStack() {
  return (
    <section className="py-20 bg-dark-900 investigation-pattern">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Built With Modern Technology</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Our AI-powered platform leverages cutting-edge technologies
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              'React', '.NET/C#', 'Anthropic Claude Sonnet-3-5 v2', 'AWS API Gateway',
              'AWS Lambda', 'Amazon Q'
            ].map((tech) => (
              <span
                key={tech}
                className="bg-dark-700 text-gray-300 px-6 py-3 rounded-full border border-primary-500/30 hover:border-primary-500 transition-colors text-lg font-medium hover:castle-glow"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
