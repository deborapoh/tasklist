import axios from 'axios';
// import Token from '../helpers/Token';
import Login from './Login';

const UNAUTHORIZED = 401;
axios.interceptors.response.use(
  response => response, // hide preloader
  (error) => {
    if (error && error.response) {
      const { status } = error.response;
      if (status && status === UNAUTHORIZED) {
        // Token.remove()
        window.location.reload();
      }
    }
    // hide preloader
    return Promise.reject(error);
  },
);

axios.interceptors.request.use(
  response => response, // show preloader
  error => Promise.reject(error),
);

const Api = {
  Login,
};

export default Api;
