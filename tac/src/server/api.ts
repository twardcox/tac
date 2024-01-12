import axios from 'axios';

const origin = typeof window !== 'undefined' ? window.location.origin : '';

const getDBBaseUrl = (path = '') => {
  return `${process.env.SERVER_URL}${path}`;
};

export const tacApi = axios.create({
  baseURL: getDBBaseUrl(),
  timeout: 5000,
  auth: {
    username: process.env.DATABASE_USERNAME as string,
    password: process.env.DATABASE_PASSWORD as string,
  },
  headers: {
    Accept: 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'content-type': 'application/json',
  },
});
