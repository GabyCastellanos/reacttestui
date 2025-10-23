import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/95 backdrop-blur-sm border-b border-dark-700">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Queryous Minds" className="w-8 h-8" />
            <span className="text-xl font-bold text-white">Queryous Minds</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-300 hover:text-primary-400 transition-colors"
            >
              Overview
            </button>
            <button
              onClick={() => scrollToSection('demo')}
              className="text-gray-300 hover:text-primary-400 transition-colors"
            >
              Demo
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="text-gray-300 hover:text-primary-400 transition-colors"
            >
              Team
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-dark-700">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('features')}
                className="text-gray-300 hover:text-primary-400 transition-colors text-left"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('demo')}
                className="text-gray-300 hover:text-primary-400 transition-colors text-left"
              >
                Demo
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="text-gray-300 hover:text-primary-400 transition-colors text-left"
              >
                Team
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
