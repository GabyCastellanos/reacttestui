import React, { useState } from 'react';
import { Send, Clock, Sparkles } from 'lucide-react';
import type { QueryResponse } from './Dashboard';

interface QueryInterfaceProps {
  selectedTable: string;
  onQuerySubmit: (query: string) => Promise<void>;
  queryHistory: QueryResponse[];
}

const QueryInterface: React.FC<QueryInterfaceProps> = ({
  selectedTable,
  onQuerySubmit,
  queryHistory
}) => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || !selectedTable || isLoading) return;

    setIsLoading(true);
    try {
      await onQuerySubmit(query.trim());
      setQuery(''); // Clear input after successful submission
    } catch (error) {
      console.error('Query error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestionQueries = [
    "Show me all failed transactions in the last 24 hours",
    "What are the most common error patterns in risk service logs?",
    "Find unusual transaction spikes today",
    "Show me high-risk transactions from this week",
    "List top transaction amounts by user"
  ];

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
  };

  return (
    <div className="space-y-6">
      {/* Query Input */}
      <div className="card">
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-white mb-2">
            Natural Language Query
          </h2>
          {selectedTable ? (
            <p className="text-sm text-gray-400">
              Querying: <span className="font-medium text-primary-400">{selectedTable}</span>
            </p>
          ) : (
            <p className="text-sm text-red-400">
              Please select a data source first
            </p>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={selectedTable
                ? `Ask anything about your ${selectedTable} data... e.g., "Show me errors from the last hour"`
                : "Select a data source to start querying"
              }
              disabled={!selectedTable || isLoading}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none disabled:bg-gray-50 disabled:text-gray-500"
            />
            <div className="absolute top-3 right-3">
              <Sparkles className="h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-400">
              {query.length}/500 characters
            </div>
            <button
              type="submit"
              disabled={!query.trim() || !selectedTable || isLoading}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>Query</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Query Suggestions */}
        {selectedTable && !query && (
          <div className="mt-6 pt-6 border-t border-dark-600">
            <h3 className="text-sm font-medium text-gray-300 mb-3">
              Try these example queries:
            </h3>
            <div className="flex flex-wrap gap-2">
              {suggestionQueries.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="text-sm px-3 py-2 bg-dark-700 hover:bg-dark-600 text-gray-300 rounded-full transition-colors border border-dark-600"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Query History */}
      {queryHistory.length > 0 && (
        <div className="card">
          <h3 className="text-lg font-semibold text-white mb-4">
            Recent Queries
          </h3>
          <div className="space-y-3">
            {queryHistory.slice(0, 5).map((item) => (
              <div
                key={item.id}
                className="p-3 bg-dark-700 rounded-lg cursor-pointer hover:bg-dark-600 transition-colors border border-dark-600"
                onClick={() => setQuery(item.query)}
              >
                <div className="flex items-start justify-between">
                  <p className="text-sm text-gray-200 flex-1 mr-3">
                    {item.query}
                  </p>
                  <div className="flex items-center text-xs text-gray-400 space-x-2">
                    <Clock className="h-3 w-3" />
                    <span>{item.timestamp.toLocaleTimeString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QueryInterface;
