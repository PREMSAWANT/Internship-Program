import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || '';


// Create axios instance with default config
const apiClient = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if it exists
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API
export const authAPI = {
  register: async (userData) => {
    return apiClient.post('/auth/register', userData);
  },
  
  login: async (credentials) => {
    return apiClient.post('/auth/login', credentials);
  },
  
  getCurrentUser: async () => {
    return apiClient.get('/auth/me');
  },
};

// User API
export const userAPI = {
  getAllUsers: async () => {
    return apiClient.get('/users');
  },
  
  getUserById: async (userId) => {
    return apiClient.get(`/users/${userId}`);
  },
};

export default apiClient;
