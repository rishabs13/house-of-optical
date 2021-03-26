import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './common/constants';
import LandingPage from './components/landingPage'
import LoginIn from './components/login';
import SignUp from './components/signup';
import Checkout from './components/checkout/Checkout';

const AppRouters = () =>

  (
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route exact path={`/${routes.LOGIN}`} component={LoginIn} />
      <Route exact path={`/${routes.SIGNUP}`} component={SignUp} />
      <Route exact path={`/${routes.CHECKOUT}`} component={Checkout} />
      <Route path="*" render={() => <div>Page not Found</div>} />
    </Switch>
  )
;

export { AppRouters as Routers };