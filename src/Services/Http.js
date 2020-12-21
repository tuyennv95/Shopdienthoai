    import axios from 'axios';

import { BASE_API } from '../constants/index';
const http = axios.create({
    baseURL: BASE_API,
});

export default http;