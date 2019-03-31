import { ROOT_URL } from '../config';
import { post } from '../helpers/Requisitions';

const Login = {
  async valid(user, pass) {
    // const body = {
    //   user,
    //   pass,
    // };
    // const res = await post(`${ROOT_URL}/login`, body);
    // return res;
    return true;
  },
};

export default Login;
