import React, { Component } from 'react';
import Header from './components/header';
import Nav from './components/Nav';
import Router from './router';


class App extends Component {
  state = {

  };

  render() {

    return (
      <div className="App">
        <main>
          <Header />
          {/* <Nav /> */}
          <Router />
        </main>
      </div>
    );
  }
}

export default App;
