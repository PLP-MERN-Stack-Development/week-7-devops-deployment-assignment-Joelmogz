const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

class ApiService {
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Request failed');
      }

      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Contact form submission
  async submitContact(contactData) {
    return this.request('/api/contact', {
      method: 'POST',
      body: JSON.stringify(contactData),
    });
  }

  // Get application statistics
  async getStats() {
    return this.request('/api/stats');
  }

  // Get features list
  async getFeatures() {
    return this.request('/api/features');
  }

  // Health check
  async healthCheck() {
    return this.request('/health');
  }
}

export default new ApiService();