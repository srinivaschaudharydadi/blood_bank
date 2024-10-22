// src/apiService.js

import axios from 'axios';

const API_URL = 'http://your-backend-url/api'; // Replace with your actual backend URL

export const getBloodDonors = async () => {
  try {
    const response = await axios.get(`${API_URL}/blood-donors`);
    return response.data;
  } catch (error) {
    console.error('Error fetching blood donors:', error);
    throw error;
  }
};
