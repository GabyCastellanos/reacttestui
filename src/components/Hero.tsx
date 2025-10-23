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
              className="w-24 h-24 mx-auto mb-6 animate-castle-float"
            />
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-500 bg-clip-text text-transparent mb-4">
              Queryousity
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-6">
              AI Powered Natural Log Query And Observability Assistant
            </p>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-6">
              <span className="text-red-400 font-bold text-2xl">Stakeholders require instant, self-service access to analytics derived from structured logs without relying on developer intervention</span> <span className="text-orange-300 font-semibold"> The current process involves manual querying and interpretation of logs by engineers, which introduces delays and bottlenecks.</span>
            </p>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-medium">
              <span className="text-primary-300 font-bold">What if Queryosity could satisfy this instantly?</span> 
              Queryosity enables natural language querying over structured log data which includes timestamp, error codes, and error messages so that non-technical users can retrieve insights quickly and independently.
            </p>
          </div>

          {/* Key Features Icons */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="card text-center transform hover:scale-105 transition-all duration-300">
              <Search className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Natural Language Query</h3>
              <p className="text-gray-400">Ask questions about your data in plain English</p>
            </div>
            <div className="card text-center transform hover:scale-105 transition-all duration-300">
              <Brain className="w-12 h-12 text-secondary-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">AI-Powered Instant Analytics</h3>
              <p className="text-gray-400">Get intelligent insights and automated investigations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
