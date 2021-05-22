import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Home from './views/pages/Home';
import Login from './views/pages/Login';
import SignUp from './views/pages/SignUp';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/criar-conta" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;