import React from 'react';
import { UserProvider } from './components/UserState';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';

function App() {
  return (
    <UserProvider>
      {/* <Route path="/" component={Login} exact />
      <Route path="/profile" component={Profile} exact /> */}
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/profile" component={Profile} exact />
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
