import { Brain, Rocket } from 'lucide-react';

export default function Demo() {
  return (
    <section id="demo" className="py-20 bg-dark-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See It In Action
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            
          </p>
        </div>

        {/* Demo Video */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="card">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/8VsAXHAJsto"
                title="Queryosity Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* AI Usage and Future Plans */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="card">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Brain className="w-8 h-8 text-secondary-500" />
              AI Usage & Implementation
            </h3>
            <div className="space-y-4">
              <div className="bg-dark-700 rounded-lg p-4">
                <h4 className="font-semibold text-primary-400 mb-2">Natural Language Querying</h4>
                <p className="text-gray-400 text-sm">Anthropic Claude Sonnet 3-5 V2 model services by AWS Bedrock</p>
              </div>
              <div className="bg-dark-700 rounded-lg p-4">
                <h4 className="font-semibold text-primary-400 mb-2">UI</h4>
                <p className="text-gray-400 text-sm">React application powered by Amazon Q</p>
              </div>
              <div className="bg-dark-700 rounded-lg p-4">
                <h4 className="font-semibold text-primary-400 mb-2">Infrastructure</h4>
                <p className="text-gray-400 text-sm">Infrastructure as Code spinned up using Amazon Q</p>
              </div>
              <div className="bg-dark-700 rounded-lg p-4">
                <h4 className="font-semibold text-primary-400 mb-2">Team Chibi Style Images</h4>
                <p className="text-gray-400 text-sm">Chat-GPT</p>
              </div>
              <div className="bg-dark-700 rounded-lg p-4">
                <h4 className="font-semibold text-primary-400 mb-2">Team Video</h4>
                <p className="text-gray-400 text-sm">Pika</p>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Rocket className="w-8 h-8 text-primary-500" />
              Future Implementations
            </h3>
            <div className="space-y-4">
              <div className="bg-dark-700 rounded-lg p-4">
                <h4 className="font-semibold text-secondary-400 mb-2">Multi-Modal Data Sources</h4>
                <p className="text-gray-400 text-sm">Expand beyond databases to include logs, metrics, traces, and APM tools for comprehensive observability</p>
              </div>
              <div className="bg-dark-700 rounded-lg p-4">
                <h4 className="font-semibold text-secondary-400 mb-2">Predictive Analytics</h4>
                <p className="text-gray-400 text-sm">Machine learning models to predict system failures and performance degradation before they impact users</p>
              </div>
              <div className="bg-dark-700 rounded-lg p-4">
                <h4 className="font-semibold text-secondary-400 mb-2">Custom Dashboards</h4>
                <p className="text-gray-400 text-sm">Custom dashboards for multiple data sources</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
