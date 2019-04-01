import { ROOT_URL } from '../config';
import axios from 'axios';

const Task = {

  async getTaskById(taskId) {
    const response = await axios.get(`${ROOT_URL}/api/task/${taskId}`);
    return response.data;
  },

  async getTasks() {
    const response = await axios.get(`${ROOT_URL}/get_tasks`);
    return response.data.tasks;
  },

  async addTask(task) {
    const response = await axios.post(`${ROOT_URL}/add_task?title=${task.title}&description=${task.description}&active=true&status=${task.status}`);
    return response;
  },

  async updateTask(task) {
    const response = await axios.put(`${ROOT_URL}/update_task?id=${task.id}&title=${task.title}&description=${task.description}&status=${task.status}`);
    return response.data;
  },

  async deleteTask(taskId) {
    const response = await axios.put(`${ROOT_URL}/delete_task?id=${taskId}`);
    return response.data;
  },
};

export default Task;
