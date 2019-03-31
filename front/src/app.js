import React, { Component } from 'react';
import Router from './router';
import Login from './pages/login';
import Header from './components/header';
import Nav from './components/Nav';
import ReactLogo from './assets/logo.png';
import Config from './config';

class App extends Component {
  state = {
    userCompleted: false,
  };

  updatePage = () => {
    this.setState({ userCompleted: true });
  };

  render() {
    const { userCompleted } = this.state;
    return !userCompleted ? (
      <Login updatePage={this.updatePage} />
    ) : (
      <div className="App">
        {Config.TITLE}
        <main>
          <img src={ReactLogo} alt="Logo React" />
          <Header />
          <Nav />
          <Router />
        </main>
      </div>
    );
  }
}

export default App;
