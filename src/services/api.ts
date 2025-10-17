// API Service Layer - Easy to replace with real backend
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface QueryRequest {
  table: string;
  query: string;
}

export interface QueryApiResponse {
  id: string;
  query: string;
  naturalLanguageResponse: string;
  sqlQuery: string;
  rawData: any[];
  executionTime: number;
}

class ApiService {
  async authenticateUser(email: string, _password: string): Promise<ApiResponse> {
    // Mock implementation - replace with real API call
    try {
      // const response = await fetch(`${this.baseUrl}/auth/login`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, password })
      // });
      // return await response.json();

      // Mock response
      return {
        success: true,
        data: {
          user: {
            id: '1',
            email,
            name: email.split('@')[0],
            role: 'admin'
          },
          token: 'mock-jwt-token'
        }
      };
    } catch (error) {
      return {
        success: false,
        error: 'Authentication failed'
      };
    }
  }

  async submitQuery(request: QueryRequest): Promise<ApiResponse<QueryApiResponse>> {
    // Mock implementation - replace with real API call
    try {
      // const response = await fetch(`${this.baseUrl}/query`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': `Bearer ${localStorage.getItem('auth-token')}`
      //   },
      //   body: JSON.stringify(request)
      // });
      // return await response.json();

      // Mock response with delay to simulate processing
      await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

      const mockResponse: QueryApiResponse = {
        id: Date.now().toString(),
        query: request.query,
        naturalLanguageResponse: this.generateMockResponse(request.query, request.table),
        sqlQuery: this.generateMockSql(request.table, request.query),
        rawData: this.generateMockData(request.table),
        executionTime: Math.random() * 1000 + 200
      };

      return {
        success: true,
        data: mockResponse
      };
    } catch (error) {
      return {
        success: false,
        error: 'Query execution failed'
      };
    }
  }

  private generateMockResponse(query: string, table: string): string {
    if (table === 'transaction_data') {
      return `Based on your query "${query}" on transaction data, I found ${Math.floor(Math.random() * 100 + 50)} transactions matching your criteria. The analysis shows normal payment processing patterns with a few high-value transactions flagged for review.`;
    } else if (table === 'risk_service_logs') {
      return `Your query "${query}" on risk service logs reveals ${Math.floor(Math.random() * 20 + 5)} risk events in the specified timeframe. Most events were automatically handled with ${Math.floor(Math.random() * 3 + 1)} requiring manual review.`;
    }

    return `Analysis of "${query}" shows the ${table} data indicates normal operational patterns with no significant issues detected.`;
  }

  private generateMockSql(table: string, _query: string): string {
    if (table === 'transaction_data') {
      return `SELECT t.*, u.name as user_name
FROM transactions t
JOIN users u ON t.user_id = u.id
WHERE t.timestamp >= NOW() - INTERVAL 24 HOUR
  AND t.status IN ('completed', 'failed')
ORDER BY t.amount DESC
LIMIT 100;`;
    } else if (table === 'risk_service_logs') {
      return `SELECT * FROM risk_logs
WHERE timestamp >= NOW() - INTERVAL 24 HOUR
  AND risk_level >= 'medium'
ORDER BY risk_score DESC, timestamp DESC
LIMIT 50;`;
    }

    return `SELECT * FROM ${table} WHERE timestamp >= NOW() - INTERVAL 24 HOUR ORDER BY timestamp DESC LIMIT 100;`;
  }

  private generateMockData(table: string): any[] {
    if (table === 'transaction_data') {
      return [
        {
          id: 1,
          timestamp: '2024-10-17 14:30:00',
          amount: 1234.56,
          currency: 'USD',
          status: 'completed',
          user_id: 'user_789',
          merchant: 'Amazon',
          payment_method: 'credit_card'
        },
        {
          id: 2,
          timestamp: '2024-10-17 14:31:15',
          amount: 89.99,
          currency: 'USD',
          status: 'completed',
          user_id: 'user_456',
          merchant: 'Shopify Store',
          payment_method: 'paypal'
        },
        {
          id: 3,
          timestamp: '2024-10-17 14:32:45',
          amount: 5000.00,
          currency: 'USD',
          status: 'flagged',
          user_id: 'user_123',
          merchant: 'High Value Store',
          payment_method: 'wire_transfer'
        }
      ];
    } else if (table === 'risk_service_logs') {
      return [
        {
          id: 1,
          timestamp: '2024-10-17 14:30:00',
          risk_level: 'medium',
          risk_score: 0.65,
          event_type: 'suspicious_login',
          user_id: 'user_789',
          ip_address: '192.168.1.100',
          action_taken: 'additional_verification'
        },
        {
          id: 2,
          timestamp: '2024-10-17 14:31:15',
          risk_level: 'high',
          risk_score: 0.89,
          event_type: 'unusual_transaction_pattern',
          user_id: 'user_456',
          ip_address: '10.0.0.50',
          action_taken: 'account_review'
        },
        {
          id: 3,
          timestamp: '2024-10-17 14:32:45',
          risk_level: 'low',
          risk_score: 0.23,
          event_type: 'location_change',
          user_id: 'user_123',
          ip_address: '172.16.0.10',
          action_taken: 'logged_only'
        }
      ];
    }

    return [];
  }
}

export const apiService = new ApiService();
