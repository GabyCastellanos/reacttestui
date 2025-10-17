import React from 'react';
import { CreditCard, AlertTriangle } from 'lucide-react';

interface TableSelectorProps {
  selectedTable: string;
  onTableSelect: (tableName: string) => void;
}

interface TableInfo {
  name: string;
  displayName: string;
  icon: React.ReactNode;
  category: string;
}

const mockTables: TableInfo[] = [
  {
    name: 'transaction_data',
    displayName: 'Transaction Data',
    icon: <CreditCard className="h-5 w-5" />,
    category: 'Financial Data'
  },
  {
    name: 'risk_service_logs',
    displayName: 'Risk Service logs',
    icon: <AlertTriangle className="h-5 w-5" />,
    category: 'System Logs'
  }
];

const TableSelector: React.FC<TableSelectorProps> = ({ selectedTable, onTableSelect }) => {
  const categories = Array.from(new Set(mockTables.map(table => table.category)));

  return (
    <div className="card">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-100 mb-2">
          Data Sources
        </h2>
        <p className="text-sm text-gray-400">
          Select a data source to begin your investigation
        </p>
      </div>

      <div className="space-y-4">
        {categories.map(category => (
          <div key={category}>
            <h3 className="text-sm font-medium text-gray-300 mb-2 px-2">
              🔍 {category}
            </h3>
            <div className="space-y-2">
              {mockTables
                .filter(table => table.category === category)
                .map(table => (
                  <button
                    key={table.name}
                    onClick={() => onTableSelect(table.name)}
                    className={`w-full p-3 rounded-lg text-left transition-all duration-200 magnifying-glass-border ${selectedTable === table.name
                        ? 'bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border-2 border-primary-400 shadow-lg castle-glow'
                        : 'bg-dark-700 border-2 border-transparent hover:bg-dark-600 hover:border-dark-500'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg ${
                        selectedTable === table.name
                          ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                          : 'bg-dark-600 text-gray-400'
                      }`}>
                        {table.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className={`font-medium text-sm ${
                          selectedTable === table.name
                            ? 'text-gray-100'
                            : 'text-gray-200'
                        }`}>
                          {table.displayName}
                        </h4>
                        {selectedTable === table.name && (
                          <div className="mt-2">
                            <span className="text-xs font-medium text-primary-400">
                              ✓ Selected
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableSelector;
