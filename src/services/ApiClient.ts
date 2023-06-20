import axios from 'axios';
import { API_URL } from '../config/ApiConfig';

export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});
