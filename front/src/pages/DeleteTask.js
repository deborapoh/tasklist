import React, { Component } from 'react';
import Task from '../services';
import { Link } from 'react-router-dom';

import './style.scss';

class DeleteTask extends Component {

  constructor() {
    super();
    this.state = {
      showModal: true,
    }
  }

  handleClick = async () => {

    const { taskId } = this.props;
    await Task.deleteTask(taskId);
    this.setState({ showModal: false });
  }

  showModal = () => {
    const { showModal } = this.state;
    this.setState({ showModal });
    this.props.showModal(showModal);
  }

  render() {
    return (
      <div className="modal">
        <div>Deseja excluir a tarefa?</div>
        <Link
          className="deleteButton"
          to="/"
          onClick={ this.handleClick }
          style={{ textDecoration: 'none' }}
        >
          <div  onClick={ this.handleClick } >Sim</div>
        </Link>
      </div>
    );
  }
}

export default DeleteTask;
