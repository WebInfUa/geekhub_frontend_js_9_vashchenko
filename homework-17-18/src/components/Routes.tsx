import React from 'react';

import {BrowserRouter, Router, Route, Switch, Redirect} from 'react-router-dom';

import Login from './elements/Login/Login';
import Dashboard from './elements/Dashboard/Main';

function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/app" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
