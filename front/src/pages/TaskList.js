import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/button';
import Checkbox from '../components/checkbox.js';
import Task from '../services';

import './style.scss';

class TaskList extends Component {

  constructor() {
    super();
    this.state = {
      showModal: false,
      tasks: [],
    };
  }

  componentWillMount = async () => {
    let { tasks } = this.state;
    tasks = await Task.getTasks();
    this.setState({ tasks });
  }

  render() {

    const { tasks } = this.state;

    return (
      <div>
        <div className="purpleRow">Tarefas</div>
        <div className="taskList">
          {
            tasks.length > 0
            ? tasks.map((task) => (
                <Link
                  className={`task ${task.status}`}
                  key={task.id}
                  to={`/${task.id}/edit_task`}
                  style={{ textDecoration: 'none' }}
                >
                  <Checkbox status={task.status} />
                  {task.title}
                </Link>
              ))
            : <div className="noRecords">Nenhuma tarefa encontrada</div>
          }
          <Link className="btn" to="/add_task" style={{ textDecoration: 'none' }} >
            <Button type="ADD" />
          </Link>
        </div>
      </div>
    );
  }

}

export default TaskList;
