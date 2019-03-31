import { ROOT_URL } from '../config';
import axios from 'axios';

const Task = {
  async getTasks() {
    const response = await axios.get(`${ROOT_URL}/get_tasks`);
    return response.data.tasks;
  },

  async addTask() {
    const response = await axios.post(`${ROOT_URL}/add_task`);
    //return response.data.tasks;
  },

  async updateTask() {
    const response = await axios.put(`${ROOT_URL}/update_task`);
    //return response.data.tasks;
  },

  async deleteTask(id) {
    const response = await axios.put(`${ROOT_URL}/delete_task`);
    //return response.data.tasks;
  },
};

export default Task;
