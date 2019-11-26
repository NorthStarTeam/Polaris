import React from 'react';
import { UserProvider } from './components/AccState';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/signup" component={SignUp} exact />
          {/* <PrivateRoute path="/protected" component={Profile} /> */}
          <Route path="/profile" component={Profile} exact />
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
