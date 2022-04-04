import React from 'react';
import Navbar from './Navbar';
import routes from '../routes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Test() {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              exact
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default Test;
