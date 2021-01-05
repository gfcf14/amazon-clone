import axios from 'axios';

const instance = axios.create({
  baseUrl: 'http://localhost:5001/clone-53b4a/us-central1/api' // the API (cloud function) url
});

export default instance;