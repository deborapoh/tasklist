import { ROOT_URL } from '../config';
import axios from 'axios';

const Task = {
  async getTasks() {
    const response = await axios.get(`${ROOT_URL}/task`);

    return response.data.objects;
  },
};

export default Task;
