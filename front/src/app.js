import React, { Component } from 'react';
import Header from './components/header';
import Router from './router';

class App extends Component {
  state = {

  };

  render() {

    return (
      <div className="App">
        <main>
          <Header />
          <Router />
        </main>
      </div>
    );
  }
}

export default App;
