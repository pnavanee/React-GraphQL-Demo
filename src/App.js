import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import {AppHeader} from './comp-utils/app-header';
import RegistrationForm from './register';
import Login from './login';
import Products from './product-list';
import Users from './user-list';
import ProductEdit from './product-edit';
import { createBrowserHistory } from 'history';
let history = createBrowserHistory();


const AuthRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={(props) => (
      !rest.auth
        ? <Component {...props} />
        : <Redirect to='/' />
    )} />
  };


function App() {
  return (
    <Router history={history}>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <AuthRoute exact path='/' component={Login} />
        <AuthRoute path='/register' component={RegistrationForm} />
      
          <Route path="/products">
               <Products/>
          </Route>
          <Route path="/product/:id">
                <ProductEdit/>
          </Route>
          <Route path='/users'>
              <Users/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
