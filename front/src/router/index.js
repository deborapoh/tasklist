import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

class Router extends Component {
  state = {
    nav: null,
  };

  async componentWillMount() {
    let routesList = null;
    routesList = require('./routes').routes;

    const NAVIGATIONS = await routesList();
    this.setState({ nav: NAVIGATIONS });
  }

  render() {

    const { nav } = this.state;

    return (
      <Switch>
        {nav
          && nav.map(r => (
            <Route
              key={r.name}
              exact
              path={r.path}
              component={r.loader.default}
            />
          ))}
      </Switch>
    );
  }
}

export default Router;

