import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { LandingPage } from './LandingPage';
import { BookingPage } from './BookingPage';

export const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/booking" component={BookingPage} />
      </Switch>
    </Router>
  );
};
