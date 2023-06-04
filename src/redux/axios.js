import axios from 'axios';

const customFetch = axios.create({
    baseURL: 'https://api.itbook.store/1.0',
  });