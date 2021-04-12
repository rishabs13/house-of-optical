import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './common/constants';
import Dashboard from './components/dashboard'
import LoginIn from './components/login';
import SignUp from './components/signup';
import Checkout from './components/checkout/Checkout';
import AllProducts from './components/cards/allProducts';

const AppRouters = () =>

  (
    <Switch>
      <Route exact path={`/${routes.DASHBOARD}`} component={Dashboard} />
      <Route exact path={`/${routes.LOGIN}`} component={LoginIn} />
      <Route exact path={`/${routes.SIGNUP}`} component={SignUp} />
      <Route exact path={`/${routes.CHECKOUT}`} component={Checkout} />
      <Route exact path={`/${routes.PRODUCTS}`} component={AllProducts} />
      <Route path="*" render={() => <div>Page not Found</div>} />
    </Switch>
  )
;

export { AppRouters as Routers };