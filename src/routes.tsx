import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './utils/PrivateRoute';

import New from './components/New';

import Feed from './views/Feed';
import Users from './views/Users';
import Home from './views/Home';

const Routes: React.FC = (): JSX.Element => (
  <Switch>
    <Route path="/" exact component={Home} />
    <PrivateRoute path="/users" component={Users} />
    <PrivateRoute path="/:email/feed" component={Feed} />
    <PrivateRoute path="/feed" component={Feed} />
    <PrivateRoute path="/new" component={New} />
  </Switch>
);

export default Routes;
