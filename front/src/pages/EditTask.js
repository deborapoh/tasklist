import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/button';
import wasteBin from '../assets/wasteBin.svg';
import DeleteTask from './DeleteTask';
import Task from '../services';

import './style.scss';

class EditTask extends Component {

  constructor() {
    super();
    this.state = {
      showModal: false,
      title: '',
      description: '',
      status: 'P',
    };
  }

  openModal = () => {
    this.setState({
      showModal: true
    });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClick = async () => {

    const { title, description, status } = this.state;
    await Task.addTask({ title, description, status, active: true });
  }

  render() {

    const {
      showModal,
      title,
      description,
      status,
      task
    } = this.state;

    return (
      <div>

        {
          showModal
            ? <DeleteTask />
            : null
        }

        <div className="purpleRow">
          <div className="description">Título</div>
          <img
            src={wasteBin}
            className="wasteBin"
            onClick={this.openModal}
          />
        </div>


        <div className="editTask">
          <input
            className="edition"
            type="text"
            name="title"
            value={title}
            onChange={ this.handleChange }
          />

          <div className="purpleRow">Status</div>

          <div className="edition status">
            <label className="container">Pendente
              <input
                type="radio"
                value="P"
                name="status"
                checked={ status === 'P' }
                onChange={ this.handleChange }

              />
              <span className="radio-button"></span>
            </label>
            <label className="container">Concluída
              <input
                type="radio"
                value="C"
                name="status"
                checked={ status === 'C' }
                onChange={ this.handleChange }

              />
              <span className="radio-button"></span>
            </label>
          </div>

          <div className="purpleRow">Descrição</div>
          <input
            className="edition description"
            type="text"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />

          <Link
            className="btn"
            to="/"
            onClick={ this.handleClick }
            style={{ textDecoration: 'none' }}
          >
            <Button type="CONCLUDE_TASK" />
          </Link>

        </div>

      </div>
    );
  }
}

export default EditTask;
