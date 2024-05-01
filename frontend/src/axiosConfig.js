import axios from 'axios';

axios.defaults.baseURL =
  process.env.NODE_ENV !== 'production' ? 'https://textileapp-2.onrender.com/' : '/';
