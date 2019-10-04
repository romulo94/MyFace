import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Show from './pages/Show';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/show/:id" component={Show} />
    </Switch>
  );
}
