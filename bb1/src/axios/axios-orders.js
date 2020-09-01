import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:1738/burger',
});

export default instance;
