import axios from 'axios';

/* axios az env urlbo vagy fallback a localhostra*/
const apiClient = axios.create({
  baseURL: 'http://34.136.198.157:1337',
  headers: {
    'Content-Type': 'application/json'
  }
});

export async function fetchData(endpoint: string) {
  try {
    const response = await apiClient.get(endpoint);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    throw error;
  }
}
