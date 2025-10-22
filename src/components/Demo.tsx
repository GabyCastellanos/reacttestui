import { Play, Brain, Rocket } from 'lucide-react';

export default function Demo() {
  return (
    <section id="demo" className="py-20 bg-dark-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See It In Action
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Queryosity
          </p>
        </div>

        {/* Demo Video/Interactive Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="card">
            <div className="relative bg-gradient-to-br from-primary-900 to-secondary-900 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <Play className="w-24 h-24 text-white mx-auto mb-4 opacity-80 hover:opacity-100 transition-opacity cursor-pointer" />
                <h3 className="text-2xl font-bold text-white mb-2">Demo</h3>
                <p className="text-gray-300">Watch</p>
                <p className="text-gray-400 mt-4 text-sm">Demo video placeholder</p>
              </div>
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
                <h4 className="font-semibold text-primary-400 mb-2">Natural Language Processing</h4>
                <p className="text-gray-400 text-sm">OpenAI GPT-4 to understand user queries and extract intent from plain English questions</p>
              </div>
              <div className="bg-dark-700 rounded-lg p-4">
                <h4 className="font-semibold text-primary-400 mb-2">SQL Query Generation</h4>
                <p className="text-gray-400 text-sm">AI-powered translation of natural language to optimized SQL queries with context awareness</p>
              </div>
              <div className="bg-dark-700 rounded-lg p-4">
                <h4 className="font-semibold text-primary-400 mb-2">Intelligent Analysis</h4>
                <p className="text-gray-400 text-sm">Machine learning models for pattern recognition and anomaly detection in observability data</p>
              </div>
              <div className="bg-dark-700 rounded-lg p-4">
                <h4 className="font-semibold text-primary-400 mb-2">Response Synthesis</h4>
                <p className="text-gray-400 text-sm">AI-generated insights and recommendations based on data analysis results</p>
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
                <h4 className="font-semibold text-secondary-400 mb-2">Auto-Remediation</h4>
                <p className="text-gray-400 text-sm">AI-driven automatic issue resolution with confidence scoring and human approval workflows</p>
              </div>
              <div className="bg-dark-700 rounded-lg p-4">
                <h4 className="font-semibold text-secondary-400 mb-2">Custom Dashboards</h4>
                <p className="text-gray-400 text-sm">Voice-activated dashboard generation and real-time collaborative investigation workspaces</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
