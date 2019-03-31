import { ROOT_URL } from '../config';
import axios from 'axios';

const Task = {
  async getTasks() {
    //const response = await axios.get();

    return response.data.objects;
  },
};

export default Task;
