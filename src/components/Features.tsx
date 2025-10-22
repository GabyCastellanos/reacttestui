import { MessageSquare, Database, Zap, Code, Shield, TrendingUp } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: MessageSquare,
      title: "Natural Language Interface",
      description: "Ask questions about your observability data in plain English. No complex query languages required.",
      screenshot: "/screenshots/query-interface.png",
      implementation: "Built with React, TypeScript, and advanced NLP processing"
    },
    {
      icon: Database,
      title: "Multi-Source Data Integration",
      description: "Connect to various observability tools and databases. Unified querying across all your data sources.",
      screenshot: "/screenshots/data-sources.png",
      implementation: "RESTful API with pluggable data source adapters"
    },
    {
      icon: Zap,
      title: "Real-time Analysis",
      description: "Get instant insights with AI-powered analysis. Identify patterns and anomalies in seconds.",
      screenshot: "/screenshots/analysis-results.png",
      implementation: "Streaming data processing with WebSocket connections"
    },
    {
      icon: Code,
      title: "SQL Generation",
      description: "Automatically generates optimized SQL queries from natural language input.",
      screenshot: "/screenshots/sql-generation.png",
      implementation: "LLM-powered query generation with syntax validation"
    },
    {
      icon: Shield,
      title: "Secure Authentication",
      description: "Enterprise-grade security with role-based access control and audit logging.",
      screenshot: "/screenshots/security.png",
      implementation: "JWT-based auth with OAuth2 integration"
    },
    {
      icon: TrendingUp,
      title: "Interactive Visualizations",
      description: "Beautiful charts and graphs that make complex data easy to understand.",
      screenshot: "/screenshots/visualizations.png",
      implementation: "D3.js and Chart.js powered interactive dashboards"
    }
  ];

  return (
    <section id="features" className="py-20 bg-dark-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our AI-powered platform transforms how you investigate and analyze observability data
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="card hover:castle-glow transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-3 rounded-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 mb-4">{feature.description}</p>
                    <div className="bg-dark-700 rounded-lg p-3 mb-4">
                      <p className="text-sm text-secondary-400 font-mono">{feature.implementation}</p>
                    </div>
                  </div>
                </div>

                {/* Placeholder for screenshot */}
                <div className="bg-dark-700 rounded-lg p-4 border-2 border-dashed border-gray-600">
                  <div className="bg-gradient-to-br from-primary-900 to-secondary-900 rounded h-48 flex items-center justify-center">
                    <div className="text-center">
                      <IconComponent className="w-12 h-12 text-primary-400 mx-auto mb-2" />
                      <p className="text-gray-400 text-sm">Screenshot: {feature.title}</p>
                      <p className="text-xs text-gray-500">{feature.screenshot}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Stack */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-white mb-8">Built With Modern Technology</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              'React', 'TypeScript', 'Node.js', 'PostgreSQL',
              'Docker', 'Kubernetes', 'OpenAI', 'Tailwind CSS'
            ].map((tech) => (
              <span
                key={tech}
                className="bg-dark-700 text-gray-300 px-4 py-2 rounded-full border border-primary-500/30 hover:border-primary-500 transition-colors"
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
