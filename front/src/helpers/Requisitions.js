import axios from 'axios';
import Token from './Token';

const showToast = () => {};

export const list = async (url, returnResult) => {
  try {
    const { data } = await axios.get(url, {
      headers: {
        token: Token.get(),
      },
    });

    return returnResult ? data[returnResult] : data;
  } catch (error) {
    console.log(error);
    if (error.response && error.response.data) {
      showToast(error.response.data.message);
    }
  }
  return false;
};

export const post = async (url, body, onCatch) => {
  try {
    const { data } = await axios.post(url, body, {
      headers: {
        token: Token.get(),
      },
    });
    showToast(data.message);
    return data;
  } catch (error) {
    console.log(error);
    if (error.response && error.response.data && onCatch) {
      onCatch(error.response.data.message);
    }
    if (!onCatch) {
      showToast(error.response.data.message);
    }
  }
  return false;
};

export const put = async (url, body) => {
  try {
    const { data } = await axios.put(url, body, {
      headers: {
        token: Token.get(),
      },
    });
    showToast(data.message);
    return data;
  } catch (error) {
    console.log(error);
    if (error.response && error.response.data) {
      showToast(error.response.data.message);
    }
  }
  return false;
};

export const del = async (url) => {
  try {
    const { data } = await axios.delete(url, {
      headers: {
        token: Token.get(),
      },
    });
    showToast(data.message);
    return true;
  } catch (error) {
    console.log(error);
    if (error.response && error.response.data) {
      showToast(error.response.data.message);
    }
  }
  return false;
};

export const patch = async (url, body) => {
  try {
    const { data } = await axios.patch(url, body, {
      headers: {
        token: Token.get(),
      },
    });
    showToast(data.message);
    return true;
  } catch (error) {
    console.log(error);
    if (error.response && error.response.data) {
      showToast(error.response.data.message);
    }
  }
  return false;
};
