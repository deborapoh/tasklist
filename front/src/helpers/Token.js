import { NAME_TOKEN_LS } from '../config';

const Token = {
  get: () => {
    // eslint-disable-next-line
    const token = localStorage.getItem(NAME_TOKEN_LS);
    return token;
  },
  set: (value) => {
    // eslint-disable-next-line
    localStorage.setItem(NAME_TOKEN_LS, value);
  },
  remove: () => {
    // eslint-disable-next-line
    localStorage.removeItem(NAME_TOKEN_LS);
  },
};

export default Token;
