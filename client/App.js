import React from 'react';
import { UserProvider } from './components/UserState';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/profile" component={Profile} exact />
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
