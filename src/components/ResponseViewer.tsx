import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Code, Database, Clock, Copy, Check } from 'lucide-react';
import type { QueryResponse } from './Dashboard';

interface ResponseViewerProps {
  response: QueryResponse;
}

const ResponseViewer: React.FC<ResponseViewerProps> = ({ response }) => {
  const [showSqlQuery, setShowSqlQuery] = useState(false);
  const [showRawData, setShowRawData] = useState(false);
  const [copiedSql, setCopiedSql] = useState(false);
  const [copiedData, setCopiedData] = useState(false);

  const copyToClipboard = async (text: string, type: 'sql' | 'data') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'sql') {
        setCopiedSql(true);
        setTimeout(() => setCopiedSql(false), 2000);
      } else {
        setCopiedData(true);
        setTimeout(() => setCopiedData(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const formatJson = (data: any) => {
    return JSON.stringify(data, null, 2);
  };

  return (
    <div className="card">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white">
            Query Results
          </h2>
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{response.executionTime.toFixed(0)}ms</span>
            </div>
            <span>{response.timestamp.toLocaleString()}</span>
          </div>
        </div>

        {/* Original Query */}
        <div className="p-3 bg-dark-700 rounded-lg mb-4 border border-dark-600">
          <p className="text-sm font-medium text-gray-300 mb-1">Your Query:</p>
          <p className="text-sm text-gray-200 italic">"{response.query}"</p>
        </div>
      </div>

      {/* AI Response */}
      <div className="mb-6">
        <h3 className="text-base font-medium text-white mb-3">
          AI Analysis
        </h3>
        <div className="prose prose-sm max-w-none">
          <p className="text-gray-300 leading-relaxed">
            {response.naturalLanguageResponse}
          </p>
        </div>
      </div>

      {/* Technical Details */}
      <div className="space-y-4">
        {/* SQL Query Section */}
        <div className="border border-gray-200 rounded-lg">
          <button
            onClick={() => setShowSqlQuery(!showSqlQuery)}
            className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center space-x-2">
              <Code className="h-5 w-5 text-gray-600" />
              <span className="font-medium text-gray-900">Generated SQL Query</span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  copyToClipboard(response.sqlQuery, 'sql');
                }}
                className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                title="Copy SQL"
              >
                {copiedSql ? (
                  <Check className="h-4 w-4 text-green-600" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
              {showSqlQuery ? (
                <ChevronDown className="h-5 w-5 text-gray-400" />
              ) : (
                <ChevronRight className="h-5 w-5 text-gray-400" />
              )}
            </div>
          </button>

          {showSqlQuery && (
            <div className="px-4 pb-4">
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <code className="text-sm text-green-400 font-mono whitespace-pre">
                  {response.sqlQuery}
                </code>
              </div>
            </div>
          )}
        </div>

        {/* Raw Data Section */}
        <div className="border border-gray-200 rounded-lg">
          <button
            onClick={() => setShowRawData(!showRawData)}
            className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center space-x-2">
              <Database className="h-5 w-5 text-gray-600" />
              <span className="font-medium text-gray-900">
                Raw Data ({response.rawData.length} records)
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  copyToClipboard(formatJson(response.rawData), 'data');
                }}
                className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                title="Copy JSON"
              >
                {copiedData ? (
                  <Check className="h-4 w-4 text-green-600" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
              {showRawData ? (
                <ChevronDown className="h-5 w-5 text-gray-400" />
              ) : (
                <ChevronRight className="h-5 w-5 text-gray-400" />
              )}
            </div>
          </button>

          {showRawData && (
            <div className="px-4 pb-4">
              {response.rawData.length > 0 ? (
                <div className="space-y-4">
                  {/* Table View */}
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          {Object.keys(response.rawData[0]).map((key) => (
                            <th
                              key={key}
                              className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              {key}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {response.rawData.slice(0, 10).map((row, index) => (
                          <tr key={index}>
                            {Object.values(row).map((value, cellIndex) => (
                              <td
                                key={cellIndex}
                                className="px-3 py-2 whitespace-nowrap text-sm text-gray-900"
                              >
                                {String(value)}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {response.rawData.length > 10 && (
                    <p className="text-sm text-gray-500 text-center">
                      Showing first 10 of {response.rawData.length} records
                    </p>
                  )}
                </div>
              ) : (
                <p className="text-sm text-gray-500 p-4">No data returned</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResponseViewer;
