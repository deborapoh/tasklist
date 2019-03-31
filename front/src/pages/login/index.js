import React, { Component } from 'react';
import Api from '../../services';

export default class Login extends Component {
  state = {
    user: '',
    pass: '',
  };

  setStateBase = (e) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  checkLogin = async () => {
    const { user, pass } = this.state;
    const { updatePage } = this.props;
    const res = await Api.Login.valid(user, pass);
    if (res) {
      updatePage();
    }
  };

  render() {
    const { user, pass } = this.state;
    return (
      <div>
        <h2>Login</h2>

        <label htmlFor="user">
          User
          <input
            type="text"
            id="user"
            name="user"
            value={user}
            onChange={e => this.setStateBase(e)}
          />
        </label>

        <label htmlFor="pass">
          Password
          <input
            type="password"
            id="pass"
            name="pass"
            value={pass}
            onChange={e => this.setStateBase(e)}
          />
        </label>

        <button type="button" onClick={this.checkLogin}>
          ENTRAR
        </button>
      </div>
    );
  }
}
