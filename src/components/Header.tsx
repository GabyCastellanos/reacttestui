import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { LogOut } from 'lucide-react';

const Header: React.FC = () => {
  const { logout } = useAuth();

  return (
    <header className="bg-dark-800 shadow-xl border-b border-dark-600 investigation-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className="p-2">
              <img
                src="/logo.png"
                alt="Queryous Minds Logo"
                className="h-16 w-16 object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-100">
                Queryous Minds
              </h1>
              <p className="text-xs text-gray-400">AI-Powered Investigation Assistant</p>
            </div>
          </div>

          {/* Logout */}
          <button
            onClick={logout}
            className="p-2 text-gray-400 hover:text-red-400 transition-colors"
            title="Logout"
          >
            <LogOut className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
