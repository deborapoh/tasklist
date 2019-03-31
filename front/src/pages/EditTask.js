import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/button';
import wasteBin from '../assets/wasteBin.svg';
import DeleteTask from './DeleteTask';

import './style.scss';

class EditTask extends React.Component {

  constructor() {
    super();
    this.state = {
      showModal: false,
    };
  }

  openModal = () => {
    this.setState({
      showModal: true
    });
  }

  render() {

    const { showModal } = this.state;
    console.log(showModal);

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
          <input className="edition" type="text" />

          <div className="purpleRow">Status</div>

          <div className="edition status">
            <label className="container">Pendente
              <input type="radio" checked="hecked" name="radio" />
              <span className="radio-button"></span>
            </label>
            <label className="container">Concluída
              <input type="radio" name="radio" />
              <span className="radio-button"></span>
            </label>
          </div>

          <div className="purpleRow">Descrição</div>
          <input className="edition description" type="text" />

          <Link className="btn"  to="/" style={{ textDecoration: 'none' }} >
            <Button type="CONCLUDED_TASK" />
          </Link>

        </div>

      </div>
    );
  }
}

export default EditTask;
