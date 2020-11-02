import axios from 'axios';

axios.interceptors.request.use(
  async (config) => {
    try {
      config['headers'] = {
        Authorization: 'Bearer Wookie2019',
      };
      return config;
    } catch (error) {
      return error;
    }
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axios;
