import { Search, Brain, BarChart3 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 investigation-pattern">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo and Title */}
          <div className="mb-8">
            <img
              src="/logo.png"
              alt="Queryous Minds Logo"
              className="w-40 h-40 mx-auto mb-4 animate-castle-float"
            />
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-500 bg-clip-text text-transparent mb-4 py-2">
              Queryosity
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-6">
              AI-Powered Observability Investigation Assistant brought to you by Queryous Minds
            </p>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-6">
              <span className="text-red-400 font-bold text-2xl">Engineers are drowning in Teams pings.</span> <span className="text-orange-300 font-semibold">Stakeholders are getting curious about data,</span> but SQL queries aren't exactly user-friendly.
            </p>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-medium">
              <span className="text-primary-300 font-bold">What if curiosity could be satisfied instantly?</span> Queryousity makes everyone a data detective—no code required, just questions.
            </p>
          </div>

          {/* Key Features Icons */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="card text-center transform hover:scale-105 transition-all duration-300">
              <Search className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Natural Language Queries</h3>
              <p className="text-gray-400">Ask questions about your data in plain English</p>
            </div>
            <div className="card text-center transform hover:scale-105 transition-all duration-300">
              <Brain className="w-12 h-12 text-secondary-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">AI-Powered Analysis</h3>
              <p className="text-gray-400">Get intelligent insights and automated investigations</p>
            </div>
            <div className="card text-center transform hover:scale-105 transition-all duration-300">
              <BarChart3 className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Real-time Insights</h3>
              <p className="text-gray-400">Instant analysis with actionable recommendations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
