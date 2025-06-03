import axios from 'axios';

export const BASE_URL = 'http://127.0.0.1:3000';

export const agent = axios.create({ baseURL: BASE_URL });

export const error404 = 404;
