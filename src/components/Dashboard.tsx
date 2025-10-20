import React, { useState } from 'react';
import Header from './Header';
import TableSelector from './TableSelector';
import QueryInterface from './QueryInterface';
import ResponseViewer from './ResponseViewer';

export interface QueryResponse {
  id: string;
  query: string;
  naturalLanguageResponse: string;
  sqlQuery: string;
  rawData: any[];
  timestamp: Date;
  executionTime: number;
}

const Dashboard: React.FC = () => {
  const [selectedTable, setSelectedTable] = useState<string>('');
  const [queryHistory, setQueryHistory] = useState<QueryResponse[]>([]);
  const [currentResponse, setCurrentResponse] = useState<QueryResponse | null>(null);

  const handleTableSelect = (tableName: string) => {
    setSelectedTable(tableName);
  };

  const handleQuerySubmit = async (query: string) => {
    // Mock API call - replace with actual backend
    const mockResponse: QueryResponse = {
      id: Date.now().toString(),
      query,
      naturalLanguageResponse: `Based on your query "${query}" on the ${selectedTable} table, I found the following insights: The data shows patterns indicating normal operations with a slight uptick in activity during peak hours. There were 3 minor anomalies detected in the last 24 hours, all of which were automatically resolved.`,
      sqlQuery: `SELECT * FROM ${selectedTable} WHERE timestamp >= '2024-10-02' AND status IN ('success', 'warning') ORDER BY timestamp DESC LIMIT 100;`,
      rawData: [
        { id: 1, timestamp: '2024-10-02 14:30:00', status: 'success', message: 'Payment processed', amount: 129.99 },
        { id: 2, timestamp: '2024-10-02 14:31:15', status: 'success', message: 'User login', user_id: 'user_123' },
        { id: 3, timestamp: '2024-10-02 14:32:45', status: 'warning', message: 'Rate limit approached', endpoint: '/api/search' },
      ],
      timestamp: new Date(),
      executionTime: Math.random() * 1000 + 200, // Random execution time between 200-1200ms
    };

    setCurrentResponse(mockResponse);
    setQueryHistory(prev => [mockResponse, ...prev.slice(0, 9)]); // Keep last 10 queries
  };

  return (
    <div className="min-h-screen bg-dark-900 investigation-pattern">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-100 mb-2">
            🕵️ Welcome back, Detective!
          </h1>
          <p className="text-gray-400">
            Ready to investigate your data? Use natural language to uncover insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Table Selector */}
          <div className="lg:col-span-1">
            <TableSelector
              selectedTable={selectedTable}
              onTableSelect={handleTableSelect}
            />
          </div>

          {/* Right Column - Query Interface and Results */}
          <div className="lg:col-span-2 space-y-6">
            <QueryInterface
              selectedTable={selectedTable}
              onQuerySubmit={handleQuerySubmit}
              queryHistory={queryHistory}
            />

            {currentResponse && (
              <ResponseViewer response={currentResponse} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
