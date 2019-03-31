import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/button';
import Checkbox from '../components/checkbox.js';
import Task from '../services';

import './style.scss';

const CARDS = [
  {
    title: 'Mercado',
    status: 'pendente',
    description: 'bla bla bla',
    path: '/teste'
  },
  {
    title: 'Estudar C#',
    status: 'pendente',
    description: 'bla bla bla',
    path: '/teste2'
  },
  {
    title: 'Limpar a casa',
    status: 'concluida',
    description: 'bla bla bla',
    path: '/teste'
  },
  {
    title: 'Arrumar',
    status: 'pendente',
    description: 'bla bla bla',
    path: '/teste2'
  },
  {
    title: 'Assistir filme',
    status: 'pendente',
    description: 'bla bla bla',
    path: '/teste'
  },
  {
    title: 'Trocar lâmpada',
    status: 'concluida',
    description: 'bla bla bla',
    path: '/teste2'
  },
  {
    title: 'Visitar museu',
    status: 'pendente',
    description: 'bla bla bla',
    path: '/teste2'
  },
  {
    title: 'Artigos para casa',
    status: 'pendente',
    description: 'bla bla bla',
    path: '/teste2'
  },
  {
    title: 'Trocar lâmpada',
    status: 'pendente',
    description: 'bla bla bla',
    path: '/teste2'
  },
];

class TaskList extends React.Component {

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
    console.log(tasks);

    return (
      <div>
        <div className="purpleRow">Tarefas</div>
        <div className="taskList">
          {
            tasks.map((task, i) => (
              <Link className={`task ${task.status}`} key={i} to='teste' style={{ textDecoration: 'none' }} >
                <Checkbox status={task.status} />
                {task.title}
              </Link>
            ))
          }
          <Link className="btn" key="1" to="/edit_task" style={{ textDecoration: 'none' }} >
            <Button type="ADD" />
          </Link>
        </div>
      </div>
    );
  }

}

export default TaskList;
