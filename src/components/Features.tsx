import { MessageSquare, Code, Shield, TrendingUp } from 'lucide-react';

export default function Features() {
  const features = [


    {
      icon: MessageSquare,
      title: "Data Generation",
      screenshot: "/screenshots/data.png",
      implementation: "Data simulated through Copilot based on Swivel Data Prompts"
    },
    {
      icon: Shield,
      title: "Architecture",
      screenshot: "/screenshots/architecture.png",
      implementation: "The system is backed by powerful Anthropic Claude Sonnet Model that interprets the user query"
    },
    {
      icon: Code,
      title: "Ask a question",
      screenshot: "/screenshots/pic1.jpg",
      implementation: "Ask a questions through our intuitive interface"
    },
    {
      icon: TrendingUp,
      title: "Results",
      screenshot: "/screenshots/pic2.jpg",
      implementation: "Model responds with actionable insights and analytics"
    }
  ];

  return (
    <section id="features" className="py-20 bg-dark-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Overview
                      </h2>

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
                    <div className="bg-dark-700 rounded-lg p-3 mb-4">
                      <p className="text-sm text-secondary-400 font-mono">{feature.implementation}</p>
                    </div>
                  </div>
                </div>

                {/* Screenshot */}
                <div className="bg-dark-700 rounded-lg overflow-hidden border-2 border-primary-500/20">
                  <img 
                    src={feature.screenshot} 
                    alt={`${feature.title} screenshot`}
                    className="w-full h-64 object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
