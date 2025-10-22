import { Play, Code2 } from 'lucide-react';

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

        {/* Architecture Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="card">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Code2 className="w-8 h-8 text-primary-500" />
              System Architecture
            </h3>
            <div className="space-y-4">
              <div className="bg-dark-700 rounded-lg p-4">
                <h4 className="font-semibold text-secondary-400 mb-2">Frontend Layer</h4>
                <p className="text-gray-400 text-sm">React 18 + TypeScript for type-safe, responsive UI</p>
              </div>
              <div className="bg-dark-700 rounded-lg p-4">
                <h4 className="font-semibold text-secondary-400 mb-2">API Gateway</h4>
                <p className="text-gray-400 text-sm">blah blah blah blah</p>
              </div>
              <div className="bg-dark-700 rounded-lg p-4">
                <h4 className="font-semibold text-secondary-400 mb-2">AI Processing</h4>
                <p className="text-gray-400 text-sm">blah blah blah blah</p>
              </div>
              <div className="bg-dark-700 rounded-lg p-4">
                <h4 className="font-semibold text-secondary-400 mb-2">Data Layer</h4>
                <p className="text-gray-400 text-sm">blah blah blah blah</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
